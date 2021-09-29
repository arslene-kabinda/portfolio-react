import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #212121;
  padding-bottom: 3rem;
  width: 100%;
  border: 1px solid red;
  font-family: "Montserrat", sans-serif;
  .about_picture {
    display: flex;
    border: 1px solid green;
    justify-content: center;
  }
  .about_profile {
    border: 1px solid pink;
    width: 45%;
    display: flex;
    margin: 1rem;
    position: relative;
    justify-content: end;
    border: 1px solid blue;
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
    border: 1px solid red;
    .about_picture {
      display: flex;
      flex-direction: column;
      border: 1px solid green;
     
    }
    .about_profile {
      width: 90%;
      display: flex;
      margin: 1rem;
      position: relative;
      border: 1px solid blue;
      /* justify-content: end; */
      
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
      border: 1px solid pink;
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
  }
`;
