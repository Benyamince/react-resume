import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Home from "./Home";

import "./App.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={0}
          >
            <li className="nav_list">
              <a href="" className="nav_link">
                Home
              </a>
            </li>
          </Link>

          <Link
            activeClass="active"
            to="down"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={0}
          >
            <li className="nav_list">
              <a href="" className="nav_link">
                About
              </a>
            </li>
          </Link>

          <Link
            activeClass="active"
            to="down_About"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={0}
          >
            <li className="nav_list">
              <a href="" className="nav_link">
                Skills
              </a>
            </li>
          </Link>

          <li
            className="nav_list"
            onClick={() => {
              Home.this.changeColer();
            }}
          >
            <a href="" className="nav_link">
              Change Coler
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
