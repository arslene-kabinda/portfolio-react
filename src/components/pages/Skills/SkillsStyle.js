import styled from "styled-components";
export const SkillsContainer = styled.div`
  background-color: #212121;
  height: 80vh;
  width: 100%;

  padding: 50px;

  h1 {
    text-align: center;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding-bottom: 20px;
    font-size: 40px;
    line-height: 1.3;
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
      width: 100%;
      content: "";
      bottom: 0px;
      max-width: 100px;
      margin: 0 auto;
    }
  }
  .skills_container {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    justify-content: space-around;
    padding: 50px;
  }
  .skills_1 {
    border: 1px solid green;
    width: 40%;
  }
  .skills_2 {
    border: 1px solid pink;
    width: 40%;
  }
  .skills_value {
    display: flex;
    flex-direction: column;
  }
  .value {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .skills_level {
    background-color: #c4c4c4;
    width: 100%;
  }
  .skills_level1 {
    background-color: #ed138d;
    width: 60%;

    padding-top: 5px;
  }
`;
