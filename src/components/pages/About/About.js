import React from "react";
import { AboutContainer } from "./AboutStyle";
import profile from "../../assets/ars.jpeg";

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
          <div>
            <h1>About me</h1>
            <p>
              <span>who am I ?</span>
            </p>
            <p>
              I am Arslène Kabinda Fullstact Developer. Gifted with great
              curiosity and passionate about the world of digital, I turned to
              web and mobile development to transmit my knowledge and apply my
              skills at the service of all for a continuous improvement in this
              area.
            </p>
          </div>
          <div className="link">
            <div>
              <a className="link1" href="mailto: arskabinda@gmail.com">
                Contact me
              </a>
            </div>
            <div>
              <a className="link2" href="#Contact me">
                See my realisations
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};
export default About;
<a href="mailto: arskabinda@gmail.com">arskabinda@gmail.com</a>;
