import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Experiences from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";
import Competences from "./components/Competences/Competences";
import Realisations from "./components/Realisations/Realisations";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/competences" component={Competences} />
        <Route path="/realisations" component={Realisations} />

        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
