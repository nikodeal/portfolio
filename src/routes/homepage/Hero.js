import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-parent-div">
       
        <div className="typewriter">
        <h1 className="type-h1">I am, </h1>
          <h1 className="type-h1">Niko Deal</h1>
          <h2 className="floating-text">Web & Mobile Developer. </h2>
        </div>
        <img src="/images/homepage/Deal2.png" alt="logo" className="my-img" />
      </div>
    </>
  );
};

export default Hero;
