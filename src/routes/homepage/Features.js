import React,{ useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Features.css";

const Features = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
    }, [])
  return (
    <div className="features-container">
      <div className="features-innerdiv" >
        <div className="features-image-div" >
          <img
            src="/images/homepage/adaptive.jpg"
            alt="adaptive"
            className="features-image"
            data-aos='fade-up'
          />
        </div>

        <p className="features-title" data-aos='fade-up'>Cross platform</p>
        <p className="features-subtittle" data-aos='fade-up'>One code base for all platforms.</p>
      </div>
      <div className="features-innerdiv" >
        <div className="features-image-div">
          <img
            src="/images/homepage/code.jpg"
            alt="code"
            className="features-image"
            data-aos='fade-up'
          />
        </div>

        <p className="features-title" data-aos='fade-up'>Code</p>
        <p className="features-subtittle" data-aos='fade-up'>Clean code made out of syntactic sugar.</p>
      </div>
      <div className="features-innerdiv" >
        <div className="features-image-div">
          <img
            src="/images/homepage/ux.jpg"
            alt="logo"
            className="features-image"
            data-aos='fade-up'
          />
        </div>

        <p className="features-title"  data-aos='fade-up'>User experience</p>
        <p className="features-subtittle"  data-aos='fade-up'>Comfortable features so users can enjoy.</p>
      </div>
      <div className="features-innerdiv" >
        <div className="features-image-div">
          <img
            src="/images/homepage/design.jpg"
            alt="logo"
            className="features-image"
            data-aos='fade-up'
          />
        </div>

        <p className="features-title"  data-aos='fade-up'>Design</p>
        <p className="features-subtittle"  data-aos='fade-up'>Implement Visual design into code.</p>
      </div>
    </div>
  );
};

export default Features;
