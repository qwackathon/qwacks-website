import React from "react";

const FeaturesIcons = (props) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "1fr ".repeat(props.list.length),
      width: "calc(100% - 200px)",
      margin: "0 auto",
      minWidth: "300px"
    }}
  >
    {props.list.map((item) => (
      <div key={item.text}>
        <img src={item.icon} alt="" />
        <div
          css={{
            fontWeight: 600,
            fontSize: "24px",
            padding: "6px 0"
          }}
        >
          {item.number}
        </div>
        <div
          css={{
            fontWeight: 500,
            fontSize: "14px"
          }}
        >
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

export default FeaturesIcons;
