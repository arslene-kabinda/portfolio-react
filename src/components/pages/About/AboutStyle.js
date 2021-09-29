import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #212121;
  padding-bottom: 3rem;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  .about_picture {
    display: flex;
    justify-content: center;
  }
  .about_profile {
    width: 45%;
    display: flex;
    margin: 1rem;
    position: relative;
    justify-content: end;
  }
  .background {
    background: #000000;
    border: 5px solid #ed138d;
    box-sizing: border-box;
    position: absolute;
    width: 250px;
    height: 315px;
    left: 222px;
    top: 100px;
  }

  .profile {
    width: 50%;
    position: absolute;
    width: 250px;
    height: 220px;
    left: 238px;
    top: 67px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }

  .about_speech {
    width: 45%;
    margin: 1rem;
    padding: 4rem 1rem;

    h1 {
      position: relative;
      left: 0;
      right: 0;
      margin: 1rem auto;
      position: relative;
      font-weight: 500;
      padding-bottom: 1rem;
      font-size: 1.8rem;
      line-height: 1.3;
      text-transform: capitalize;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      &::after {
        border: 2px solid #ed138d;
        position: absolute;
        width: 50px;
        height: 0px;
        top: 43px;
        content: "";
        bottom: 0px;
        left: 0%;
        transform: translateX(50%);
        margin: 0 auto;
      }
    }
  }

  span {
    color: #ed138d;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  p {
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  .link {
    margin-top: 30px;
    display: flex;
    justify-content: start;
  }
  .link1 {
    background-color: #ed138d;
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    transition: 0.5s ease-in-out;
    margin-right: 20px;
    font-size: 1rem;
    :hover {
      background: transparent;
      border: 2px solid #ed138d;
    }
  }
  .link2 {
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
    border-radius: 50px;
    border: 1px solid white;
    transition: 0.5s ease-in-out;
    margin-right: 20px;
    font-size: 1rem;
    :hover {
      border: 2px solid #ed138d;
    }
  }
  /* @media only screen and (max-width: 600px) {
    background-color: #212121;
    height: 60vh;
    width: 100%;
    padding: 0 !important;
    font-family: "Roboto", sans-serif;

    .about_picture {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
    }

    .profile {
      width: 38%;
      background-color: #000000;
      border: 5px solid #ed138d;
      display: none;

      img {
        width: 100%;
        /* border: 6px solid #212121; */
  /* margin-left: 20px; */
  /* }
    }
  } */
  /* .about_speech {
    width: 100%;

    padding: 10px;
    text-align: justify;
    margin: 0 !important;
    font-family: "Roboto", sans-serif;
  } */
  /* h1 {
    left: 0;
    right: 0;
    margin: 0 auto; */
  /* position: relative; */
  /* font-weight: 500; */
  /* padding-bottom: 10px;
    font-size: 25px;
    line-height: 1.3;
    text-align: center !important;
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
  /* width: 100%;
      content: "";
      bottom: 0px;
      max-width: 100px;
      margin: 0 auto;
    }
  }
  .title {
    padding: 6px;

    span {
      color: #ed138d;
      font-size: 1.2rem;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
    }
    p {
      color: white;
      font-family: "Roboto", sans-serif;
    }
    .link {
      margin-top: 30px;
      display: flex;
      justify-content: start;
    }
    .link1 {
      background-color: #ed138d;
      text-align: center;
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      border-radius: 50px;

      margin-right: 20px;
      font-size: 1rem;
      :hover {
        background: transparent;
        border: 1px solid #ed138d;
      }
    }
    .link2 {
      text-align: center;
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      border-radius: 50px;
      border: 1px solid white;

      margin-right: 20px;
      font-size: 1rem;
      :hover {
        border: 1px solid #ed138d;
      }
    }
  } */
`;
