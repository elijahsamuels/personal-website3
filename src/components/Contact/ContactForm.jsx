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
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus({ submitting: true, success: false, error: null });

  //   try {
  //     // 🚨 CRITICAL CHANGE: Submit to the root path ("/") with URL-encoded data.
  //     // Netlify's deploy bot will intercept this POST request.
  //     const res = await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       // Use the encode helper function to send the data
  //       body: encode({
  //           "form-name": "contact", // Netlify requires this hidden field/property
  //           ...form
  //       }),
  //     });

  //     if (!res.ok) throw new Error("Failed to submit to Netlify.");

  //     setStatus({ submitting: false, success: true, error: null });
  //     setForm({ name: "", email: "", message: "" });
  //   } catch (error) {
  // 		console.log('error', error)
  //     setStatus({ submitting: false, success: false, error: "Submission error. Check your Netlify form settings." });
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
      // .then(() => navigate("/thank-you/"))
      .then(() => console.log("message POSTED"))
      .catch((error) => alert(error));
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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

// import { useState } from "react";
// import "./contact-form.css";

// const ContactForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     submitting: false,
//     success: false,
//     error: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, success: false, error: null });

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to submit.");

//       setStatus({ submitting: false, success: true, error: null });
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       setStatus({ submitting: false, success: false, error: err.message });
//     }
//   };

//   return (
//     <div className="contact-form-wrapper">
//       <form className="contact-form" onSubmit={handleSubmit}>

//         <label>
//           Name
//           <input type="text" name="name" required value={form.name} onChange={handleChange} />
//         </label>

//         <label>
//           Email
//           <input type="email" name="email" required value={form.email} onChange={handleChange} />
//         </label>

//         <label>
//           Message
//           <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
//         </label>

//         <button type="submit" disabled={status.submitting}>
//           {status.submitting ? "Sending..." : "Send Message"}
//         </button>

//         {status.success && <p className="success">Your message has been sent successfully.</p>}
//         {status.error && <p className="error">{status.error}</p>}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
