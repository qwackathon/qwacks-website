import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";

import PointCard from "./PointCard";

const PointList = (props) => {
  const points = props.points.slice(props.currentPoint);
  const list = points.map((item, i) => (
    <CSSTransition
      key={`${item.name} ${item.project}`}
      classNames="pointsAnimation"
      timeout={1000}
    >
      <PointCard item={item} index={i} />
    </CSSTransition>
  ));
  return (
    <div
      css={{
        height: "100%",
        width: "100%",
        top: 125,
        position: "absolute",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        css={{
          display: "flex",
          whiteSpace: "nowrap"
        }}
      >
        <TransitionGroup component={null}>{list}</TransitionGroup>
      </div>
    </div>
  );
};

export default PointList;
