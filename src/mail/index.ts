import getContactEn from "./getContactEn";
import getContactIt from "./getContactIt";

export interface ContactEmailProps {
  fullname: string;
  email: string;
  message: string;
}

export { getContactEn, getContactIt };
