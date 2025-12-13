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

  // const encode = (data) =>
  //   Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus({ submitting: true, success: false, error: null });

  //   try {
  //     const res = await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({
  //         "form-name": "contact",
  //         ...form,
  //       }),
  //     });

  //     if (res.ok) {
  //       setStatus({ submitting: false, success: true, error: null });
  //       setForm({ name: "", email: "", message: "" });
  //     } else {
  //       throw new Error("Submission failed");
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //     setStatus({
  //       submitting: false,
  //       success: false,
  //       error: "Something went wrong. Please try again.",
  //     });
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  // document.querySelector("form").addEventListener("submit", handleSubmit);

  return (
    <div className="contact-form-wrapper">
      {/* <form name="contact" netlify>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit" method="POST">
            Send
          </button>
        </p>
      </form> */}
      <input key={'hidden-form'} type="hidden" name="contact" value="contact" />

      <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
