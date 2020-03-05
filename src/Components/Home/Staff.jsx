import React from "react";

import "Styles/Home/staff.scss";

const Staff = () => {
  return (
    <section id="staff" className="staff">
      <h1 className="staff-title">
        Vi på AF Träning<br></br>&
        <span className="underline">Rehabilitering</span>
      </h1>
      <div className="top-container">
        <div className="staff-img"></div>
        <div className="text-container">
          <h1 className="name-title">Alfons Fallqvist</h1>
          <p className="work-title">Personlig tränare & Grundare</p>
        </div>
      </div>
      <div className="middle-container">
        <div className="container">
          <div className="staff-img"></div>
          <div className="text-container">
            <h1 className="name-title">Jenny Lijlehult</h1>
            <p className="work-title">Arbetsterapeut</p>
          </div>
        </div>
        <div className="container">
          <div className="staff-img"></div>
          <div className="text-container">
            <h1 className="name-title">Emil Tapper</h1>
            <p className="work-title">Fysioterapeut</p>
          </div>
        </div>
        <div className="container">
          <div className="staff-img"></div>
          <div className="text-container">
            <h1 className="name-title">Jenny Björklund</h1>
            <p className="work-title">Personlig Tränare</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
