import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: #191919;
  width: 100%;
  padding: 50px;

  .Card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 80px;
    width: 100%;
  }
  .image {
    position: relative;
    width: 30%;
    margin: 1rem;
    border-radius: 5px;
    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    .card_content {
      top: 0;
      position: absolute;
      height: 200px;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      opacity: 0;
      transition: 1s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
      .container_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          margin: 0.6rem;
        }
        .icon {
          color: #ed138d;
          font-size: 3rem;
          :hover {
            color: #fff;
            font-size: 3rem;
          }
        }
      }
    }
    :hover {
      cursor: pointer;
      border: 1px dashed #fff;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      .card_content {
        opacity: 1;
      }
    }
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
    font-family: "Montserrat", sans-serif;
    &::after {
      border: 3px solid #ed138d;
      position: absolute;
      width: 50px;

      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      content: "";
      bottom: 0px;
      margin: 0 auto;
    }
  }
`;
