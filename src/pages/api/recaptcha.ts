import type { APIRoute } from "astro";

const recaptchaSecretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestBody = {
    secret: recaptchaSecretKey, // This can be an environment variable
    response: data.recaptcha, // The token passed in from the client
  };

  const response = await fetch(recaptchaURL, {
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), { status: 200 });
};
