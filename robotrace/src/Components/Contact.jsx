import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question or need a service? Reach out to us!</p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> ibrar.iqbel@gmail.com</p>
          <p><strong>Phone:</strong> 0328-0328907</p>
          <p><strong>Location:</strong> Lahore, Pakistan</p>
          <h3>Follow Me</h3>
          <a href="https://github.com/ibrariqbel" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
