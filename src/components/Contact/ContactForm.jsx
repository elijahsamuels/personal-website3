import { useState } from "react";
import "./contact-form.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="/?submitted=true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <label>
          Name
          <input type="text" name="name" required value={form.name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" required value={form.email} onChange={handleChange} />
        </label>

        <label>
          Message
          <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
