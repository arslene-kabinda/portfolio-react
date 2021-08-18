import React from "react";
import { ServiceConatiner } from "./ServiceStyle";
import { Icon } from "@iconify/react";

const Service = () => {
  return (
    <ServiceConatiner>
      <div className="title">
        <h1>My Services</h1>
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
              orem ipsum dolor amet sit agua eta manus jugurta lorem ipsum dolor
              amet sit agua eta manus jugurta{" "}
            </p>
          </div>
        </div>
        <div className="cards">
          <div>
            <Icon icon="uit:web-grid" className="icon" />
          </div>
          <h2>UI/UX Research</h2>
          <p>
            orem ipsum dolor amet sit agua eta manus jugurta lorem ipsum dolor
            amet sit agua eta manus jugurta{" "}
          </p>
        </div>
        <div className="cards">
          <div>
            <Icon icon="uit:web-grid-alt" className="icon" />
          </div>
          <h2>Web Designer</h2>
          <p>
            orem ipsum dolor amet sit agua eta manus jugurta lorem ipsum dolor
            amet sit agua eta manus jugurta{" "}
          </p>
        </div>
      </div>
    </ServiceConatiner>
  );
};
export default Service;
