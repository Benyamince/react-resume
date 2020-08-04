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
import "./App.css";

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <Element name="down_About" className="element" />
        <h2 className="cards_subject">{data.sections[1].title}</h2>
        <div className="Cards_wrapper">
          {data.sections[1].items.map((skill) => {
            return (
              <div>
                <div className="Cards_box">
                  <img
                    className="Cards_icons"
                    src={skill.Content.image}
                    alt=""
                  />
                  <h3 className="Cards_titles">{skill.Content.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
