import React from "react";
import { ProjectContainer } from "./ProjetStyle";
import image from "../../assets/kd.png";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <ProjectContainer>
      <h1>Projects</h1>
      <div className="d-flex container Card">
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a
                  href="https://github.com/arslene-kabinda/portfolio-REact"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={image} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
};
export default Projects;
