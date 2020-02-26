import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "Styles/Home/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Personlig
          <br /> träning
          <br /> för alla
        </h1>
        <a href="/" className="hero-btn">
          Boka nu
        </a>
      </div>
      <div className="hero-img"></div>
      <div className="next">
        <span className="next-title">Start din resa</span>
        <FontAwesomeIcon
          className="fontAwesome"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </div>
    </section>
  );
};

export default Hero;
