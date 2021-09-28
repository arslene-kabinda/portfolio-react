import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: #191919;
  width: 100%;
  height: 100vh;

  .Card {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 100px;
  }
  .image {
    width: 30%;
    height: 10%;
    margin: 10px;
    margin-top: 20px;
  }
  h1 {
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding-bottom: 10px;
    padding-top: 20px;
    font-size: 40px;
    line-height: 1.3;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    font-family: "Roboto", sans-serif;
    &::after {
      background-image: -webkit-linear-gradient(
        left,
        rgba(0, 0, 0, 0),
        rgb(237, 19, 133),
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      /* background-color: #ed138d; */
      width: 100%;
      content: "";
      bottom: 0px;
      max-width: 100px;
      margin: 0 auto;
    }
  }
`;
