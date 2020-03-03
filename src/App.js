import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "Components/Home/Home.jsx";
import About from "Components/About/About.jsx";
import Services from "Components/Services/Services.jsx";
import Blog from "Components/Blog/Blog.jsx";
import Contact from "Components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/om-oss" component={About} />
        <Route exact path="/tjänster" component={Services} />
        <Route exact path="/blogg" component={Blog} />
        <Route exact path="/kontakt" component={Contact} /> */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
