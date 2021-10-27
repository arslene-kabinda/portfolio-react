import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #191919;
  padding: 2rem;
  .container_content {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  a {
    color: #fff;
  }

  p {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
  }
  .container_icon {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .icon {
    margin: 1rem 0.6rem;
    color: #ed138d;
    font-size: 1.2rem;
  }
  span {
    color: #fff;
  }
  .bg {
    border-bottom: 1px solid;
    width: 30%;
    margin: auto;
  }
  @media only screen and (max-width: 678px) {
    background: #191919;
    padding: 2rem;
    .container_content {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    a {
      color: #fff;
    }

    p {
      text-align: center;
      color: #fff;
      font-size: 1.2rem;
    }
    .container_icon {
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .icon {
      margin: 1rem 0.6rem;
      color: #ed138d;
      font-size: 1.2rem;
    }
    span {
      color: #fff;
    }
    .bg {
      border-bottom: 1px solid;
      width: 30%;
      margin: auto;
    }
  }
`;
