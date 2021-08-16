import React from "react";
import { HomeContainer } from "./HomeStyle";

const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <p>Hello,</p>
        <h1> I'm Arslène Kabinda</h1>
        <p> Full Stack Develloper, UI and UX Designer</p>
      </div>
      <div className="link container">
        <div>
          {" "}
          <a
            className="link1"
            href="#Get my Cv
"
          >
            Get my Cv
          </a>
        </div>
        <div>
          {" "}
          <a className="link2" href="#Contact me">
            Contact me
          </a>
        </div>
      </div>
    </HomeContainer>
  );
};
export default Home;
