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
    font-family: "Montserrat", sans-serif;
    &::after {
      border: 3px solid #ed138d;
      position: absolute;
      width: 50px;
      height: 0px;
      left: 50%;
      transform: translateX(-50%);
      top: 60px;
      content: "";
      bottom: 0px;
      margin: 0 auto;
    }
  }
  .skills_container {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    padding: 50px;
  }
  .skills_1 {
    width: 40%;
    padding: 20px;
  }
  .skills_2 {
    width: 40%;
    padding: 20px;
  }
  .skills_value {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .value {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    font-family: "Roboto", sans-serif;
    margin-bottom: -12px;
  }
  .skills_level {
    background-color: #c4c4c4;
    width: 100%;
  }
  .skills_level1 {
    background-color: #ed138d;
    width: 80%;

    padding-top: 5px;
  }
  .skills_level2 {
    background-color: #ed138d;
    width: 75%;

    padding-top: 5px;
  }
  .skills_level3 {
    background-color: #ed138d;
    width: 65%;

    padding-top: 5px;
  }
  .skills_level4 {
    background-color: #ed138d;
    width: 70%;

    padding-top: 5px;
  }
  .skills_level5 {
    background-color: #ed138d;
    width: 65%;

    padding-top: 5px;
  }
  .skills_level6 {
    background-color: #ed138d;
    width: 55%;

    padding-top: 5px;
  }
  .skills_level7 {
    background-color: #ed138d;
    width: 40%;

    padding-top: 5px;
  }
  .skills_level2 {
    background-color: #ed138d;
    width: 60%;

    padding-top: 5px;
  }
  @media only screen and (max-width: 600px) {
    background-color: #212121;
    height: 100vh;
    width: 100%;

    padding: 10px;

    h1 {
      text-align: center;
      left: 0;
      right: 0;
      margin: 0 auto;
      position: relative;
      font-weight: 500;
      padding-bottom: 20px;
      padding-top: 20px;
      font-size: 20px;
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
      flex-direction: column;

      justify-content: space-around;
      padding: 10px;
      width: 100%;
    }
    .skills_1 {
      width: 100%;
      padding: 20px;
    }
    .skills_2 {
      width: 100%;
      padding: 20px;
    }
    .skills_value {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
    .value {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #fff;
      font-family: "Roboto", sans-serif;
      margin-bottom: -12px;
    }
    .skills_level {
      background-color: #c4c4c4;
      width: 100%;
    }
    .skills_level1 {
      background-color: #ed138d;
      width: 80%;

      padding-top: 5px;
    }
    .skills_level2 {
      background-color: #ed138d;
      width: 75%;

      padding-top: 5px;
    }
    .skills_level3 {
      background-color: #ed138d;
      width: 65%;

      padding-top: 5px;
    }
    .skills_level4 {
      background-color: #ed138d;
      width: 70%;

      padding-top: 5px;
    }
    .skills_level5 {
      background-color: #ed138d;
      width: 65%;

      padding-top: 5px;
    }
    .skills_level6 {
      background-color: #ed138d;
      width: 55%;

      padding-top: 5px;
    }
    .skills_level7 {
      background-color: #ed138d;
      width: 40%;

      padding-top: 5px;
    }
    .skills_level2 {
      background-color: #ed138d;
      width: 60%;

      padding-top: 5px;
    }
  }
`;
