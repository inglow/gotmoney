import React from 'react';
import './Contact.css';
import { FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <h2>GeeksforGeeks is a computer science portal for geeks!</h2>

      Read more about us at :
      <div className="contact-cards">
        <div className="contact-card">
          <a href="https://www.geeksforgeeks.org/about/fas">
            https://www.geeksforgeeks.org/about/
          </a>
        </div>
        <div className="contact-card">
          <a href="https://www.geeksforgeeks.org/about/fas">
            https://www.geeksforgeeks.org/about/
          </a>
        </div>
      </div>
      <div className="contact-card">
        <div className="ui left icon input-container">
          <input type="text" placeholder="Search users..." />
          <FaInstagram className="icon-form" />
        </div>
      </div>

    </div>
  );
}
export default Contact;
