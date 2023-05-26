import React from "react";
import exerciseImage from "../../images/Exercise-image.jpg";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing__container">
    <Navbar/>
      <div className="image_container">
        <img src={exerciseImage} alt="Exercise image on landing page" />
      </div>
      <div className="body__containerText">
        <h2 className="body__containerHeading">Tracke Your Fitness</h2>
        <p className="body__text">
          Engaging in regular physical activity can help improve cardiovascular
          health, increase muscle strength and endurance, and enhance
          flexibility.
        </p>
      </div>
    </div>
  );
};

export default Landing;
