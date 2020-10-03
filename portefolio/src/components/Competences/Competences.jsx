import React from "react";
import ScrollToTop from "react-scroll-to-top";
import reactLogo from "../img/react-logo3.png";
import cssLogo from "../img/css-logo.png";
import htmlLogo from "../img/html-logo.png";
import javascriptLogo from "../img/javascript-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import nodeLogo from "../img/nodejs-logo.png";
import postmanLogo from "../img/postman-logo.png";
import githubLogo from "../img/github-logo.png";
import "./Competences.css";

const Competences = () => {
  return (
    <div className="competences-container">
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#45566c" }}
      />
      <h1 className="competences-title">Compétences</h1>
      <div className="logo-container1">
        <img className="logo" src={reactLogo} alt="react-logo" />
        <img className="logo" src={nodeLogo} alt="node-logo" />
        <img className="logo" src={htmlLogo} alt="node-logo" />
        <img className="logo" src={cssLogo} alt="node-logo" />
      </div>
      <div className="logo-container2">
        <img className="logo" src={javascriptLogo} alt="node-logo" />
        <img className="logo" src={mysqlLogo} alt="node-logo" />
        <img className="logo" src={postmanLogo} alt="node-logo" />
        <img className="logo" src={githubLogo} alt="github-logo" />
      </div>
      <div className="text-competences-container">
        <p>
          Durant mon apprentissage à la Wild Code School, j'ai appris à
          travailler sur différentes technologies. J'y ai également appris à
          travailler en appliquant la méthode SCRUM et la méthode AGILE.
        </p>
      </div>
    </div>
  );
};
export default Competences;
