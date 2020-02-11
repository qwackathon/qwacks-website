import React from "react";

import leftArrow from "../assets/img/icons/leftArrow.svg";
import rightArrow from "../assets/img/icons/rightArrow.svg";

const PointBlurb = (props) => {
  const arrowStyle = {
    border: "none",
    height: "20px",
    width: "40px"
  };

  const blurbStyle = {
    lineHeight: "1.6",
    fontWeight: 500,
    fontSize: "20px"
  };

  return (
    <div
      css={{
        width: "50%",
        height: "100%",
        position: "relative",
        zIndex: 2,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "right"
      }}
    >
      <div css={{ marginRight: "64px" }}>
        <h1 css={{ color: "#ffffff", marginBottom: "30px" }}> Wacker Ideas </h1>
        <p css={{ ...blurbStyle }}>{props.text}</p>
        <div css={{ marginTop: "65px" }}>
          <input
            onClick={() => props.prevPoint()}
            css={{
              ...arrowStyle,
              marginRight: "64px",
              opacity: props.firstPoint ? 0.2 : 1
            }}
            type="image"
            src={leftArrow}
            alt="Go to previous slide"
          />
          <input
            onClick={() => props.nextPoint()}
            css={{
              ...arrowStyle,
              opacity: props.lastPoint ? 0.2 : 1
            }}
            type="image"
            src={rightArrow}
            alt="Go to next slide"
          />
        </div>
      </div>
    </div>
  );
};

export default PointBlurb;
