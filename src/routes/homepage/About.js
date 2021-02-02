import React,{ useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
    
    }, [])
  return (
    <div className="about-container">
      <img
        src="/images/homepage/screens.png"
        alt="logo"
        className="about-me-screens"
        data-aos='fade-up'
      />
      <div className="about-div" data-aos='fade-up'>
        <span className="about-me-title">About me</span>
        <p className="about-me-subtitle">
          As a person I am confident and ambitious, as a family figure I am a
          loving, caring, and supportive husband and father, as a developer I am
          a passionate and fast learner with the skills to get any target thrown
          at me and given back with results.
        </p>
      </div>
    </div>
  );
};

export default About;
