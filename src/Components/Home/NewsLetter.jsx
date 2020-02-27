import React from "react";

import "Styles/Home/newsLetter.scss";

const NewsLetter = () => {
  return (
    <form className="news-letter">
      <div className="text-container">
        <h1 className="news-title">
          Prenumerera på <span className="underline">nyhetsbrev</span>
        </h1>
        <span className="news-text">
          Prenumerera för att få de nyaste nyheterna <br></br> och
          uppdateringarna varje vecka.
        </span>
        <div className="input-container">
          {/* Icon i placeholder */}
          <input placeholder="Ange din email"></input>
          <a href="/">Prenumerera</a>
        </div>
      </div>
    </form>
  );
};

export default NewsLetter;
