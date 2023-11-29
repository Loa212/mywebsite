import type { ContactEmailProps } from ".";

export default function ContactEmailEng(props: ContactEmailProps) {
  const { fullname, email, businessName, website, message } = props;

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head data-id="__react-email-head">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <div
    id="__react-email-preview"
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Your contact request has been received!
  </div>
  <body
    data-id="__react-email-body"
    style="
      background-color: rgb(255, 255, 255);
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
      margin-right: auto;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    "
  >
    <table
      align="center"
      width="100%"
      data-id="__react-email-container"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="
        max-width: 37.5em;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-radius: 0.25rem;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        width: 465px;
      "
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              data-id="react-email-section"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top: 32px"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      data-id="react-email-img"
                      alt="Vercel"
                      src=${import.meta.env.LOGO_URL}
                      width="119"
                      height="119"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        margin-left: auto;
                        margin-right: auto;
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <h1
              data-id="react-email-heading"
              style="
                color: rgb(0, 0, 0);
                font-size: 24px;
                font-weight: 400;
                text-align: center;
                padding: 0px;
                margin-top: 30px;
                margin-bottom: 30px;
                margin-left: 0px;
                margin-right: 0px;
              "
            >
              Hello <strong>${fullname}</strong> !
            </h1>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(0, 0, 0);
              "
            >
              Thanks for reaching out,
            </p>
            <p
              data-id="react-email-text"
              style="
                font-size: 14px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(0, 0, 0);
              "
            >
              We will get back to you as soon as possible at
              <a
                href="mailto:${email}"
                data-id="react-email-link"
                target="_blank"
                style="
                  color: rgb(37, 99, 235);
                  text-decoration: none;
                  text-decoration-line: none;
                "
              >${email}</a
              >. Be sure to check your spam folder if you don&#x27;t see a
              response within 24 hours.
            </p>
            <hr
              data-id="react-email-hr"
              style="
                width: 100%;
                border: none;
                border-top: 1px solid #eaeaea;
                border-width: 1px;
                border-style: solid;
                border-color: rgb(234, 234, 234);
                margin-top: 26px;
                margin-bottom: 26px;
                margin-left: 0px;
                margin-right: 0px;
              "
            />
            <h1
              data-id="react-email-heading"
              style="
                color: rgb(0, 0, 0);
                font-size: 20px;
                font-weight: 400;
                text-align: center;
                padding: 0px;
                margin-top: 30px;
                margin-bottom: 30px;
                margin-left: 0px;
                margin-right: 0px;
              "
            >
              Here&#x27;s a recap of your message:
            </h1>
            <table
              align="center"
              width="100%"
              data-id="react-email-section"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                background-color: rgb(214, 211, 209, 0.4);
                width: 100%;
                border-radius: 0.125rem;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <ul style="list-style-type: none">
                      <li
                        style="
                          color: rgb(0, 0, 0);
                          font-size: 14px;
                          line-height: 24px;
                        "
                      >
                        <strong>Full name:</strong>
                        ${fullname}
                      </li>
                      <li
                        style="
                          color: rgb(0, 0, 0);
                          font-size: 14px;
                          line-height: 24px;
                        "
                      >
                        <strong>Email:</strong>
                        <a
                          href="mailto:${email}"
                          data-id="react-email-link"
                          target="_blank"
                          style="
                            color: rgb(37, 99, 235);
                            text-decoration: none;
                            text-decoration-line: none;
                          "
                        >${email}</a>
                      </li>
                      <li
                        style="
                          color: rgb(0, 0, 0);
                          font-size: 14px;
                          line-height: 24px;
                        "
                      >
                        <strong>Name of your business:</strong>
                        ${businessName}
                      </li>
                      <li
                        style="
                          color: rgb(0, 0, 0);
                          font-size: 14px;
                          line-height: 24px;
                        "
                      >
                        <strong>Current website:</strong>
                        ${website}
                      </li>
                      <li>
                        <strong>Message:</strong>
                        <p
                          data-id="react-email-text"
                          style="
                            font-size: 14px;
                            line-height: 24px;
                            margin: 16px 0;
                            color: rgb(0, 0, 0);
                          "
                        >${message}</p>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr
              data-id="react-email-hr"
              style="
                width: 100%;
                border: none;
                border-top: 1px solid #eaeaea;
                border-width: 1px;
                border-style: solid;
                border-color: rgb(234, 234, 234);
                margin-top: 26px;
                margin-bottom: 26px;
                margin-left: 0px;
                margin-right: 0px;
              "
            />
            <p
              data-id="react-email-text"
              style="
                font-size: 12px;
                line-height: 24px;
                margin: 16px 0;
                color: rgb(102, 102, 102);
              "
            >
              This message was intended for
              <span style="color: rgb(0, 0, 0)">${email}</span>.This message was sent
              from <span style="color: rgb(0, 0, 0)">Loa212.com</span> If you
              were not expecting this invitation, you can ignore this email.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
    `;
}
