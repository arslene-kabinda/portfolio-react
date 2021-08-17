import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop, faCropAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ServiceConatiner } from "./ServiceStyle";

const Service = () => {
  return (
    <ServiceConatiner>
      <h1> My Services </h1>
      <div className="Service_card container">
        <div className="cards">
          <div>
            <FontAwesomeIcon icon={faCrop} className="icon" />
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
            <FontAwesomeIcon icon={faCrop} className="icon" />
          </div>
          <h2>UI/UX Research</h2>
          <p>
            orem ipsum dolor amet sit agua eta manus jugurta lorem ipsum dolor
            amet sit agua eta manus jugurta{" "}
          </p>
        </div>
        <div className="cards">
          <div>
            <FontAwesomeIcon icon={faCropAlt} className="icon" />
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
