import React from "react";

import "Styles/Home/history.scss";

const History = () => {
  return (
    <section id="about" className="history">
      <div className="history-img"></div>
      <h1 className="history-title">
        Din utveckling
        <br />
        är alltid i <span className="underline">fokus</span>
      </h1>
      <div className="history-container">
        <p className="history-text">
          AF Träning & Rehabilitering är ett heltäckande tränings- och
          rehabiliteringscenter med syfte att utveckla dig som idrottare,
          motionär och företag. Med kompetenser inom personlig träning,
          sjukgymnastik, sport- & idrottsmassage och kostrådgivning har vi
          hjälpt människor rehabilitera såväl enklare till mer komplexa skador,
          ökat deras välbefinnande samt prestera bättre inom sina idrotter!
          <br></br>
        </p>
        <p className="history-text">
          Vårt ständiga fokus ligger på att få dig som klient att känna dig sedd
          och utveckla de förmågor just du vill. Detta får oss på AF Träning &
          Rehabilitering att kontinuerligt utvärdera och reflektera kring de
          senaste inom hälso- och träningsbranschen för att kunna ge dig bästa
          möjliga hjälp, oavsett mål och syfte med träningen.
        </p>
        <div className="history-info">
          <div className="container">
            <h1 className="number">1280</h1>
            <span className="text">Nöjda klienter</span>
          </div>
          <div className="container">
            <h1 className="number">28</h1>
            <span className="text">Olika sporter</span>
          </div>
          <div className="container">
            <h1 className="number">3</h1>
            <span className="text">Årets PT nomineringar</span>
          </div>
          <div className="container">
            <h1 className="number">400</h1>
            <span className="text">Kvadrat meter gym</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
