import React from "react";

const PointCard = (props) => (
  <div
    css={{
      display: props.mobile ? "block" : "inline-block",
      height: props.mobile ? null : "700px",
      whiteSpace: "normal",
      width: props.mobile ? null : "1060px",
      borderRadius: "8px",
      boxShadow: "4px 7px 20px 2px rgba(7, 16, 75, 0.1)",
      border: "solid 1px #e8e8e8",
      padding: props.mobile ? "24px 24px 82px 24px" : "48px",
      margin: props.mobile ? "45px 20px" : "45px 23px",
      flex: props.mobile ? null : "0 0 1060px",
      backgroundColor: "white",
      zIndex: 2,
      position: "relative",
      opacity: props.mobile || !props.index ? 1 : 0.05,
      transition: !props.index
        ? "opacity 600ms ease 0ms"
        : "opacity 600ms ease 500ms"
    }}
  >
    <div
      css={{
        display: "flex",
        alignItems: "center",
        marginBottom: "30px"
      }}
    >
      <img
        src={props.item.image}
        css={{ borderRadius: "50%", height: "72px", width: "72px" }}
        alt=""
      />
      <div css={{ display: "inline-block", marginLeft: "24px"}}>
        <strong
          css={{
            marginBottom: "8px",
            fontSize: "20px",
            display: "block"
          }}
        >
          {props.item.name}
        </strong>
        {props.item.project ? (
          <strong>
            <span css={{ color: "#000000", fontWeight: 600 }}>Project:</span>{" "}
            <a
              rel="external noopener"
              target="_blank"
              href={props.item.projectLink}
              css={{ fontWeight: 600 }}
            >
              {props.item.project}
            </a>
          </strong>
        ) : (
          ""
        )}
      </div>
    </div>
    <p
      css={{
        lineHeight: "32px",
        fontSize: "15px"
      }}
    >
      {props.item.text}
    </p>
    <img
      src={props.item.sample}
      css={{
        position: "relative",
        maxWidth: "80%",
        maxHeight: "80%",
        marginTop: "20px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "8px",
        border: "solid 3px #e8e8e8"
      }}
      alt=""
    />
  </div>
);

export default PointCard;
