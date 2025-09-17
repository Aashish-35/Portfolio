import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Let’s build something amazing together! 🚀  
        Whether it's a collaboration, a project idea, or just a friendly hello — drop me a message.
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message ✉️</button>
        </form>

        <div className="contact-info">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://github.com/Aashish-35" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aashish-shreestha/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="info-card">
            <p><strong>Email:</strong> aashishshreeestha@gmail.com</p>
            <p><strong>Phone:</strong> +977-9860670661</p>
            <p><strong>Location:</strong> Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
