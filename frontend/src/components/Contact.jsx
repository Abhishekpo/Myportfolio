import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://myportfolio-s87x.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Unable to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p>Let's Connect</p>
        <h2>Get In Touch</h2>

        <span>
          Have a software engineering opportunity, project idea, or just want
          to connect? Feel free to send me a message.
        </span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:poudelabhishek24@gmail.com">
              poudelabhishek24@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/apoudel1588/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/apoudel1588
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/Abhishekpo"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Abhishekpo
            </a>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Maryland / Washington D.C. Area</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;