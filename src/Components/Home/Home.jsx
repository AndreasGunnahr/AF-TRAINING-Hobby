import React from "react";

import Hero from "Components/Home/Hero.jsx";
import History from "Components/Home/History.jsx";
// import NewsLetter from "Components/Home/NewsLetter.jsx";
import Services from "Components/Home/Services.jsx";
import Testimonials from "Components/Home/Testimonials.jsx";

import "Styles/Home/home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <History />
      <Services />
      {/* <NewsLetter /> */}
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;
