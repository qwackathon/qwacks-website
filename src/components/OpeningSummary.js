import React from "react";
import { css } from "glamor";

import ContentWrapper from "./ContentWrapper";

import ketchup from "../assets/img/selling_points/ketchup3.gif";

import cubes1webp from "../assets/img/icons/monkey-toaster-float-1.webp";
import cubes1png from "../assets/img/icons/monkey-toaster-float-1.png";

const caretCSS = (backgroundColor) =>
  css({
    backgroundColor,
    width: "26px",
    height: "4px"
  });

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%",
  height: "100%",
  "@media(max-width: 1115px)": {
    paddingTop: "10px"
  },
  "@media(max-width: 600px)": {
    width: "100%",
    height: "100%"
  },
};

const OpeningSummary = () => (
  <section id="about">
    <div
      css={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        // paddingTop: "50px",
        paddingBottom: "80px"
      }}
    >
      <ContentWrapper>
        <div
          css={{
            background: "#ffffff",
            display: "grid",
            gridTemplateColumns: "auto auto",
            padding: "40px 55px 40px 55px",
            margin: "0 auto 0 auto",
            borderRadius: "8px",
            boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
            border: "solid 1px #e8e8e8",
            "@media(max-width: 750px)": {
              padding: "32px 24px 32px 24px"
            },
            "@media(max-width: 1115px)": {
              display: "block"
            }
          }}
        >
          <div
            css={{
              paddingRight: "43px",
              "@media (max-width: 920px)": { paddingRight: "0px" }
            }}
          >
            <h1 css={{ paddingTop: "2px" }}>Make Something Useless</h1>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "auto auto 1fr",
                gridColumnGap: "4px",
                padding: "13px 0px 27px 0px"
              }}
            >
              <div {...caretCSS("#00205b")} />
              <div {...caretCSS("#c81c2e")} />
              <div {...caretCSS("#fedb01")} />
            </div>
            <p css={{ lineHeight: "26px", fontColor: "#000000" }}>
              Join some creative hackers and slackers for 24 hours and build
              something completely useless, for the good of no one. No technical
              expertise? No problem! QWacks will have 3 design categories:{" "}
              <b css={{ fontWeight: 500 }}>Software</b>,{" "}
              <b css={{ fontWeight: 500 }}>Gadgets</b> and{" "}
              <b css={{ fontWeight: 500 }}>Business Ideas.</b> Students from all
              faculties are welcome to join us. It’s like the saying goes, if
              you give enough time to a bunch of monkeys coding on toasters,
              they’ll create something wonderful.{" "}
            </p>
            <p
              css={{
                lineHeight: "26px",
                fontColor: "#000000",
                paddingTop: "20px"
              }}
            >
              Check out
              <a
                href="http://stupidhacktoronto.com/"
                target="_blank"
                css={{ fontSize: "16px", fontWeight: 500 }}
              >
                {" "}
                Stupid Hacks Toronto.{" "}
              </a>
              If it worked in Toronto, it'll work in Kingston.
            </p>
          </div>
          <div
            css={{
              margin: "auto auto auto auto",
              "@media(max-width: 1115px)": {
                height: "40vw"
              },
              "@media(max-width: 715px)": {
                height: "50vw"
              }
            }}
          >
          <picture>
            <img
                css={imgStyle}
                src={ketchup}
                alt="Useless wack"
              />
          </picture>
          </div>
          <picture
            css={{
              width: "275px",
              height: "196px",
              "@media(max-width: 1000px)": {
                width: "165px",
                height: "118px",
                bottom: "-70px"
              },
              position: "absolute",
              bottom: "-140px",
              right: "40px"
            }}
          >
            <source srcSet={cubes1webp} type="image/webp" />
            <source srcSet={cubes1png} type="image/png" />
            <img
              css={{
                width: "275px",
                height: "196px",
                "@media(max-width: 1000px)": {
                  width: "165px",
                  height: "118px"
                }
              }}
              src={cubes1png}
              alt="Floating cubes"
            />
          </picture>
        </div>
      </ContentWrapper>
    </div>
  </section>
);

export default OpeningSummary;
