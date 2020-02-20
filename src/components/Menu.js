import React from "react";
import ScrollSpy from "react-scrollspy";

import { withClientState } from "apollo-link-state";
import monkeyToaster from "../assets/img/logo/cuteMonkeyToaster.svg";
import mlhBanner from "../assets/img/icons/mlhBanner.png";


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
            paddingTop: "0px",
            paddingBottom: "10px",
            width: "100px",
            height: "90px",
            "@media(max-width:820px)": {
              display: "none",
              position: "absolute"
            }
          }}
          src={monkeyToaster}
          alt="Monkey Toaster"
        />
      </a>
      <a
        id="mlh-trust-badge"
        href="http://qwacks.fun/static/mlhBanner-5237baeb74e1d653226b31a4226df5f1.png"
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
          src={monkeyToaster}
          alt="Major League Hacking 2020 Hackathon Season"
          css={{
            height: "150px"
          }}
        />
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
