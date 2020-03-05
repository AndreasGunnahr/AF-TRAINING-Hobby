import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="top-container">
        <div className="wrapper">
          <label for="name">Name</label>
          <input
            id="name"
            className="name"
            placeholder="Alfons Fallqvist"
          ></input>
        </div>
        <div className="wrapper">
          <label for="email">Email</label>
          <input
            id="email"
            className="name"
            placeholder="Alfons.Fallqvist@hotmail.com"
          ></input>
        </div>
      </div>
      <div className="middle-container">
        <div className="wrapper">
          <label for="message">Meddelande</label>
          <textarea
            id="message"
            className="name"
            placeholder="Hi there.."
          ></textarea>
        </div>
        <div className="error-msg">Error msg</div>
      </div>
      <a type="submit" className="send-btn">
        Skicka
      </a>
    </form>
  );
};

export default ContactForm;
