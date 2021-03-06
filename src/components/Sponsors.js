import React from "react";

import SponsorLink from "./SponsorLink";
import SponsorPackageButton from "./SponsorPackageButton";
import ContentWrapper from "./ContentWrapper";

import placeholder from "../assets/img/sponsors/placeholder.png";
import sponsorshipPackage from "../assets/img/sponsors/qwacks-sponsorship-package.pdf"
import aLaCarteMenu from "../assets/img/a_la_carte/qwacks-a-la-carte-pg1.pdf"

import cac from "../assets/img/sponsors/cac.png"
import lug from "../assets/img/sponsors/lug.png"
import hotBroth from "../assets/img/sponsors/hotBroth.jpg"
import neauxGoods from "../assets/img/sponsors/neaux-goods.png"
import bounce from "../assets/img/sponsors/bounce.png"

const sponsorButtonCSS = {
  alignItems: "center",
  position: "relative",
  zIndex: "2",
  margin: "40px 0px 20px auto",
  "@media(max-width: 820px)": {
    margin: "30px auto 45px auto",
    padding: "5px 10px 5px 10px"
    
  }
};

const supportButtonCSS = {
  alignItems: "center",
  position: "relative",
  zIndex: "2",
  margin: "40px 25px 20px auto",
  "@media(max-width: 820px)": {
    margin: "30px 15px 45px auto",
    padding: "5px 10px 5px 10px"
    
  }
};

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
          paddingTop: "40px"
        }}
      >
        {/* Sponsors */}

        <div>
          <h1>Sponsors</h1>
          <p
            css={{
              position: "relative",
              zIndex: "9999",
              fontWeight: "bold",
              color: "#000000",
              paddingBottom: "0px",
              paddingTop: "30px",
              ">a": {
                color: "#c81c2e",
                textDecoration: "underline",
                ":hover": { textDecoration: "none" }
              }
            }}
          >
            Interested in sponsoring? Contact us at{" "}
            <a
              data-cy="partners-email-prompt"
              href="mailto:sponsor@qwacks.fun"
              css={{
                zIndex: "9999",
                fontSize: "16px",
                fontWeight: "bold"
              }}
            >
              sponsor@qwacks.fun
            </a>
          </p>
          {/* Giga */}
          <SponsorPackageButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            style={sponsorButtonCSS}
            link={sponsorshipPackage}
            type="rounded"
          >
            Sponsorship Package
          </SponsorPackageButton>
          <div
            css={{
              paddingBottom: "0px",
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
              <SponsorLink url="https://cac.queensu.ca/">
                <img
                  css={{
                    borderRadius: "15pt",
                    marginBottom: "10px",
                    width: "600px",
                    "@media(max-width: 980px)": {
                      width: "500px"
                    },
                    "@media(max-width: 680px)": {
                      width: "400px"
                    },
                    "@media(max-width: 500px)": {
                      width: "300px"
                    }
                  }}
                  src={cac}
                  alt="CAC Logo"
                />
              </SponsorLink>
            </div>

            {/* Mega */}

            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginTop: "60px",
                //marginBottom: "50px",
                "@media(max-width: 610px)": {
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
              <SponsorLink url="https://www.bounceapp.ca/">
                <img
                  src={bounce}
                  css={{
                    width: "400px",
                    //marginLeft: "100px",
                    marginBottom: "125px",
                    "@media(max-width: 1080px)": {
                      width: "325px"
                    },
                    "@media(max-width: 980px)": {
                      width: "250px",
                      marginBottom: "20px",
                      //marginRight: "30px"
                    },
                    "@media(max-width: 740px)": {
                      width: "250px",
                      marginBottom: "20px",
                      //marginLeft: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "200px",
                      marginBottom: "20px",
                      //marginLeft: "0px"
                    }
                  }}
                  alt="Bounce Logo"
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
              {/*
              <SponsorLink url="https://www.listennotes.com/podcasts/hot-broth-hot-broth-yCA1o3BDM4T/">
                <img
                  src={hotBroth}
                  css={{
                    width: "350px",
                    marginRight: "100px",
                    marginTop: "8px",
                    marginBottom: "125px",
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
                  alt="Hot Broth Logo"
                />
              </SponsorLink>
              */}
            </div>
            {/*
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
          <div
            css={{
              position: "relative",
              zIndex: "9999",
              paddingTop: "0px",
              paddingBottom: "0px"
            }}
          >
            <h1 css={{ paddingBottom: "30px" }}>Partners</h1>
            <p
              css={{
                position: "relative",
                zIndex: "9999",
                fontWeight: "bold",
                color: "#000000",
                paddingBottom: "0px",
                ">a": {
                  color: "#c81c2e",
                  textDecoration: "underline",
                  ":hover": { textDecoration: "none" }
                }
              }}
            >
              Interested in partnering? Contact us at{" "}
              <a
                data-cy="partners-email-prompt"
                href="mailto:sponsor@qwacks.fun"
                css={{
                  zIndex: "9999",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
              >
                sponsor@qwacks.fun
              </a>
            </p>
            {/* <ActionButton
            backgroundColor="#f8f8f8"
            foregroundColor="#c81c2e"
            type="rounded"
            link="https://qhacks.nyc3.cdn.digitaloceanspaces.com/documents/QHacksPartnershipPackage.pdf"
          >
            Partnership Package
          </ActionButton> */}
          </div>
          <SponsorPackageButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            style={sponsorButtonCSS}
            link="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif"
            type="rounded"
          >
            Partnership Package Coming Soon
          </SponsorPackageButton>
          {/* School */}
          <div
            css={{
              zIndex: "9999",
              marginBottom: "100px"
            }}
          >
            {/* School Row 1 */}
            {/* <div
            css={{
              zIndex: "9999",
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "25px"
            }}
          >
            <SponsorLink url="https://www.ece.queensu.ca">
              <img
                src={eceLogo}
                css={{
                  zIndex: "9999",
                  width: "200px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="ECE Logo"
              />
            </SponsorLink>
          </div> */}

            {/* School Row 2 */}
            <div
              css={{
                zIndex: "9999",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "40px",
                paddingBottom: "0px",
                "@media(max-width: 820px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              {/* <SponsorLink url="http://www.cs.queensu.ca">
              <img
                src={schoolOfComputingLogo}
                alt="Queen's School of Computing"
                css={{
                  zIndex: "9999",
                  marginTop: "20px",
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
              />
            </SponsorLink>
            <SponsorLink url="https://queensu.ca/innovationcentre">
              <img
                src={qicLogo}
                alt="AMS, ASUS, and EngSoc"
                css={{
                  width: "280px",
                  marginTop: "20px",
                  "@media(max-width: 980px)": {
                    width: "200px"
                  },
                  "@media(max-width: 680px)": {
                    width: "150px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
              />
            </SponsorLink>
          </div>
          School Row 3
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          > */}
              <SponsorLink url="https://www.lughockey.com/">
                <img
                  src={lug}
                  alt="Lug Logo"
                  css={{
                    zIndex: "9999",
                    marginTop: "60px",
                    width: "200px",
                    paddingTop: "60px",
                    "@media(max-width: 980px)": {
                      width: "200px"
                    },
                    "@media(max-width: 680px)": {
                      width: "100px"
                    },
                    "@media(max-width: 460px)": {
                      width: "80px"
                    }
                  }}
                />
              </SponsorLink>
              <SponsorLink url="https://www.neauxgoods.com ">
                <img
                  src={neauxGoods}
                  css={{
                    width: "150px",
                    marginTop: "55px",
                    "@media(max-width: 980px)": {
                      width: "150px"
                    },
                    "@media(max-width: 680px)": {
                      width: "85px"
                    },
                    "@media(max-width: 460px)": {
                      width: "60px"
                    }
                  }}
                  alt="Neaux Goods Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.listennotes.com/podcasts/hot-broth-hot-broth-yCA1o3BDM4T/">
                <img
                  src={hotBroth}
                  css={{
                    width: "160px",
                    marginTop: "85px",
                    "@media(max-width: 980px)": {
                      width: "160px"
                    },
                    "@media(max-width: 680px)": {
                      width: "90px"
                    },
                    "@media(max-width: 460px)": {
                      width: "70px"
                    }
                  }}
                  alt="Hot Broth Logo"
                />
              </SponsorLink>
            </div>

            {/* School Row 4 */}
            {/* <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://dining.queensu.ca">
              <img
                src={sodexoLogo}
                css={{
                  width: "350px",
                  "@media(max-width: 980px)": {
                    width: "290px"
                  },
                  "@media(max-width: 680px)": {
                    width: "230px"
                  },
                  "@media(max-width: 460px)": {
                    width: "210px"
                  }
                }}
                alt="Sodexo and Coca-Cola Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://thepcc.net">
              <img
                src={pccLogo}
                css={{
                  width: "230px",
                  "@media(max-width: 980px)": {
                    width: "190px"
                  },
                  "@media(max-width: 680px)": {
                    width: "130px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
                alt="P&CC Logo"
              />
            </SponsorLink>
          </div> */}

            {/* School Row 5 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
              <img
                src={mmieLogo}
                css={{
                  width: "400px",
                  marginTop: "25px",
                  paddingBottom: "40px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="MMIE Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://innovation-challenge.cityofkingston.ca">
              <img
                src={kingstonLogo}
                css={{
                  width: "180px",
                  "@media(max-width: 980px)": {
                    width: "150px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "100px"
                  }
                }}
                alt="City of Kingston Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.bloomberg.com/canada">
              <img
                src={bloombergLogo}
                css={{
                  width: "200px",
                  marginTop: "30px",
                  "@media(max-width: 980px)": {
                    width: "180px"
                  },
                  "@media(max-width: 680px)": {
                    width: "160px",
                    marginBottom: "10px"
                  },
                  "@media(max-width: 460px)": {
                    width: "130px"
                  }
                }}
                alt="Bloomberg Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://hackp.ac/mlh-stickermule-hackathons">
              <img
                src={stickermuleLogo}
                css={{
                  width: "150px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="Stickermule Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://education.github.com/pack">
              <img
                src={githubLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="GitHub Logo"
              />
            </SponsorLink>
          </div>
          */}

            {/* School Row 6 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr"
            }}
          >
            <SponsorLink url="https://mlh.io">
              <img
                src={mlhLogo}
                css={{
                  width: "150px",
                  paddingBottom: "30px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="MLH Logo"
              />
            </SponsorLink>
          </div>
          */}
          </div>

          {/* Supporters */}
          <div
            css={{
              position: "relative",
              zIndex: "9999",
              paddingTop: "0px",
              paddingBottom: "0px"
            }}
          >
            <h1 css={{ paddingBottom: "30px" }}>Supporters</h1>
            <p
              css={{
                position: "relative",
                zIndex: "9999",
                fontWeight: "bold",
                color: "#000000",
                paddingBottom: "0px",
                paddingRight: "70px",
                paddingLeft: "70px",
                textAlign: "left",
                ">a": {
                  color: "#c81c2e",
                  textDecoration: "underline",
                  ":hover": { textDecoration: "none" }
                }
              }}
            >
              If you support us by donating anything between{" "}
              <b css={{ fontWeight: 500 }}>$7 - $15</b>, we'll support{" "}
              <i>you</i> by putting your name and either a quote, link, or text
              of your choosing! If you donate between{" "}
              <b css={{ fontWeight: 500 }}>$15+</b>, you'll also get a picture
              on the site!
            </p>

            <p
              css={{
                position: "relative",
                zIndex: "9999",
                fontWeight: "bold",
                color: "#000000",
                paddingBottom: "0px",
                paddingRight: "70px",
                paddingLeft: "70px",
                paddingTop: "25px",
                textAlign: "left",
                ">a": {
                  color: "#c81c2e",
                  textDecoration: "underline",
                  ":hover": { textDecoration: "none" }
                }
              }}
            >
              On top of that, we have curated a list of the wildest, wackiest,
              and wonkiest things we could think of, to take place during the
              event. They are called{" "}
              <b css={{ fontWeight: 500 }}>"A La Carte"</b> items. These are
              individual games, challenges, events, that you can buy! For
              varying prices, you may purchase items from the{" "}
              <b css={{ fontWeight: 500 }}>"A La Carte"</b> menu.{" "}
            </p>
            {/* <ActionButton
            backgroundColor="#f8f8f8"
            foregroundColor="#c81c2e"
            type="rounded"
            link="https://qhacks.nyc3.cdn.digitaloceanspaces.com/documents/QHacksPartnershipPackage.pdf"
          >
            Partnership Package
          </ActionButton> */}
          </div>
          <SponsorPackageButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            style={supportButtonCSS}
            link="https://forms.gle/NT6R166u2ZGc4KGh8"
            //link="https://docs.google.com/forms/d/1KYcJRirA7Bm1MTMPlUhu-59kBH50Ca7WpcWO4-rfe_k/edit"
            type="rounded"
          >
            Support Us!
          </SponsorPackageButton>
          <SponsorPackageButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            style={supportButtonCSS}
            link={aLaCarteMenu}
            //link="https://docs.google.com/forms/d/1KYcJRirA7Bm1MTMPlUhu-59kBH50Ca7WpcWO4-rfe_k/edit"
            type="rounded"
          >
            A La Carte
          </SponsorPackageButton>
          {/* School */}
          <div
            css={{
              zIndex: "9999",
              marginBottom: "100px"
            }}
          >
            {/* School Row 1 */}
            {/* <div
            css={{
              zIndex: "9999",
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "25px"
            }}
          >
            <SponsorLink url="https://www.ece.queensu.ca">
              <img
                src={eceLogo}
                css={{
                  zIndex: "9999",
                  width: "200px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="ECE Logo"
              />
            </SponsorLink>
          </div> */}

            {/* School Row 2 */}
            <div
              css={{
                zIndex: "9999",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 820px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              {/* <SponsorLink url="http://www.cs.queensu.ca">
              <img
                src={schoolOfComputingLogo}
                alt="Queen's School of Computing"
                css={{
                  zIndex: "9999",
                  marginTop: "20px",
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
              />
            </SponsorLink>
            <SponsorLink url="https://queensu.ca/innovationcentre">
              <img
                src={qicLogo}
                alt="AMS, ASUS, and EngSoc"
                css={{
                  width: "280px",
                  marginTop: "20px",
                  "@media(max-width: 980px)": {
                    width: "200px"
                  },
                  "@media(max-width: 680px)": {
                    width: "150px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
              />
            </SponsorLink>
          </div>
          School Row 3
          
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          > 
          */}
              <div
                css={{
                  paddingBottom: "80px",
                  paddingTop: "30px"
                }}
              >
                <h1
                  css={{
                    paddingBottom: "10px",
                    fontSize: "35px"
                  }}
                >
                  Cameron Raymond
                </h1>
                <a
                  //href="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif"
                  target="_blank"
                  css={{
                    fontSize: "20px"
                  }}
                >
                  {" "}
                  look at me now, dad

                </a>
              </div>
              
            </div>

            {/* School Row 4 */}
            {/* <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://dining.queensu.ca">
              <img
                src={sodexoLogo}
                css={{
                  width: "350px",
                  "@media(max-width: 980px)": {
                    width: "290px"
                  },
                  "@media(max-width: 680px)": {
                    width: "230px"
                  },
                  "@media(max-width: 460px)": {
                    width: "210px"
                  }
                }}
                alt="Sodexo and Coca-Cola Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://thepcc.net">
              <img
                src={pccLogo}
                css={{
                  width: "230px",
                  "@media(max-width: 980px)": {
                    width: "190px"
                  },
                  "@media(max-width: 680px)": {
                    width: "130px"
                  },
                  "@media(max-width: 820px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
                alt="P&CC Logo"
              />
            </SponsorLink>
          </div> */}

            {/* School Row 5 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "40px",
              "@media(max-width: 820px)": {
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
              <img
                src={mmieLogo}
                css={{
                  width: "400px",
                  marginTop: "25px",
                  paddingBottom: "40px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="MMIE Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://innovation-challenge.cityofkingston.ca">
              <img
                src={kingstonLogo}
                css={{
                  width: "180px",
                  "@media(max-width: 980px)": {
                    width: "150px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "100px"
                  }
                }}
                alt="City of Kingston Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.bloomberg.com/canada">
              <img
                src={bloombergLogo}
                css={{
                  width: "200px",
                  marginTop: "30px",
                  "@media(max-width: 980px)": {
                    width: "180px"
                  },
                  "@media(max-width: 680px)": {
                    width: "160px",
                    marginBottom: "10px"
                  },
                  "@media(max-width: 460px)": {
                    width: "130px"
                  }
                }}
                alt="Bloomberg Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://hackp.ac/mlh-stickermule-hackathons">
              <img
                src={stickermuleLogo}
                css={{
                  width: "150px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="Stickermule Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://education.github.com/pack">
              <img
                src={githubLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="GitHub Logo"
              />
            </SponsorLink>
          </div>
          */}

            {/* School Row 6 */}
            {/*
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr"
            }}
          >
            <SponsorLink url="https://mlh.io">
              <img
                src={mlhLogo}
                css={{
                  width: "150px",
                  paddingBottom: "30px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="MLH Logo"
              />
            </SponsorLink>
          </div>
          */}
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
