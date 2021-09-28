import React from "react";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import Service from "./components/pages/Services/Service";
import Skills from "./components/pages/Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Skills />
      <Projects />
    </>
  );
};
export default App;
