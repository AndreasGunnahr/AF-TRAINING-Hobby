import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Personlig
          <br /> träning
          <br /> för alla
        </h1>
        <Link
          className="hero-btn"
          to={"contact"}
          spy={true}
          smooth={true}
          offset={-80}
          duration={1200}
        >
          Boka nu
        </Link>
        {/* <a href="/" className="hero-btn">
          Boka nu
        </a> */}
      </div>
      <div className="hero-img"></div>
      <div className="next">
        <Link
          className="next-title"
          to={"history"}
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          Start din resa
        </Link>
        <FontAwesomeIcon
          className="fontAwesome"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </div>
    </section>
  );
};

export default Hero;
