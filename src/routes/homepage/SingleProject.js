import React,{ useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useHistory } from "react-router-dom";
import "./SingleProject.css";
const SingleProject = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
    }, [])
  let history = useHistory();
  return (
    <div className="single-project-feature">
      <div className="single-project-feature-titles-div">
        <p className="single-project-feature-title" data-aos='fade-up'>DRAFTIT</p>
        <p className="single-project-feature-subtitle" data-aos='fade-up'>
          Mobile application for IOS and Android to draft you messages, or just
          send them on the fly. you can also send messages to phone number's not
          on your contact list.
        </p>

        <button
          className="single-project-feature-title-button"
          onClick={() => history.push("/projects")}
          data-aos='fade-up'
        >
          View more projects
        </button>
      </div>
      <div className="single-project-feature-img-gif-div" data-aos='fade-up'>
        <img
          src="/images/homepage/Phone.png"
          alt="logo"
          className="single-project-phone-image"
        />
        <img
          src="/images/homepage/vids/msgApp.gif"
          alt="logo"
          className="single-project-gif"
        />
      </div>
    </div>
  );
};

export default SingleProject;
