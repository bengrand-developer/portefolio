import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Experiences from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Experiences" component={Experiences} />
        {/* <Route path="/competences" component={Skills} />
        
        <Route path="/realisations" component={Realisations} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
