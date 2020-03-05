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
        Kontakta oss <br></br>
        direkt <span className="underline">idag</span>
      </h1>
      <div className="green-container">
        <div className="inner-wrapper">
          <div className="info-container">
            <h1 className="second-title">
              Välkommen att kontakta oss för en kostnadsfri konsultation!
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
          </div>
          <div className="social-outer">
            <h1 className="social-title">Följ oss på sociala medier</h1>
            <div className="social-container">
              <a href="https://twitter.com/aftraningrehab" className="social-a">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </a>
              <a
                href="https://www.instagram.com/aftraningorehabilitering/"
                className="social-a"
              >
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/AFtraningorehabilitering/"
                className="social-a"
              >
                <FontAwesomeIcon icon={faFacebookF} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
