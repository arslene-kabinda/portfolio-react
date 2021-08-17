import styled from "styled-components";

import bg from "../../assets/bg.jpg";
export const HomeContainer = styled.div`
  background-image: url(${bg});

  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
  font-family: "Roboto", sans-serif;

  padding-top: 230px;
  text-align: center;

  p {
    color: white;
    font-size: 1.2rem;
  }
  h1 {
    color: #ed138d;
    font-weight: bold;
    font-size: 3rem;
    
  }
  .link {
    padding: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .link1 {
    background-color: #ed138d;
    text-align: center;
    padding-right: 25px;
    padding-left: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    border-radius: 50px;
    font-weight: bold;
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
    font-weight: bold;
    margin-right: 20px;
    font-size: 1rem;
    :hover {
      border: 1px solid #ed138d;
    }
  }
  @media (max-width: 767px) {
    padding-top: 100px;
    height: 100%;
    p {
      color: white;
      font-size: 1rem;
    }
    h1 {
      color: #ed138d;
      font-weight: bold;
      font-size: 2rem;
    }
    .link {
      padding: 30px;
      margin-top: 25px;
      display: flex;
      justify-content: center;
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
      font-weight: bold;
      margin-right: 10px;
      font-size: 1rem;
      :hover {
        background: transparent;
        border: 5px solid #ed138d;
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
      font-weight: bold;
      margin-right: 10px;
      font-size: 1rem;
      :hover {
        border: 5px solid #ed138d;
      }
    }
  }
`;
