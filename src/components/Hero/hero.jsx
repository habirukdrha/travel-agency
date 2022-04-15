import Button from "../Button/button";
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
