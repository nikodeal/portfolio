import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-parent-div">
        <img src="/images/homepage/Deal2.png" alt="logo" className="my-img" />
        <div className="typewriter">
          <h1 className="type-h1">NIKO DEAL</h1>
          <h2 className="floating-text">Web & Mobile Developer. </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
