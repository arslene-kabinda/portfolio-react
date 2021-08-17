import React from "react";
import { AboutContainer } from "./AboutStyle";
import profile from "../../assets/arsy.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <div className="container about_picture">
        <div className=" about_profile">
          <div className="background"></div>
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className="about_speech">
          {" "}
          <div>
            {" "}
            <div className="title">
              {" "}
              <h1>About</h1>
            </div>
            <p>
              <span>who am I ?</span>
            </p>
            <p>
              I am Arslène Kabinda Fullstact Developer, passionate about digital
              and specialized in the field of web and mobile web
              development.lorem ipsum dolor amet sit agua eta manus jugurta
              lorem ipsum dolo
            </p>
          </div>
          <div className="link">
            <div>
              <a
                className="link1"
                href="#Get my Cv
"
              >
                Contact me
              </a>
            </div>
            <div>
              <a className="link2" href="#Contact me">
                see projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};
export default About;
