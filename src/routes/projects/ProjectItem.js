import React,{ useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import './ProjectItem.css'
const ProjectItem = ({title, subtitle,description, gif, flexDir}) => {
  useEffect(() => {
    Aos.init({duration: 1000})
    }, [])
  return (
    <div className="project-item-feature" style={{flexDirection: `${flexDir}`}}>
    <div className="project-item-feature-titles-div">
        <p className="project-item-feature-title" data-aos='fade-up'>{title}</p>
      <p className="project-item-feature-subtitle" data-aos='fade-up'>
       {subtitle}
      </p>
      <p className="project-item-feature-description" data-aos='fade-up'>
       {description}
      </p>
    </div>
    

    <div className="project-item-feature-img-gif-div" >
      <img
        src="/images/homepage/Phone.png"
        alt="logo"
        className="project-item-phone-image"
      />
      <img
        src={gif}
        alt="logo"
        className="project-item-gif"
      />
    </div>
  </div>
  )
}

export default ProjectItem
