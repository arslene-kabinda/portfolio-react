import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #212121;
  height: 90vh;
  width: 100%;
  padding-top: 130px;
  font-family: "Roboto", sans-serif;

  .about_picture {
    display: flex;
    justify-content: space-around;
    
    padding: 20px;
  }

  .profile {
    width: 38%;
    background-color: #000000;
    border: 5px solid #ed138d;

    /* margin-bottom: 20px; */

    img {
      width: 100%;
      border: 6px solid #212121;
      /* margin-left: 20px; */
    }
  }
  .about_profile {
    width: 50%;
    margin-right: 20x;
    display: flex;
    justify-content: end;
   
  }
  /* h1 {
    text-align: start;
    color: white;
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    border-bottom: solid 3px #ed138d;
    width: 10%;
    font-weight: bold; */
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
  .title {
    padding: 6px;
  }
  .about_speech {
    width: 50%;
    margin-left: 20px;
    padding: 30px;
  }
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
  @media only screen and (max-width: 600px) {
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
      }
    }
    
    
  }
    .about_speech {
      width: 100%;

      padding: 10px;
      text-align: justify;
      margin: 0 !important;
      font-family: "Roboto", sans-serif;
    }
    h1 {
      left: 0;
      right: 0;
      margin: 0 auto;
      /* position: relative; */
      /* font-weight: 500; */
      padding-bottom: 10px;
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
        width: 100%;
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
  }
`;
