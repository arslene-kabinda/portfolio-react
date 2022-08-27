import React from "react";
import { SkillsContainer } from "./SkillsStyle";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h1> Skills</h1>
      <div className="skills_container container">
        <div className="skills_1">
          <div className="skills_value">
            <div className="d-flex value">
              <div>
                <p>Html5</p>
              </div>
              <div>
                <p>80%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level1"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              <div>
                <p>Css3</p>
              </div>
              <div>
                <p>70%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level2"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>JavaScript</p>
              </div>
              <div>
                <p>65%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level3"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>Sass</p>
              </div>
              <div>
                <p>65%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level4"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>Reactjs</p>
              </div>
              <div>
                <p>70%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level5"></div>
            </div>
          </div>
        </div>
        <div className="skills_2">
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>Mysql</p>
              </div>
              <div>
                <p>50%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level6"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>Wordpress</p>
              </div>
              <div>
                <p>75%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level7"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>NodeJs-Express</p>
              </div>
              <div>
                <p>60%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level8"></div>
            </div>
          </div>
          <div className="skills_value">
            <div className="d-flex value">
              {" "}
              <div>
                <p>MongoDB</p>
              </div>
              <div>
                <p>60%</p>
              </div>
            </div>
            <div className="skills_level">
              <div className="skills_level8"></div>
            </div>
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
};
export default Skills;
