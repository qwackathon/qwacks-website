import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import placeholder from "../assets/img/sponsors/placeholder.png";
import sunlifeLogo from "../assets/img/sponsors/sunlife.png";
import voiceflowLogo from "../assets/img/sponsors/voiceflow.jpeg";
import rpaBotProLogo from "../assets/img/sponsors/rpaBotPro.png";
import tdLogo from "../assets/img/sponsors/td.png";
import scotiabankLogo from "../assets/img/sponsors/scotiabank.svg";
import ritualLogo from "../assets/img/sponsors/ritual.svg";
import sketchLogo from "../assets/img/sponsors/sketch.svg";
import mosaicLogo from "../assets/img/sponsors/mosaic.png";
import wolframLogo from "../assets/img/sponsors/wolfram.svg";

import qicLogo from "../assets/img/sponsors/qic.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import mlhLogo from "../assets/img/sponsors/mlh-black.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sodexoLogo from "../assets/img/sponsors/sodexo.svg";
import pccLogo from "../assets/img/sponsors/pcc.png";
import kingstonLogo from "../assets/img/sponsors/kingston.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import schoolOfComputingLogo from "../assets/img/sponsors/schoolOfComputing.png";
import asusAmsEngSocLogo from "../assets/img/sponsors/asusAmsEngSoc.png";

import gogurt from "../assets/img/sponsors/gogurt.png";
import possiblyYou from "../assets/img/sponsors/possibly-you.gif";


const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      position: "relative",
      zIndex: "2",
      paddingBottom: "60px",
      color: "#FFFFFF",
      opacity: "1",
      " img": {
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          position: "relative",
          zIndex: "9999",
          background: "#ffffff",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        {/* Sponsors */}

        <div>
          <h1>Sponsors</h1>
          <h2 css={{
            paddingTop: "25px",
            fontWeight: 400,
            fontSize: "16px",
            paddingRight: "60px",
            paddingLeft: "60px",
            lineHeight: "30px"
          }}>We're letting literally anyone sponsor. From Fortune 500 companies to folks with $5 in their pocket, money is money is money. <b css={{fontWeight: 500}}>Sponsorship package coming soon.</b></h2>
          {/* Giga */}
          <div
            css={{
              marginTop: "40px",
              "@media(max-width: 500px)": {
                marginBottom: "60px"
              }
            }}
          >
            {/* Giga Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", //change to 1fr 1fr once sponsors fill
                marginBottom: "60px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>
              <SponsorLink>
              {/*<SponsorLink url="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif">*/}
                <img
                  css={{
                    borderRadius: "15pt",
                    marginBottom: "30px",
                    width: "700px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "180px"
                    }
                  }}
                  src={possiblyYou}
                  alt="SunLife Logo"
                />
              </SponsorLink>

              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>

            </div>
          
          {/* Mega */}
          {/*
          <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginTop: "60px",
                marginBottom: "50px",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >

            
                  
            <SponsorLink url="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif">
                <img
                  src={gogurt}
                  css={{
                    width: "300px",
                    marginLeft: "100px",
                    "@media(max-width: 1080px)": {
                      width: "250px",
                    },
                    "@media(max-width: 980px)": {
                      width: "205px",
                      marginBottom: "20px",
                      marginRight: "30px"
                    },
                    "@media(max-width: 740px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginLeft: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginLeft: "0px"
                    }
                  }}
                  alt="TD Logo"
                />
              </SponsorLink>

              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>

              <SponsorLink url="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif">
                <img
                  src={gogurt}
                  css={{
                    width: "350px",
                    marginRight: "100px",
                    marginTop: "8px",
                    "@media(max-width: 1080px)": {
                      width: "300px",
                    },
                    "@media(max-width: 980px)": {
                      width: "220px",
                      marginBottom: "20px",
                      marginRight: "60px"
                    },
                    "@media(max-width: 740px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginRight: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginRight: "0px"
                    }
                  }}
                  alt="Scotiabank Logo"
                />
              </SponsorLink>

            </div>
          
          <div
            css={{
              ">div.fourCol": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "40px",
                marginLeft: "auto",
                marginRight: "auto",
                "@media(max-width: 920px)": {
                  gridTemplateColumns: "1fr 1fr 1fr",
                  width: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px"
                },
                "@media(max-width: 715px)": {
                  gridTemplateColumns: "1fr",
                  width: "90%",
                  marginBottom: "0px"
                }
              }
            }}
          >
            <div className="fourCol">

            <SponsorLink url="https://www.voiceflow.com/">
                <img
                  src={gogurt}
                  css={{
                    width: "200px",
                    marginTop: "20px",
                    marginRight: "20px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      marginBottom: "10px",
                      marginTop: "10px"
                    },
                    "@media(max-width: 610px)": {
                      width: "150px",
                      marginBottom: "10px",
                      marginRight: "0px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Voiceflow Logo"
                />
              </SponsorLink>

            <SponsorLink url="https://ritual.co/">
                <img
                  src={gogurt}
                  css={{
                    width: "200px",
                    marginTop: "20px",
                    // marginRight: "20px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      marginBottom: "10px",
                      marginTop: "10px"
                    },
                    "@media(max-width: 610px)": {
                      width: "150px",
                      marginBottom: "10px",
                      // marginRight: "0px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Ritual Logo"
                />
              </SponsorLink>

              <SponsorLink url="https://sketch.com/">
                <img
                  src={gogurt}
                  css={{
                    width: "200px",
                    marginTop: "20px",
                    // marginRight: "20px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      marginBottom: "10px",
                      marginTop: "10px"
                    },
                    "@media(max-width: 610px)": {
                      width: "150px",
                      marginBottom: "10px",
                      // marginRight: "0px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Sketch Logo"
                />
              </SponsorLink>

              <SponsorLink url="https://www.wolfram.com/language/">
                <img
                  src={gogurt}
                  css={{
                    width: "230px",
                    // marginRight: "10px",
                    marginTop: "60px",
                    "@media(max-width: 920px)": {
                      width: "170px",
                      paddingRight: "30px",
                      marginBottom: "10px",
                      // marginRight: "0px",
                      marginLeft: "15px",
                      // marginTop: "0px"
                    },
                    "@media(max-width: 610px)": {
                      width: "170px",
                      marginBottom: "10px",
                      marginRight: "0px",
                      marginLeft: "30px",
                      marginTop: "0px"
                    }
                  }}
                  alt="Wolfram Language Logo"
                />
              </SponsorLink>

              <SponsorLink url="https://mosaicmfg.com/">
                <img
                  src={gogurt}
                  css={{
                    width: "230px",
                    // marginRight: "10px",
                    marginTop: "60px",
                    "@media(max-width: 920px)": {
                      width: "170px",
                      paddingRight: "30px",
                      // marginBottom: "10px",
                    },
                    "@media(max-width: 610px)": {
                      width: "170px",
                      marginBottom: "10px",
                      marginRight: "0px",
                      marginLeft: "30px",
                      marginTop: "0px"
                    }
                  }}
                  alt="Mosaic Logo"
                />
              </SponsorLink>

              <SponsorLink url="http://rpabotpro.com/">
                <img
                  src={gogurt}
                  css={{
                    width: "200px",
                    marginRight: "10px",
                    marginTop: "60px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      paddingRight: "30px",
                      marginBottom: "10px",
                      // marginRight: "0px",
                      marginLeft: "15px",
                      // marginTop: "0px"
                    },
                    "@media(max-width: 610px)": {
                      width: "150px",
                      marginBottom: "10px",
                      marginRight: "0px",
                      marginLeft: "30px",
                      marginTop: "0px"
                    }
                  }}
                  alt="RpaBotPro Logo"
                />
              </SponsorLink>
            
               </div>
              </div>
              */}
            </div>

        {/* Partners */}

        
      </div>
    </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
