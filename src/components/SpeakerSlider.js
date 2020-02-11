import React, { Component } from "react";
import Slider from "react-slick";

import SpeakerCard from "./SpeakerCard";
import SpeakerSliderDots from "./SpeakerSliderDots";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SpeakerSlider extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (currentIndex) => this.setState({ currentIndex });

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  onSpeakerSliderDotsClicked = (num) => () => {
    this.slider.slickGoTo(num);
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      afterChange: (direction) => {
        this.handleChange(direction);
      }
    };

    return (
      <div css={{ width: "100%", position: "relative", zIndex: 3 }}>
        <SpeakerSliderDots
          speakers={this.props.speakers}
          currentIndex={this.state.currentIndex}
          onClick={this.onSpeakerSliderDotsClicked}
        />
        <Slider {...settings} ref={(slider) => (this.slider = slider)}>
          {this.props.speakers.map((speaker) => (
            <SpeakerCard {...speaker} key={speaker.name} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default SpeakerSlider;
