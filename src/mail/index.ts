import getContactEn from "./getContactEn";
import getContactIt from "./getContactIt";

export interface ContactEmailProps {
  fullname: string;
  email: string;
  businessName: string;
  website: string;
  message: string;
}

export { getContactEn, getContactIt };
