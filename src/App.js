import React from "react";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Service from "./components/pages/Services/Service";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
    </>
  );
};
export default App;
