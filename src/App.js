import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import Home from "Components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
