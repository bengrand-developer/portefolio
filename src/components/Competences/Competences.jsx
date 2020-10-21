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
      <div className="big-competence-container">
      <div className="logo-container1">
        <div className="mini-logo-container">
        <img className="logo" src={reactLogo} alt="react-logo"/>
        <a>ReactJs</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={nodeLogo} alt="node-logo" />
        <a>Node</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={htmlLogo} alt="html-logo" />
        <a>HTML5</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={cssLogo} alt="css-logo" />
        <a>CSS3</a>
        </div>
      </div>
      <div className="logo-container2">
      <div className="mini-logo-container">
        <img className="logo" src={javascriptLogo} alt="js-logo" />
        <a>Javascript</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={mysqlLogo} alt="sql-logo" />
        <a>mySQL</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={postmanLogo} alt="postman-logo" />
        <a>Postman</a>
        </div>
        <div className="mini-logo-container">
        <img className="logo" src={githubLogo} alt="github-logo" />
        <a>Github</a>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Competences;
