import React from 'react';
import Image from 'next/image';
import '../globals.css';

export default function Contact ()  {
  return (
    <div className="contact-container">
      {/* welcome Section */}
      <section className="contact-welcome">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below to reach us directly.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Send Us a Message </h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-content">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Contact icon"
            width={100}
            height={100}
          />
          <p>Email: hamzaatif.engineer@gmail.com</p>
          <p>Phone:03242524303</p>
          <p>Address: nazimabad no.2 karachi, pakistan</p>
        </div>
      </section>
    </div>
  );
}


