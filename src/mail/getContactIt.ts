import type { ContactEmailProps } from ".";

export default function ContactEmailIta(props: ContactEmailProps) {
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
      La tua richiesta di contatto è stata ricevuta!
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
                        height="42"
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
                Salve <strong>${fullname}</strong> !
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
                Grazie per averci contattato,
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
                Ti risponderemo il prima possibile all&#x27;indirizzo
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
                >. Controlla la tua cartella spam se non ricevi una risposta entro
                24 ore.
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
                Ecco il riepilogo del tuo messaggio:
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
                          <strong>Nome completo:</strong>
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
                            href="mailto:undefined"
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
                        <strong>Nome della tua attività:</strong>
                        ${businessName}
                      </li>
                      <li
                      style="
                        color: rgb(0, 0, 0);
                        font-size: 14px;
                        line-height: 24px;
                      "
                    >
                      <strong>Sito attuale:</strong>
                      ${website}
                    </li>
                        <li>
                          <strong>Descrizione della tua attività:</strong>
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
                Questa email è stata inviata a
                <span style="color: rgb(0, 0, 0)"> </span>. Questo invito è stato
                inviato da ${email}
                <span style="color: rgb(0, 0, 0)">Loa212.com</span> Se non ti
                aspettavi questo invito, puoi ignorare questa email.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  
    `;
}
