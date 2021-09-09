import React, { Component } from "react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./css/homepage.scss";
// import "./css/dummy.css"

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Homepage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
