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
    fontSize: "20px",
    display: "flex",
    justifyContent: "center"
  };

  return (
    <div
      css={{
        position: "relative",
        top: 110,
        display: "flex",
        justifyContent: "center",
        zIndex: 1
      }}
    >
      <div>
        <h1 css={{ color: "#ffffff", marginBottom: "30px", display: "flex", justifyContent: "center"}}> Wacker Ideas </h1>
        <p css={{ ...blurbStyle }}>{props.text}</p>
        <div css={{ marginTop: "800px", display: "flex", justifyContent: "center" }}>
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
