import React from "react";
import { SkillsContainer } from "./SkillsStyle";

const Skills = () => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div className="skills_container container">
        <div className="skills_1">
          <div className="skills_value">
            <div className="d-flex value" >
              {" "}
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
        </div>
        <div className="skills_2">azija</div>
      </div>
    </SkillsContainer>
  );
};
export default Skills;
