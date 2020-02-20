/*inspiration (refactor needed)*/

import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import PointList from "./PointList.js";
import PointBlurb from "./PointBlurb";
import PointListCompressed from "./PointListCompressed.js";
import PointBlurbCompressed from "./PointBlurbCompressed";

// Headshots
import kermit from "../assets/img/headshots/kermit_slim.png";
import matt from "../assets/img/headshots/matt-mii.png";
import elon from "../assets/img/headshots/elon.jpg";
import casper from "../assets/img/headshots/casper.jpg";
import dyatlov from "../assets/img/headshots/dyatlov.png";
import spiegel from "../assets/img/headshots/spiegel.jpg";
import barry from "../assets/img/headshots/barry.png";
import hackerman from "../assets/img/headshots/hackerman.png";

// Examples
import superDarkMode from "../assets/img/examples/super-dark-mode.png"
import shakerSelfie from "../assets/img/examples/shaker-selfie.jpg"
import rosettaStoned from "../assets/img/examples/rosetta_stoned.png";
import beeMovieTranscriber from "../assets/img/examples/bee_movie_transcriber.png"
import snapSpectacles from "../assets/img/examples/snap_chat_spectacles.jpg"
import leadBlanket from "../assets/img/examples/leadblanket.jpeg"
import brightPhone from "../assets/img/examples/brightphone.jpg"

const points = [
  {
    name: "Hackerman",
    project: "Super Dark Mode",
    image: hackerman,
    text:
      "A chrome extension for all you dark mode lovers! Take dark mode to the next level with Super Dark Mode - check it out on this page!",
    sample: superDarkMode
  },
  {
    name: "Matt",
    project: "Shaker Selfie",
    image: matt,
    text:
      "A fun new selfie taker where you have to shake the phone to take a photo, that way you capture life’s blurriest moments!",
    sample: shakerSelfie
  },
  {
    name: "Barry B. Benson",
    project: "Bee Movie Transcriber",
    image: barry,
    text:
      "A chrome extension that turns all the text on your page to something from the bee movie script!",
    sample: beeMovieTranscriber
  },
  {
    name: "Evan Spiegel",
    project: "Snap Spectacles",
    image: spiegel,
    text:
      "\"Remember how cool and popular Google Glass was? What if we made hundreds of thousands of those, there’s no way we’d lose $40 million in one quarter.\” - Some guy who no longer works at Snapchat",
    sample: snapSpectacles
  },
  {
    name: "Antoly Dyatlov",
    project: "Weighted Blanket with Lead Lining",
    image: dyatlov,
    text:
      "Enjoy the anxiety reducing comfort of a weighted blanket with the added bonus of being shielded from ionizing radiation! Be prepared for deeper sleep and impending nuclear war.",
    sample: leadBlanket
  },
  {
    name: "Casper the Friendly Ghost",
    project: "Screen Blue Light Enhancer",
    image: casper,
    text:
      "A useful app that sets your phone’s screen to maximum brightness between 9 pm and 7 am. It also increases blue light levels to keep you from getting sleepy.",
    sample: brightPhone
  },
  {
    name: "Elon Musk",
    project: "Rosetta Stoned",
    image: elon,
    text:
      "It's Rosetta Stone but for blowing fat clouds.",
    sample: rosettaStoned
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
