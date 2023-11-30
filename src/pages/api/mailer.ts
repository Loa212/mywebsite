import type { APIRoute } from "astro";
import { type CollectionEntry, getEntry } from "astro:content";
import { Resend } from "resend";
import { getContactEn, type ContactEmailProps, getContactIt } from "~/mail";
import axios, { type AxiosRequestConfig, type AxiosError } from "axios";
import hashString from "~/utils/hashString";
export const prerender = false;

// Create a new Resend instance with your API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const recaptchaSecretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  // google recaptcha
  const recaptchaToken = data.get("g-recaptcha-response");

  console.log({ recaptchaToken });

  const recaptchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
    }
  );

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    // Handle the verification failure
    return new Response(
      JSON.stringify({
        message: "reCAPTCHA verification failed",
      }),
      { status: 400 }
    );
  }

  // get the data from the form
  const fullname = data.get("name");
  const email = data.get("email");
  const businessName = data.get("businessName");
  const website = data.get("website") || "<i>not provided</i>"; // optional
  const message = data.get("message");

  const i18nId = data.get("i18nId") as CollectionEntry<"i18n">["id"];
  // get the i18n responses
  if (!i18nId)
    return new Response(
      JSON.stringify({
        message: "Unknown language code",
      }),
      { status: 400 }
    );

  const t = await getEntry("i18n", i18nId);
  const mailer = t.data.mailer;

  // Validate the data - you'll probably want to do more than this
  if (!fullname || !email || !message || !businessName) {
    return new Response(
      JSON.stringify({
        message: mailer.missing_fields,
      }),
      { status: 400 }
    );
  }

  const contactEmailProps: ContactEmailProps = {
    fullname: `${fullname}`,
    email: `${email}`,
    businessName: `${businessName}`,
    website: `${website}`,
    message: `${message}`,
  };

  try {
    await resend.emails.send({
      from: "www.loa212.com <noreply@loa212.com>",
      reply_to: ["hello@loa212.com"],
      to: [String(email)],
      bcc: ["anobileloris@gmail.com"],
      subject:
        i18nId === "en"
          ? "Your contact request has been received"
          : "La tua richiesta di contatto è stata ricevuta",
      html:
        i18nId === "en"
          ? getContactEn(contactEmailProps)
          : getContactIt(contactEmailProps),
    });

    // send a post request to facebook signaling that the user has contacted us

    const FB_API_VERSION = import.meta.env.FB_API_VERSION;
    const FB_PIXEL_ID = import.meta.env.FB_PIXEL_ID;
    const FB_ACCESS_TOKEN = import.meta.env.FB_ACCESS_TOKEN;

    // create config for axios
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            user_data: {
              em: [
                // hash of the email
                hashString(String(email)),
              ],
            },
          },
        ],
      },
    };

    try {
      // Send the request to Facebook
      const response = await axios(config);
      console.log(response.data);
    } catch (fbError) {
      // Handle Facebook API errors separately
      const errData = (fbError as AxiosError).response?.data;
      console.error("FB err: ", errData);
      return new Response(
        JSON.stringify({
          message: "Facebook API error",
          data: fbError,
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error({ error });
    return new Response(
      JSON.stringify({
        message: mailer.error,
      }),
      { status: 400 }
    );
  }

  // send the response
  return new Response(
    JSON.stringify({
      message: mailer.success,
    }),
    { status: 200 }
  );
};
