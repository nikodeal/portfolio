import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div className="nav-links">
      <img
        src="/images/homepage/logo.png"
        alt="logo"
        style={{ width: "5rem", margin: "40px 0px 0px" }}
      />
      <h4>NIKO DEAL</h4>
      <h6 className='navlink-fullstack'>Fullstack Developer</h6>
      <div style={{margin: '2rem 0px 5rem', backgroundColor: '#1e2022' , width: '100%',textAlign: 'center', padding: '2rem 0px'}}>
       
       
          <a
            style={{margin: '0px 10px'}}
            href="mailto:nikodeal@gmail.com"
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                color="white"
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
          </a>
          <a
            className="header__middle-div-follow-icon"
            href="https://m.facebook.com/niko.deal.9"
          >
            <img
              src="/images/homepage/facebook.png"
              alt="Niko deal"
              style={{ width: "2rem" ,margin: '0px 10px'}}
            />
          </a>
          <a
            className="header__middle-div-follow-icon"
            href="https://www.linkedin.com/in/niko-deal/"
          >
            <img
              src="/images/homepage/linkedin.png"
              alt="Niko deal"
              style={{ width: "2rem" ,margin: '0px 10px'}}
            />
          </a>
          <a
            className="header__middle-div-follow-icon"
            href="https://github.com/nikodeal"
          >
            <img
              src="/images/homepage/contact-git.png"
              alt="Niko deal"
              style={{ width: "2rem" ,borderRadius: '55%', margin: '0px 10px'}}
            />
          </a>
        
      </div>

      <p>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </p>

      <p>
        <NavLink to="/projects" exact>
          PROJECTS
        </NavLink>
      </p>

  
    </div>
  );
};

export default NavLinks;
