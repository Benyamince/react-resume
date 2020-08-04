import React, { Component } from "react";
import data from "./data.json";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Down from "./downicon";

import "./App.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <Element name="down" className="element" />

        <div className="About_TXT">
          <h3 className="About_title">{data.sections[0].title}</h3>
          <div className="About_content">
            {data.sections[0].items[0].content}
          </div>

          <Link
            activeClass="active"
            to="down_About"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={0}
          >
            <a className="down_About" href="">
              <Down />
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
export default About;
