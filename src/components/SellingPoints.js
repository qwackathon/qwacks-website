/*inspiration (refactor needed)*/

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

import rosettaStoned from "../assets/img/examples/rosetta_stoned.png";
import beeMovieTranscriber from "../assets/img/examples/bee_movie_transcriber.png"
import snapSpectacles from "../assets/img/examples/snap_chat_spectacles.jpg"

const points = [
  {
    name: "Elon Musk",
    project: "Rosetta Stoned",
    projectLink: "https://devpost.com/software/qhacks-v1",
    image: amyLu,
    text:
      "It's Rosetta Stone but for blowing fat clouds.",
    sample: rosettaStoned
  },
  {
    name: "Cooper Leong",
    project: "Bee Movie Transcriber",
    projectLink: "https://devpost.com/software/espect",
    image: cooperLeong,
    text:
      "A chrome extension that turns all the text on your page to soemthing from the bee movie script!",
    sample: beeMovieTranscriber
  },
  {
    name: "Jeff Bezos",
    project: "Snap Spectacles",
    projectLink: "https://devpost.com/software/qhacks-zgmlxr",
    image: jacobLaframboise,
    text:
      "Snap Spectacles",
    sample: snapSpectacles
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
        Here are some ideas of things we want to see!
      </span>
    );
   
    return (
      <section
        id="inspiration"
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
                height: "975px",
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
