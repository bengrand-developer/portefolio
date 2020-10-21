import React, { useState } from "react";
import Typing from "react-typing-animation";
import devLogo from "../img/dev-logo.png";
import Modal from "react-bootstrap/Modal";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Home-container">
      <div className="photo-container">
        <img src={devLogo} alt="photoBen" className="photoBen" />
      </div>
      <div className="title">
        <Typing>
          <h1 className="name">Benoit Grand</h1>
          <Typing.Delay ms={1000} />
          <h4 className="description">
            Développeur Web fullstack ReactJs/NodeJs
          </h4>
          {/* <Typing.Delay ms={1000} /> */}
          <button onClick={handleShow} className="home-button">
            En savoir plus
          </button>
        </Typing>
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Hello, World!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Après 8 ans d'expérience dans le secteur bancaire, je me suis
              tourné vers le développement web en 2020 par le biais d'une
              formation intensive en 5 mois. Aujourd'hui, en tant que
              développeur, je m'épanouis dans un métier qui me permet de me
              remettre en question constamment, de participer à des projets en
              équipe et d'apprendre sans cesse. Ayant passé le cap de la
              reconversion en novembre 2019, j'ai rejoins une formation de
              développeur Web full-stack en Mars 2020 permettant de développer
              mes compétences sur React et Node.js, et d'acquérir de nouvelles
              connaissances . Je suis à la recherche d'un poste (CDI, CDD), ou
              d'un stage d'une durée de 2 à 4 mois, afin d'améliorer mes
              compétences et d'intégrer le monde professionnel du développement
              Web.Je suis à la recherche d'un environnement favorisant le
              travail d'équipe et l'apprentissage.
            </p>
            <p>Contactez-moi!</p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
