import ContactForm from "../components/ContactForm";
import contactData from "../data/contact.json";
import type { ContactInfo } from "../types/contact";

const Contact = () => {
  const data: ContactInfo = contactData[0]; // solo uno en el JSON por ahora
  return <ContactForm data={data} />;
};

export default Contact;
