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
    height: 215px;
    right: 15px;
    top: 130px;
  }

  .profile {
    width: 50%;
    position: absolute;
    width: 250px;
    right: 0;
    top: 97px;
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
        border: 3px solid #ed138d;
        position: absolute;
        width: 50px;
        height: 0;
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
  @media only screen and (max-width: 678px) {
    background-color: #212121;
    padding-bottom: 2rem;
    width: 100%;
    font-family: "Montserrat", sans-serif;

    .about_picture {
      display: flex;
      flex-direction: column;
    }
    .about_profile {
      height: 400px;
      width: 90%;
      display: flex;
      margin: 1rem;
      position: relative;
    }
    .background {
      background: #000000;
      border: 5px solid #ed138d;
      box-sizing: border-box;
      position: absolute;
      width: 250px;
      height: 315px;
      right: 50%;
      transform: translateX(45%);
      top: 80px;
    }

    .profile {
      width: 50%;
      position: absolute;
      width: 250px;

      right: 50%;
      transform: translateX(50%);
      top: 50px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }

    .about_speech {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0rem;
      padding: 1rem !important;

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
        text-align: center;
        text-transform: capitalize;
        color: #fff;
        font-family: "Montserrat", sans-serif;
        &::after {
          border: 3px solid #ed138d;
          position: absolute;
          width: 50px;
          height: 0;
          top: 43px;
          content: "";
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 auto;
        }
      }
    }

    span {
      color: #ed138d;
      font-size: 1.2rem;
      text-align: center;
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
    }
    p {
      color: white;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }
    .link {
      margin-top: 10px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      /* border: 1px solid red; */
    }
    .containerlink {
      padding: 1rem;
      margin: 1rem;
      /* margin-right: 0px; */
      justify-content: center;
      align-items: center;
    }
    .link1 {
      background-color: #ed138d;
      text-align: center;
      padding: 10px;

      font-weight: bold;
      color: white;
      border-radius: 50px;
      transition: 0.5s ease-in-out;
      margin: 10px;

      font-size: 1rem;
      :hover {
        background: transparent;
        border: 2px solid #ed138d;
      }
    }
    .link2 {
      text-align: center;
      padding: 10px;

      color: white;
      font-weight: bold;
      border-radius: 50px;
      border: 1px solid white;
      transition: 0.5s ease-in-out;
      margin: 10px;
      font-size: 1rem;
      :hover {
        border: 2px solid #ed138d;
      }
    }
  }
`;
