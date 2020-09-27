import React from "react";
import Carousel from "react-bootstrap/Carousel";
import WildalorianLogo from "../img/the-wildalorian.jpg";
import doctoDino from "../img/doctodino.png";
import FestIt from "../img/logoFestIt.png";
import "./Realisations.css";

const Realisations = () => {
  return (
    <div className="carousel-container">
      {/* <Carousel className="carousel-container">
        <Carousel.Item>
          <div className="right-image-container">
            <img
              src={WildalorianLogo}
              alt="wildalorian-logo"
              className="realisation-picture"
            />
            <div className="explication-container"></div>
          </div>
          <Carousel.Caption>
            <h4 className="realisation-title">The Wildalorian</h4>

            <p className="realisation-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              natus deserunt nostrum iure. Natus aperiam itaque earum, molestiae
              totam nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
              Temporibus?
            </p>
            <a
              href="https://relaxed-archimedes-67f0e9.netlify.app/"
              target="_blank"
            >
              Visitez le vaisseau du Wildalorian
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={doctoDino} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div className="left-image-container">
        <h1 className="nrgybox-logo">
          <p className="logo-start">NRGY</p>
          <p className="logo-end">Box</p>
        </h1>
        <div className="explication-container">
          <h4 className="realisation-title">NRGYBOX</h4>
          <p className="realisation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            deserunt nostrum iure. Natus aperiam itaque earum, molestiae totam
            nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
            Temporibus?
          </p>
          <a href="" target="_blank">
            voir la démo
          </a>
        </div>
      </div>
      <div className="right-image-container">
        <img
          src={doctoDino}
          alt="doctoDino-icon"
          className="realisation-picture"
        />
        <div className="explication-container">
          <h4 className="realisation-title">Doctokid</h4>
          <p className="realisation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            deserunt nostrum iure. Natus aperiam itaque earum, molestiae totam
            nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
            Temporibus?
          </p>
        </div>
      </div>
      <div className="left-image-container">
        <img src={FestIt} alt="fest-it" className="realisation-picture" />
        <div className="explication-container">
          <h4 className="realisation-title">Fest It!(book it, love it!)</h4>
          <p className="realisation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            deserunt nostrum iure. Natus aperiam itaque earum, molestiae totam
            nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
            Temporibus?
          </p>
          <a href="https://youtu.be/8Zm7OQzI5oM" target="_blank">
            Voir la démo
          </a>
        </div>
      </div>
      <div className="right-image-container">
        <img
          src={WildalorianLogo}
          alt="wildalorian-logo"
          className="realisation-picture"
        />
        <div className="explication-container">
          <h4 className="realisation-title">The Wildalorian</h4>
          <p className="realisation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            deserunt nostrum iure. Natus aperiam itaque earum, molestiae totam
            nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
            Temporibus?
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
        <img
          src="https://zupimages.net/up/20/11/cow8.png"
          alt="yoga-logo"
          className="realisation-picture"
        />
        <div className="explication-container">
          <h4 className="realisation-title">Espace yoga</h4>
          <p className="realisation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            deserunt nostrum iure. Natus aperiam itaque earum, molestiae totam
            nam optio explicabo enim iusto vero quia ipsam quibusdam ab?
            Temporibus?
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
