import { useEffect } from "react";
import ContactForm from "./ContactForm";
import "./contact-form.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Elijah Samuels | Contact";
  }, []);

  return (
    <>
      <h2>Contact</h2>
      <ContactForm />
    </>
  );
};

export default Contact;
