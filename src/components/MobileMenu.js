import React from "react";

import monkeyToasterFloatwebp from "../assets/img/icons/monkey-toaster-float-2.webp";
import menuClose from "../assets/img/icons/mobileMenuClose.svg";
import hamburger from "../assets/img/icons/mobileMenuOpen.svg";
import monkeyToasterFloatpng from "../assets/img/icons/monkey-toaster-float-2.png";

const MobileMenu = (props) => (
  <div
    align="right"
    css={{
      zIndex: "9999",
      marginLeft: "auto",
      paddingBottom: "10px",
      "@media(min-width: 820px)": {
        display: "none"
      }
    }}
  >
    <input
      type="image"
      onClick={props.toggleMenu}
      src={hamburger}
      css={{  width: "32px", height: "24px" }}
      alt="Open menu"
    />
    <div
      className={props.isMenuVisible ? "no-scroll" : ""}
      css={{
        display: props.isMenuVisible ? "block" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        left: "0px",
        zIndex: "5",
        background: "#804783"
      }}
    >
      <input
        type="image"
        align="right"
        css={{ padding: "32px" }}
        src={menuClose}
        onClick={props.toggleMenu}
        alt="Close menu"
      />
      <div
        css={{
          marginTop: "100px",
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr"
        }}
      >
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            " a": {
              color: "white",
              textTransform: "uppercase",
              ":hover": {
                color: "#fedb01"
              }
            }
          }}
        >
          <div>
          </div>
          <div css={{ paddingBottom: "52px" }}>
          </div>
          {props.menuItems.map((i) => (
            <div key={i} css={{ paddingBottom: "24px" }}>
              <a
                href={`#${i}`}
                onClick={props.toggleMenu}
                css={{ fontWeight: "bold" }}
              >
                {i}
              </a>
            </div>
          ))}
          <div css={{ marginTop: "-100px", pointerEvents: "none" }}>
            <picture>
              <source srcSet={monkeyToasterFloatwebp} type="image/webp" />
              <source srcSet={monkeyToasterFloatpng} type="image/png" />
              <img css={{width: "69%", paddingTop: "125px"}}src={monkeyToasterFloatpng} alt="Floating monkey" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;
