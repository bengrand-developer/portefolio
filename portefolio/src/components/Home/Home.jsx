import React from "react";
import Typing from "react-typing-animation";
import photoBen from "../img/photoBen.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="photo-container">
        <img src={photoBen} alt="photoBen" className="photoBen" />
      </div>
      <div className="title">
        <Typing>
          <h1 className="name">Benoit Grand</h1>
          <Typing.Delay ms={1000} />
          <h4 className="description">
            Développeur Web fullstack ReactJs/NodeJs
          </h4>
        </Typing>
        <Typing>
          <h1>Bienvenue!</h1>
          <Typing.Delay ms={6000} />
          <Typing.Backspace count={20} />
        </Typing>
      </div>
    </div>
  );
};

export default Home;
