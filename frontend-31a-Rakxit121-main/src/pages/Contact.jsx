import React from "react";
import "../style/Contact.css"; // Import your CSS file

const Contact = () => {
  return (
    <div className="content_contact">
      <div className="contact-form-container-main">
        <div className="contact-form-info">
          <div className="header">Get In Touch With Us</div>
          <div className="description">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
          <div className="info-container">
            <div className="address">
              <div className="label">Address</div>
              <div className="info">
                236 5th SE Avenue, New York NY10000, United States
              </div>
            </div>
            <div className="working-time">
              <div className="label">Working Time</div>
              <div className="info">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </div>
            </div>
            <div className="phone">
              <div className="label">Phone</div>
              <div className="info">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="contact-form">
            <div className="form-container">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
