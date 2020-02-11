import React, { Component } from "react";
import Slider from "react-slick";

import PointCard from "./PointCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PointListCompressed extends Component {
  constructor(props) {
    super(props);
  }

  handleSwipe = (direction) => {
    const increment = direction === "left" ? 1 : -1;
    if (
      this.state.currentIndex + increment >= 0 &&
      this.state.currentIndex + increment < this.props.points.length
    ) {
      this.setState({ currentIndex: this.state.currentIndex + increment });
    }
  };

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      onSwipe: (direction) => {
        this.handleSwipe(direction);
      }
    };

    const list = this.props.points.map((item, i) => (
      <div
        key={`${item.name} ${item.project}`}
        css={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <PointCard item={item} index={i} mobile={true} />
      </div>
    ));

    return (
      <div css={{ width: "100%", position: "relative", zIndex: 2 }}>
        <Slider {...settings}>{list}</Slider>
      </div>
    );
  }
}

export default PointListCompressed;
