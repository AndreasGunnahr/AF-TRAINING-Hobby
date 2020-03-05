import React, { Fragment, useEffect, useState, useRef } from "react";
import Hero from "Components/Home/Hero.jsx";
import History from "Components/Home/History.jsx";
import Staff from "Components/Home/Staff.jsx";
// import NewsLetter from "Components/Home/NewsLetter.jsx";
import Contact from "Components/Home/Contact.jsx";
import Services from "Components/Home/Services.jsx";
import Testimonials from "Components/Home/Testimonials.jsx";
import Navbar from "Components/Global/Navbar.jsx";

import "Styles/Home/home.scss";

const Home = () => {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Fragment>
      <Navbar stickyRef={stickyRef} sticky={isSticky} />
      <Hero />
      <History />
      <Staff />
      <Services />
      {/* <NewsLetter /> */}
      <Testimonials />
      <Contact />
    </Fragment>
  );
};

export default Home;
