import { useState } from "react";
import "./contact-form.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Helper function to encode form data for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    const formAction = e.target.action;

    try {
      const res = await fetch(formAction, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...form,
        }),
      });

      if (res.ok || res.status === 204) {
        setStatus({ submitting: false, success: true, error: null });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Netlify form submission failed unexpectedly.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        action="/thanks/">
        <input type="hidden" name="form-name" value="contact" />

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

        <button type="submit" disabled={status.submitting}>
          {status.submitting ? "Sending..." : "Send Message"}
        </button>

        {status.success && <p className="success">Your message has been sent successfully.</p>}
        {status.error && <p className="error">{status.error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
