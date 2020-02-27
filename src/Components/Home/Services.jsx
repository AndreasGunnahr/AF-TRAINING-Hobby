import React from "react";
import "Styles/Home/services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="services-img"></div>
      <h1 className="services-title">
        Tjänster som
        <br />
        vi kan <span className="underline">erbjuda</span>
      </h1>
      <div className="services-container">
        <div className="container">
          <h1 className="service-title">Personlig träning</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
        <div className="container">
          <h1 className="service-title">Kostrådgivning</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
        <div className="container">
          <h1 className="service-title">Mental träning</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
        <div className="container">
          <h1 className="service-title">Tester</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
        <div className="container">
          <h1 className="service-title">Massage</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
        <div className="container">
          <h1 className="service-title">Mental träning</h1>
          <span className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit
            esse autem excepturi molestiae cumque minus minima.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
