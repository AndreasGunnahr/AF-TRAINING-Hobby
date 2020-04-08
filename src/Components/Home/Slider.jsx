import React, { useState } from "react";
import styled from "styled-components";
import image from "assets/images/lady.jpg";
import image2 from "assets/images/guy.jpg";
import image3 from "assets/images/guy2.jpg";

const SlideItem = styled.div`
  height: 100%;
  background: url(${({ images }) => (images ? images : images)});
  margin-left: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 60%;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Slider = () => {
  const [active, setActive] = useState("center");

  const handleClick = e => {
    if (active === e.target.classList[2]) {
    } else {
      const newActiveElements = document.querySelectorAll(
        "." + e.target.classList[2]
      );
      const oldActiveElements = document.querySelectorAll("." + active);
      oldActiveElements.forEach(element => {
        element.classList.remove("active");
      });
      newActiveElements.forEach(element => {
        element.classList.add("active");
      });
      setActive(e.target.classList[2]);
    }
  };

  return (
    <React.Fragment>
      <div className="slider">
        <div className="slide-items">
          <SlideItem className="left" onClick={handleClick} images={image3} />
          <SlideItem
            className="center active"
            onClick={handleClick}
            images={image2}
          />
          <SlideItem className="right" onClick={handleClick} images={image} />
        </div>

        <div className="dots">
          <span className="dot . left" onClick={handleClick}></span>
          <span className="dot . center active" onClick={handleClick}></span>
          <span className="dot . right" onClick={handleClick}></span>
        </div>
      </div>
      <div className="slider-text">
        <div className="text-container . left">
          <span className="text">
            Jag har länge letat efter en tränare som brinner för att hjälpa mig
            och som verkligen bryr sig om min utveckling, det har jag hittat i
            Alfons!
          </span>
          <h1 className="quote">- Andreas, Ishockeyspelare</h1>
        </div>
        <div className="text-container . center active">
          <span className="text">
            Otrolig människa, otrolig PT. Kunnig och intresserad i sina
            klienters utveckling. Ingen tvekan om att jag tränar med Alfons
            varje sommar!
          </span>
          <h1 className="quote">- Niklas, Ishockeyspelare</h1>
        </div>
        <div className="text-container . right">
          <span className="text">
            Alfons är kunnig och påläst. Han engagerar sig i sina klienter och
            pushar en att utvecklas och göra saker man inte trodde man kunde.
          </span>
          <h1 className="quote">- Carina, Motionär</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
