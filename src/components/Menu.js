import React from "react";
import ScrollSpy from "react-scrollspy";

import colored from "../assets/img/logo/qhacksCrown-colored.svg";
import coloredWordmark from "../assets/img/logo/qhacksWordmark-colored.svg";
import { withClientState } from "apollo-link-state";

const Menu = (props) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "min-content auto",
        overflow: "visible",
        zIndex: "9999",
        height: "84px",
        // width:"50%"
        "@media(max-width:820px)": {
          height: "20px"
        }
      }}
    >
      <a
        href="/#"
        css={{
          transition: "0.5s",
          zIndex: "9999",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "inline-block"
              : props.imgCss
                ? "inline-block"
                : "none"
          }
        }}
      >
        <img
          css={{
            zIndex: "9999",
            paddingTop: "20px",
            paddingBottom: "20px",
            "@media(max-width:820px)": {
              display: "none"
            }
          }}
          src={colored}
          alt="QHacks Crown"
        />
        <img
          css={{
            zIndex: "9999",
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "95px",
            "@media(min-width:820px)": {
              display: "none"
            }
          }}
          src={coloredWordmark}
          alt="QHacks Crown"
        />
      </a>
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=gray"
        target="_blank"
        rel="external noopener"
        css={{
          display: "none",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "none"
              : props.imgCss
                ? "none"
                : "inline-block"
          },
          transition: "0.5s"
        }}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
          alt="Major League Hacking 2020 Hackathon Season"
          css={{
            height: "150px"
          }}
        />
        <h1 align="center">NOT</h1>
      </a>
      <div
        align="right"
        css={{
          paddingTop: "32px",
          paddingBottom: "32px",
          zIndex: "9999",
          height: "84px",
          display: "grid",
          transition: "1s",
          marginLeft: "auto",
          "@media(max-width: 820px)": {
            display: "none",
          },
          " li": {
            listStyleType: "none"
          }
        }}
      >
        <ScrollSpy
          css={{
            display: "grid",
            gridColumnGap: "40px",
            gridTemplateColumns: props.menuItems
              .map(() => "min-content ")
              .reduce((a, b) => a + b)
          }}
          offset={-1}
          items={props.menuItems}
          currentClassName="is-current"
        >
          {props.menuItems.map((label) => (
            <li
              key={label}
              css={{
                ":hover": {
                  " a": {
                    color: "#00205b"
                  },
                  ">div": {
                    width: "100%",
                    height: "2px"
                  }
                }
              }}
            >
              <a
                css={{
                  lineHeight: "1.43",
                  textAlign: "center",
                  paddingLeft: "2px",
                  zIndex: "9999",
                  paddingRight: "2px",
                  textTransform: "uppercase"
                }}
                href={`/#${label}`}
              >
                {label}
              </a>
              <div
                css={{
                  width: "100%",
                  height: "2px",
                  transition: "0.5s",
                  zIndex: "9999",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // backgroundColor: "#00205b",
                  backgroundColor: "#00205b",
                  width: "0px"
                }}
              />
            </li>
          ))}
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Menu;
