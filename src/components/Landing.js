import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Toaster from "../assets/img/icons/Toaster2.svg";
import Monkey from "../assets/img/icons/Monkey3.svg";
import MonkeyBanana from "../assets/img/icons/monkeyBanana.svg";
import paintCrown from "../assets/img/icons/PaintCrown.svg";
import monkeyToaster from "../assets/img/logo/cuteMonkeyToaster.svg";
import qwacksLogoTyped from "../assets/img/logo/QWacks-logo-typed.png";

const applyButtonCSS = {
  alignItems: "center",
  position: "relative",
  zIndex: "2",
  margin: "40px 0 20px auto",
  "@media(max-width: 820px)": {
    margin: "30px auto 45px auto",
    padding: "5px 10px 5px 10px"
    
  }
};


const Landing = () => (
  <div className="landing_wrapper" css={{ zIndex: "9999" }}>
    <Controller>
      <Scene triggerHook="onLeave" duration={1000} pin>
        {(progress1) => (
          <Timeline totalProgress={progress1} paused>
            <Tween
              from={{
                css: {
                  opacity: 1,
                  position: "absolute",
                  left: "70px",
                  top: "250px"
                }
              }}
              to={{
                css: {
                  opacity: 0,
                  position: "absolute",
                  left: "300px",
                  top: "100px"
                }
              }}
            >
              <div className="animation">
                <img
                  src={Toaster}
                  css={{
                    transform: "rotate(20deg)",
                    position: "absolute",
                    width: "300px",
                    left: "0px",
                    top: "150px",
                    overflowX: "hidden",
                    "@media(max-width: 1400px)": { display: "none" }
                  }}
                />
              </div>
            </Tween>
          </Timeline>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={1000} pin>
        {(progress2) => (
          <Timeline totalProgress={progress2} paused>
            <Tween
              from={{ css: { opacity: 1, rotation: -20 } }}
              to={{ css: { opacity: 0, rotation: 10 } }}
            >
              <div className="animation">
                <img
                  src={Monkey}
                  css={{
                    transform: "scaleX(-1)",
                    position: "absolute",
                    width: "400px",
                    right: "150px",
                    top: "350px",
                    overflowX: "hidden",
                    "@media(max-width: 1400px)": { display: "none" }
                  }}
                />
              </div>
            </Tween>
          </Timeline>
        )}
      </Scene>
    </Controller>
    <div
      id=""
      css={{
        zIndex: "9999",
        width: "100%",
        "@media(max-width: 600px)": {
          minHeight: "600px"
        }
      }}
    >
      <Header standaloneVersion={false} />
      <ContentWrapper>
        <section
          css={{
            zIndex: "9999",
            textAlign: "center",
            gridTemplateColumns: "auto 1fr",
            overflowX: "hidden",
            "@media(max-width: 820px)": {
              textAlign: "center",
              display: "block"
            }
          }}
        >
          <div
            css={{
              "@media(min-width: 1200px)": {
                paddingRight: "50px",
                paddingTop: "60px"
              },
              "@media (min-width: 821px) and (max-width: 1199px)": {
                paddingRight: "50px",
                paddingTop: "100px"
              },
              "@media (max-width: 820px)": {
                paddingTop: "80px"
              }
            }}
          >
            <br />

            <img
              // class="center"
              src={monkeyToaster}
              css={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "40px",
                paddingBottom: "5px",
                width: "100vw",
                maxWidth: "200px",
                "@media(max-width: 820px)": {
                  paddingTop: "12px",
                  width: "192px",
                  paddingBottom: "8px"
                }
              }}
              alt="QWacks Paint Crown"
            />

          <img
            // class="center"
            src={qwacksLogoTyped}
            css={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "0px",
              paddingBottom: "2px",
              width: "100%",
              maxWidth: "500px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "80%",
                paddingBottom: "8px"
              }
            }}
            alt="QWacks Wordmark"
          />

            <h2
              data-cy="qwacks-information"
              css={{
                position: "relative",
                zIndex: "2",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "22px",
                textAlign: "center",
                // paddingBottom: "30px",
                "@media(max-width: 820px)": {
                  paddingBottom: "24px"
                }
              }}
            >
              Queen’s University • March 20th - March 21st, 2020
            </h2>
            <div
              css={{
                padding: "50px 0 30px 0",
                color: "#00205B",
                //"-webkit-text-stroke": "0.9px #ffffff",
                fontWeight: 500,
                fontSize: "70px",
                letterSpacing: "10px",
                textAlign: "center",
                lineHeight: "30px",
                "@media(max-width: 820px)": {
                  paddingTop: "20px",
                  fontSize: "45px",
                  lineHeight: "1.6"
                }
              }}
            >
              <h1
                css={{
                  fontSize: "45px",
                  color: "black",
                  lineHeight: "69px",
                  "@media(max-width: 600px)": {
                    lineHeight: "45px"
                  }
                }}
              >
                "A bunch of monkeys coding on toasters."
              </h1>
            </div>
            <ActionButton
              dataCy="apply-button"
              backgroundColor="#00205B"
              foregroundColor="#ffffff"
              style={applyButtonCSS}
              link="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif"
              type="rounded"
            >
              Apply Soonish
            </ActionButton>
            <h2
              data-cy="qwacks-tagline"
              css={{
                position: "relative",
                zIndex: "2",
                padding: "20px 0 100px",
                color: "#ffffff",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: "30px",
                "@media(max-width: 820px)": {
                  paddingTop: "10px",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }
              }}
            >
              Queen’s University’s 1st ever wackathon.
              <br />
              Join us for a regrettable experience!
            </h2>
          </div>
        </section>
      </ContentWrapper>
    </div>
  </div>
);

export default Landing;
