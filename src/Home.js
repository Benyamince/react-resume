import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import data from "./data.json";
import Down from "./downicon";
import Nav from "./navigation";
import SnowStorm from "react-snowstorm";

import "./App.css";

class Home extends Component {
  state = {
    backgroundColor: "rgb(211, 210, 210)",
  };

  changeColer = () => {
    this.setState({
      backgroundColor: "khaki",
    });
  };

  render() {
    return (
      <div>
        <Element name="Home" className="element" />
        <div
          className="Home"
          style={{
            backgroundColor: this.state.backgroundColor,
          }}
        >
          <div className="Home_titles">
            <h1
              onClick={() => {
                this.changeColer();
              }}
            >
              Hello {data.title}
            </h1>
          </div>
          <div className="Home_subtitles">
            <h3>{data.subtitle}</h3>
          </div>

          <div className="Home_icons">
            {Object.keys(data.icons).map((key) => {
              return (
                <SocialIcon className="Home_per_icons" url={data.icons[key]} />
              );
            })}
          </div>
          <Link
            activeClass="active"
            to="down"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={0}
          >
            <a className="down">
              <Down />
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
