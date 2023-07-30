import React, { useState } from "react"

const ContactForm = () => {
  const [status, setStatus] = useState("Submit")

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus("Sending...")

    const { name, email, message } = e.target.elements

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })

    setStatus("Submit")
    let result = await response.json()
    alert(result.status)
  }
  //
  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input
						// disabled
            className="input"
            id="name"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
						// disabled
            className="input"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>

        <div>
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
						// disabled
            className="input"
            id="message"
            name="message"
            required
            placeholder="Type your message..."
          />
        </div>

        <button
					className="input"
					type="submit"
					// disabled
					>
          {status}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
