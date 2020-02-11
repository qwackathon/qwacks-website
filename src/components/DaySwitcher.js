import React, { Component } from "react";
import { css } from "glamor";

class DaySwitcher extends Component {
  state = {
    selectedDay: 0
  };

  changeDay(day, index) {
    this.props.changeDay(day);
    this.setState({ selectedDay: index });
  }

  render() {
    // truncate slider width to 3 decimals
    const sliderWidth = Math.trunc(100000 / this.props.days.length) / 1000;

    const sliderCss = {
      position: "absolute",
      left: `${this.state.selectedDay * sliderWidth}%`,
      top: 0,
      height: "44px",
      backgroundColor: "#00205B",
      borderRadius: "20px",
      width: `${sliderWidth}%`,
      zIndex: 2,
      transition: "left 0.3s ease"
    };

    const navBarCss = css({
      display: "grid",
      gridTemplateColumns: `repeat(${this.props.days.length}, 1fr)`,
      width: "66%",
      "@media screen and (max-width: 760px)": { width: "100%" },
      maxWidth: "600px",
      margin: "20px auto 35px auto",
      backgroundColor: "#FFFFFF",
      height: "44px",
      position: "relative",
      zIndex: 2,
      border: "0.5px solid #00205B",
      borderRadius: "100px",
      "> button.dayItem": {
        textAlign: "center",
        lineHeight: "44px",
        textTransform: "uppercase",
        fontWeight: "bold",
        cursor: "pointer",
        background: "none",
        border: "none",
        fontSize: "18px",
        zIndex: 3,
        transition: "color 1s ease"
      },
      "> button.dayItem.selectedDay": {
        color: "white"
      },
      "> button.dayItem:not(.selectedDay)": {
        color: "#4d4d4d"
      },
      "> button.dayItem:not(.selectedDay):hover": {
        color: "#00205B"
      }
    });

    const navItems = this.props.days.map((day, i) => (
      <button
        key={day}
        onClick={() => this.changeDay(day, i)}
        className={
          this.state.selectedDay === i ? "selectedDay dayItem" : "dayItem"
        }
      >
        Day {i + 1}
      </button>
    ));

    return (
      <div {...navBarCss}>
        {navItems}
        <div role="none presentation" css={{ ...sliderCss }} />
      </div>
    );
  }
}

export default DaySwitcher;
