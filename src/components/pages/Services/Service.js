import React from "react";
import { ServiceConatiner } from "./ServiceStyle";
import { Icon } from "@iconify/react";

const Service = () => {
  return (
    <ServiceConatiner id="services">
      <div className="title">
        <h1>Services</h1>
      </div>
      <div className="Service_card container">
        <div className="cards">
          <div>
            <Icon icon="akar-icons:github-outline-fill" className="icon" />
          </div>
          <div>
            {" "}
            <h2> Web Development</h2>
            <p>
              realization of all the technical functionalities of a website or a
              web application.
            </p>
          </div>
        </div>
        <div className="cards">
          <div>
            <Icon icon="uit:web-grid" className="icon" />
          </div>
          <h2>UI/UX Research</h2>
          <p>
            techniques allowing to think and create interfaces, meeting the
            expectations of the user when designing a platform.
          </p>
        </div>
        <div className="cards">
          <div>
            <Icon icon="uit:web-grid-alt" className="icon" />
          </div>
          <h2>Web Designer</h2>
          <p>
            design and realization of the visual aspect of a website or an
            application.
          </p>
        </div>
      </div>
    </ServiceConatiner>
  );
};
export default Service;
