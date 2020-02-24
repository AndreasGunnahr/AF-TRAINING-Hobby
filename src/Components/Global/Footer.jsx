import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "Styles/Global/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-logo">LOGO</h1>
      <div className="wrapper client">
        <h1 className="footer-h1">Klient</h1>
        <a href="#" className="footer-link">
          Logga in
        </a>
      </div>
      <div className="wrapper company">
        <h1 className="footer-h1">Företag</h1>
        <a href="/" className="footer-link">
          Om oss
        </a>
        <a href="/" className="footer-link">
          Karriär
        </a>
        <a href="/" className="footer-link">
          Blogg
        </a>
        <a href="/" className="footer-link">
          Kontakt
        </a>
      </div>
      <div className="wrapper other">
        <h1 className="footer-h1">Övrig information</h1>
        <a href="/" className="footer-link">
          Regler & Vilkor
        </a>
        <a href="/" className="footer-link">
          Privat policy
        </a>
      </div>
      <div className="wrapper follow">
        <h1 className="footer-h1">Följ oss</h1>
        <a href="/" className="footer-link">
          <FontAwesomeIcon className="fontAwesome" icon={faTwitter} />
          Twitter
        </a>
        <a href="/" className="footer-link">
          <FontAwesomeIcon className="fontAwesome" icon={faFacebookF} />
          Facebook
        </a>
        <a href="/" className="footer-link">
          <FontAwesomeIcon className="fontAwesome" icon={faInstagram} />
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Footer;
