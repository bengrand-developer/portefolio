import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ResponsiveMenu from 'react-responsive-navbar';
import devIcon from "../img/dev-logo.png";

const Navbar = () => {
  return (
    <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
    // <header className="Header">
    //   <div className="Navbar-container">
    //     <div className="navbar-logo">
    //       <img src={devIcon} alt="dev-logo" className="devIcon" />
    //       <div className="all-title">
    //         <h3 className="navbar-title">Benoit Grand</h3>
    //         <h5 className="navbar-subtitle">Développeur Web</h5>
    //       </div>
    //     </div>
    //     <p className="Navbar-item">
    //       <NavLink exact to="/">
    //         Accueil
    //       </NavLink>
    //     </p>

    //     <p className="Navbar-item">
    //       <NavLink to="/competences">Compétences</NavLink>
    //     </p>

    //     <p className="Navbar-item">
    //       <NavLink to="/experiences">Experiences</NavLink>
    //     </p>

    //     <p className="Navbar-item">
    //       <NavLink to="/realisations">Réalisations</NavLink>
    //     </p>

    //     <p className="Navbar-item">
    //       <NavLink to="/contact">Contact</NavLink>
    //     </p>
    //   </div>
    // </header>
        }/>
  );
};

export default Navbar;
