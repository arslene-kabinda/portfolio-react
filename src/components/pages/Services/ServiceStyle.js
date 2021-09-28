import styled from "styled-components";
export const ServiceConatiner = styled.div`
  background-color: #191919;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 50px;
  h1 {
    color: white;
    font-size: 1.7rem;
    font-family: "Roboto", sans-serif;

    font-weight: bold;
  }

  .Service_card {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
  .cards {
    background-color: #000000;
    height: 220px;
    width: 200px;
    border-radius: 5px;
    margin: 60px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 15px;
  }
  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: white;

    text-align: center;
    font-family: "Roboto", sans-serif;
  }
  h1 {
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
      /* background-color: #ed138d; */
      width: 100%;
      content: "";
      bottom: 0px;
      max-width: 100px;
      margin: 0 auto;
    }
  }
  p {
    font-size: 0.8rem;
    text-align: center;

    color: white;
    font-family: "Roboto", sans-serif;
  }
  .git {
    border: 1px solid black;
  }
  .icon {
    color: #ed138d;
    font-size: 3rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media only screen and (max-width: 600px) {
    background-color: #191919;
    height: 120vh;
    width: 100%;
    text-align: center;
    padding: 10px;
    h1 {
      color: white;
      font-size: 1.2rem;
      font-family: "Roboto", sans-serif;

      font-weight: bold;
    }

    .Service_card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;

      height: 100vh;
      padding: 0 !important;
      width: 100%;
    }
    .cards {
      background-color: #000000;
      height: 350px;
      width: 97%;
      border-radius: 5px;
      margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    h2 {
      font-size: 1rem;
      font-weight: bold;
      color: white;

      text-align: center;
      font-family: "Roboto", sans-serif;
    }
    h1 {
      left: 0;
      right: 0;
      margin: 0 auto;
      position: relative;
      font-weight: 500;
      padding-bottom: 10px;
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
        /* background-color: #ed138d; */
        width: 100%;
        content: "";
        bottom: 0px;
        max-width: 100px;
        margin: 0 auto;
      }
    }
    p {
      font-size: 0.8rem;
      text-align: center;

      color: white;
      font-family: "Roboto", sans-serif;
    }
    .git {
      border: 1px solid black;
    }
    .icon {
      color: #ed138d;
      font-size: 3rem;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;
