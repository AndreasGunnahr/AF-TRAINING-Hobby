import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

import ContactForm from "Components/Global/ContactForm.jsx";
import "Styles/Home/contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">
        Kontakta oss idag för<br></br>
        en fri <span className="underline">konsultation</span>
      </h1>
      <div className="green-container">
        <h1 className="second-title">
          Tveka inte att höra av er om ni har frågor eller fundering!
        </h1>
        <p className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Storgatan 61 732 45, Arboga
        </p>
        <p className="phone">
          <FontAwesomeIcon icon={faPhoneAlt} />
          073-399 53 93
        </p>
        <p className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          Alfons@aftraningorehab.se
        </p>
        <h1 className="social-title">Följ oss på sociala medier</h1>
        <div className="social-container">
          <a href="/" className="social-a">
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </a>
          <a href="/" className="social-a">
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>
          <a href="/" className="social-a">
            <FontAwesomeIcon icon={faFacebookF} />
            Facebook
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
