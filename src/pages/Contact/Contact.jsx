import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact-container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    );
};

export default Contact;