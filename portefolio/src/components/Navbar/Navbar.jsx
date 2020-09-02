import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="Header">
      <div className="Navbar-container">
        <p className="Navbar-item">
          <NavLink to="/">Accueil</NavLink>
        </p>

        <p className="Navbar-item">
          <NavLink to="/competences">Compétences</NavLink>
        </p>

        <p className="Navbar-item">
          <NavLink to="/Experiences">Expériences</NavLink>
        </p>

        <p className="Navbar-item">
          <NavLink to="/portefolio">Réalisations</NavLink>
        </p>

        <p className="Navbar-item">
          <NavLink to="/contact">Contact</NavLink>
        </p>
      </div>
    </header>
  );
};

export default Navbar;
