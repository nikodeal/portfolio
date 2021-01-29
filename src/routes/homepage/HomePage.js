import React, { useEffect } from "react";
import "./HomePage.css";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Features from "./Features";
import SingleProject from "./SingleProject";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Hero />
      <About />
      <Features />
      <SingleProject />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
