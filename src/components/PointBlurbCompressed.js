import React from "react";

const PointBlurbCompressed = (props) => {
  return (
    <div css={{ textAlign: "center", marginBottom: "10px" }}>
      <h1 css={{ color: "#ffffff", marginTop: "32px", marginBottom: "16px" }}>
        Wacker Ideas
      </h1>
      <p
        css={{
          fontSize: "20px",
          fontWeight: 500,
          "@media(max-width: 600px)": {
            fontSize: "18px"
          }
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default PointBlurbCompressed;
