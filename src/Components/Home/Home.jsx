import React, { useState } from "react";

import Navbar from "Components/Global/Navbar.jsx";
import Footer from "Components/Global/Footer.jsx";
import Hero from "Components/Home/Hero.jsx";
import History from "Components/Home/History.jsx";
import NewsLetter from "Components/Home/NewsLetter.jsx";

import "Styles/Home/home.scss";

const Home = () => {
  return (
    <div className="layout">
      <Navbar />
      {/* <Hero />
      <History />
      <NewsLetter /> */}
      <Footer />
    </div>
  );
};

export default Home;
