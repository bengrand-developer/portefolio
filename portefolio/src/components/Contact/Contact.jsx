import React from "react";
import ScrollToTop from "react-scroll-to-top";
import mailIcon from "../img/mail-icon.png";
import phoneIcon from "../img/phone-icon.png";
import linkedinIcon from "../img/linkedin-icon.png";
import whiteGithubLogo from "../img/white-github.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="big-Contact-container">
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#45566c" }}
      />
      <h1 className="contact-title">Contact</h1>
      <div className="little-contact-container">
        <img src={mailIcon} alt="mail-icon" className="contact-icon" />

        <p>bengrand.pro@gmail.com</p>
        <a href="mailto:bengrand.pro@gmail.com" target="_blank">
          m'écrire
        </a>
      </div>
      <div className="little-contact-container">
        <img src={phoneIcon} alt="phone-icon" className="contact-icon" />

        <p>06.40.66.76.83</p>
      </div>
      <div className="little-contact-container">
        <img src={linkedinIcon} alt="linkedin-icon" className="contact-icon" />

        <a href="https://www.linkedin.com/in/benoitgrand/" target="_blank">
          Cliquez ici!
        </a>
      </div>
      <div className="little-contact-container">
        <img
          src={whiteGithubLogo}
          alt="white-github-icon"
          className="contact-icon"
        />
        <a href="https://github.com/bengrand-developer" target="_blank">
          Profil Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
