import React from "react";
import { ProjectContainer } from "./ProjetStyle";
import movie from "../../assets/movie.png";
import portfolio from "../../assets/portfolio.png";
import bac from "../../assets/bac.png";
import laprunelle from "../../assets/laprunelle.png";
import thepost from "../../assets/thepost.png";
import environews from "../../assets/environews.png";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Projects</h1>
      <div className="d-flex container Card">
        <div className="card image">
          <img src={laprunelle} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://laprunellerdc.info/">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={movie} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/arsy_movies">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://arsy-movies-dltf9whxl-arslene-kabinda.vercel.app/">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={portfolio} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://github.com/arslene-kabinda/portfolio-react">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://portfolio-arslene-kabinda.vercel.app/">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={thepost} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              <div>
                <a href="https://thepostrdc.net/">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={environews} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              {/* <div>
                <a href="https://github.com/arslene-kabinda/portfolio-REact">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div> */}
              <div>
                <a href="https://www.environews-rdc.org/">
                  <Icon icon="bi:link-45deg" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card image">
          <img src={bac} alt=" project_profile" />
          <div className="card_content">
            <p>Project Detail</p>
            <div className="container_icon">
              {/* <div>
                <a href="https://github.com/arslene-kabinda/projet-clone-du-site-kinshasa-digital">
                  <Icon
                    icon="akar-icons:github-outline-fill"
                    className="icon"
                  />
                </a>
              </div> */}
              <div>
                <a href="https://www.bacmd.net//">
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
