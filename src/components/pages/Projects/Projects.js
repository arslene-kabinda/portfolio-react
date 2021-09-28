import React from "react";
import { ProjectContainer } from "./ProjetStyle";
import image from "../../assets/kd.png";

const Projects = () => {
  return (
    <ProjectContainer>
      <h1>Projects</h1>
      <div className="d-flex container Card">
        {" "}
        <div className="card image">
          <img src={image} alt=" project_profile" />
        </div>
        <div className="card image">
          {" "}
          <img src={image} alt=" project_profile" />
        </div>
        <div className="card image">
          {" "}
          <img src={image} alt=" project_profile" />
        </div>
        <div className="card image">
          {" "}
          <img src={image} alt=" project_profile" />
        </div>
        <div className="card image">
          {" "}
          <img src={image} alt=" project_profile" />
        </div>
        <div className="card image">
          {" "}
          <img src={image} alt=" project_profile" />
        </div>
      </div>
    </ProjectContainer>
  );
};
export default Projects;
