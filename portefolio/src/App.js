import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/competences" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/portefolio" component={Portefolio} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
    </div>
  );
}

export default App;
