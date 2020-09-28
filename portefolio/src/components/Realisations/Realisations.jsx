import React from "react";
import ScrollToTop from "react-scroll-to-top";

import WildalorianLogo from "../img/the-wildalorian.jpg";
import doctoDino from "../img/doctodino.png";
import FestIt from "../img/logoFestIt.png";
import coeurLogo from "../img/coeur.png";
import "./Realisations.css";

const Realisations = () => {
  return (
    <div className="carousel-container">
      <ScrollToTop smooth color="#45566c" />
      <h1 className="realisations-title">Réalisations</h1>
      <div className="left-image-container">
        <h1 className="nrgybox-logo">
          <div className="picture-container-nrgybox">
            <p className="logo-start">NRGY</p>
            <p className="logo-end">Box</p>
          </div>
        </h1>
        <div className="explication-container">
          <h4 className="realisation-title">NRGYBOX</h4>
          <p className="realisation-text">
            Projet professionnel en partenariat avec la start-up NRGYBox, qui
            souhaitait développer une applicatison permettant aux mairies et aux
            communes de pouvoir gérer responsablement l'éclairage public.
          </p>
          <p className="realisation-text">
            Technologies utilisées: ReactJs, NodeJs, Express, Hooks, Redux,
            React-router-dom
          </p>
          <a href="" target="_blank">
            voir la démo
          </a>
        </div>
      </div>
      <div className="right-image-container">
        <div className="picture-container">
          <img
            src={doctoDino}
            alt="doctoDino-icon"
            className="realisation-picture"
          />
        </div>
        <div className="explication-container">
          <h4 className="realisation-title">DoctoDino</h4>
          <p className="realisation-text">
            Projet éducatif et interactif sur une pathologie ou un état de santé
            sur le thème des dinosaures. L'objectif premier est d'appréhender la
            santé avec un enfant dans un environnement sécurisant. Projet
            réalisé lors d'un Hackathon en équipe de 48h.
          </p>
          <p className="realisation-text">
            Technologies utilisées: ReactJS, Node, Hooks, HTML, CSS
          </p>
          <a href="" target="_blank">
            voir la démo
          </a>
        </div>
      </div>
      <div className="left-image-container">
        <div className="picture-container">
          <img src={FestIt} alt="fest-it" className="realisation-picture" />
        </div>
        <div className="explication-container">
          <h4 className="realisation-title">Fest It!(book it, love it!)</h4>
          <p className="realisation-text">
            Création d'une application web fictive permettant la réservation de
            festival à l'international. Une application a été développée en
            parallèle pour gérer la partie administrateur.3 personnes ont
            travaillés sur ce projet.
          </p>
          <p className="realisation-text">
            {" "}
            Technologies utilisées: ReactJs, Hooks, HTML, CSS.
          </p>
          <a href="https://youtu.be/8Zm7OQzI5oM" target="_blank">
            Voir la démo
          </a>
        </div>
      </div>
      <div className="right-image-container">
        <div className="picture-container">
          <img
            src={WildalorianLogo}
            alt="wildalorian-logo"
            className="realisation-picture"
          />
        </div>
        <div className="explication-container">
          <h4 className="realisation-title">The Wildalorian</h4>
          <p className="realisation-text">
            Développement lors d'un Hackathon de 24h d'une application sur le
            thème "Voyager depuis son canapé". Visitez la galaxie en compagnie
            du Wildalorian et de Baby Yoda!
            <p className="realisation-text">
              Coup de&ensp;
              <img src={coeurLogo} alt="coeur" className="little-icons" />
              &ensp;du Jury de la Wild Code School!
            </p>
          </p>
          <p className="realisation-text">
            Technologies utilisées: ReactJs, API Yoda Translator, API Random
            Jokes, HTML, CSS.
          </p>
          <a
            href="https://relaxed-archimedes-67f0e9.netlify.app/"
            target="_blank"
          >
            Visitez le vaisseau du Wildalorian
          </a>
        </div>
      </div>
      <div className="left-image-container">
        <div className="picture-container">
          <img
            src="https://zupimages.net/up/20/11/cow8.png"
            alt="yoga-logo"
            className="realisation-picture"
          />
        </div>
        <div className="explication-container">
          <h4 className="realisation-title">Espace Yoga</h4>
          <p className="realisation-text">
            Site vitrine fictive pour une association de quartien promouvant la
            pratique du Yoga
          </p>
          <p className="realisation-text">
            Technologies utilisées: HTML, CSS, Vanilla JS
          </p>
          <a href="https://youtu.be/fCFAVtDhrN8" target="_blank">
            voir la démo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
