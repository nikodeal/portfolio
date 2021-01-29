import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectPage.css";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        width: "100",
        padding: "2rem 0px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectItem
        gif="/images/homepage/vids/sudoku.gif"
        title="NINJA SUDOKU"
        subtitle="Web application"
        description="Sudoku game that allows you to drag and drop the number into the board. Mobile first designed with pure HTML, CSS and JAVASCRIPT."
        flexDir="row"
        
      />
      <ProjectItem
        gif="/images/homepage/vids/extremely.gif"
        title="EXTREMELY"
        subtitle="Web application"
        description="Afiiliate website for brands and starter kits for extreme sports. Built with REACT JS and a lot of love for extreme sports."
        flexDir="row-reverse"
      />
      <ProjectItem
        gif="/images/homepage/vids/buddies.gif"
        title="BUDDIES"
        subtitle="Mobile application"
        description="Adopting a dog is not the last thing you do. What about dog parks, vets in your area, food, etc... Well buddies got you covered. Built with REACT NATIVE."
        flexDir="row"
      />
      <ProjectItem
        gif="/images/homepage/vids/indecision.gif"
        title="INDECISION"
        subtitle="Web application"
        description="Put your life in the hands of a computer. Write down your tasks and let the App decide what you do next. built with REACT JS."
        flexDir="row-reverse"
      />
    </div>
  );
};

export default ProjectPage;
