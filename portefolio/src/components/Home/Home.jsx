import React from "react";
import photoBen from "../img/photoBen.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="photo-container">
        <img src={photoBen} alt="photoBen" className="photoBen" />
      </div>
      <div className="title">
        <h1 className="name">Benoit Grand</h1>
      </div>
      <h4 className="description">Développeur Web fullstack ReactJs/NodeJs </h4>
    </div>
  );
};

export default Home;
