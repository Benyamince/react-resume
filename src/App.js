import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import data from "./data.json";
import Nav from "./navigation";
import Home from "./Home";
import About from "./Aboutpart";
import Cards from "./card";
import Down from "./downicon";
import SnowStorm from "react-snowstorm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Element name="down" className="element" />
        <Home />
        <About />
        <Cards />
      </div>
    );
  }
}

export default App;
