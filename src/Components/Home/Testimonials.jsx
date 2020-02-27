import React from "react";

import Slider from "./Slider";
import "Styles/Home/testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="testimonials-title">
        Vad säger
        <br />
        våra <span className="underline">kunder</span>
      </h1>
      <Slider />
    </section>
  );
};

export default Testimonials;
