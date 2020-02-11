/*Testimonials (refactor needed)*/

import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import PointList from "./PointList.js";
import PointBlurb from "./PointBlurb";
import PointListCompressed from "./PointListCompressed.js";
import PointBlurbCompressed from "./PointBlurbCompressed";

import jacobLaframboise from "../assets/img/headshots/jacobLaframboise.jpg";
import amyLu from "../assets/img/headshots/amyLu.png";
import cooperLeong from "../assets/img/headshots/cooperLeong.png";


const points = [
  {
    name: "Elon Musk",
    project: "Reverse Tinder",
    projectLink: "https://devpost.com/software/qhacks-v1",
    image: amyLu,
    text:
      "It's like Tinder, but instead of showing you everyone, it only shows you people that didn't swipe on you and bots."
  },
  {
    name: "Cooper Leong",
    project: "Super Dark Mode",
    projectLink: "https://devpost.com/software/espect",
    image: cooperLeong,
    text:
      "A chrome extension for you dark mode enthusiasts. It takes your webpage, and makes it as dark as possible!"
  },
  {
    name: "Jeff Bezos",
    project: "Yamazon",
    projectLink: "https://devpost.com/software/qhacks-zgmlxr",
    image: jacobLaframboise,
    text:
      "Amazon marketplace but exclusively for yams."
  }
];

class SellingPoints extends Component {
  state = {
    currentPoint: 0
  };

  nextPoint() {
    this.setState({
      currentPoint: Math.min(
        this.state.currentPoint + 1,
        points.length - 1
      )
    });
  }

  prevPoint() {
    this.setState({
      currentPoint: Math.max(this.state.currentPoint - 1, 0)
    });
  }

  render() {
    
    const blurb = (
      <span css = {{ color:"#ffffffff" }}>
        QWacks has something to offer no one.
        <br />
        Here are some ideas of things we want to see!
      </span>
    );
   
    return (
      <section
        id="testimonials"
        css={{
          background: "00205B",
          backgroundSize: "cover",
          "@media(max-width:1000px)": {
            paddingTop: "50px",
            paddingBottom: "60px",
            overflowX: "hidden",
            overflowY: "hidden"
          }
        }}
      >
        <ContentWrapper>
          <MediaQuery query="screen and (min-width: 1000px)">
            <div
              css={{
                height: "575px",
                position: "relative"
              }}
            >
              <PointBlurb
                nextPoint={() => this.nextPoint()}
                prevPoint={() => this.prevPoint()}
                firstPoint={!this.state.currentPoint}
                lastPoint={
                  this.state.currentPoint === points.length - 1
                }
                text={blurb}
              />
              <PointList
                currentPoint={this.state.currentPoint}
                points={points}
              />
            </div>
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1000px)">
            <div css={{ margin: "0 0 80px 0" }}>
              <PointBlurbCompressed text={blurb} />
              <PointListCompressed
                currentPoint={this.state.currentPoint}
                points={points}
              />
            </div>
          </MediaQuery>
        </ContentWrapper>
      </section>
    );
  }
}

export default SellingPoints;
