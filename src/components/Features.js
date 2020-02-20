import React from "react";
import FeaturesIcons from "./FeaturesIcons.js";

import cubes2png from "../assets/img/icons/monkey-toaster-float-2.png";
import judges from "../assets/img/icons/judgesIcon.svg";
import cubes2webp from "../assets/img/icons/monkey-toaster-float-2.webp";
import mentors from "../assets/img/icons/mentorsIcon.svg";
import hackers from "../assets/img/icons/hackersIcon.svg";
import schools from "../assets/img/icons/schoolsIcon.svg";
import challenges from "../assets/img/icons/challengesIcon.svg";
import applications from "../assets/img/icons/applicationsIcon.svg";

import workingHardjpg from "../assets/img/selling_points/working-hard.jpg";
import workingHardwebp from "../assets/img/selling_points/working-hard.webp";
import goodJobjpg from "../assets/img/selling_points/good-job.jpg";
import goodJobwebp from "../assets/img/selling_points/good-job.webp";


import ContentWrapper from "./ContentWrapper";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px"
};

const applyButtonCSS = {
  margin: "25px 0 100px 0",
  "@media(max-width: 820px)": {
    margin: "30px 0 45px auto"
  }
};

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px",
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px"
};

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%"
};

const Features = () => (
  <div css={{ position: "relative" }}>
    <ContentWrapper>
      <div
        css={{
          width: "100%",
          background: "#ffffff",
          borderRadius: "10px",
          padding: "50px 0 20px 0",
          margin: "auto",
          "@media(max-width: 840px)": {
            padding: "80px 0 30px 0"
          }
        }}
      >
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap"
          }}
        >
          <div css={flexChildStyle}>
            <h1>The Wacker the Better</h1>
            <p css={blurbStyle}>
              Too often startups and tech companies try to do good for humanity. It's the useless products that are overlooked! Juicero, Goop, SnapChat Spectacles! Silicon Valley is flooded with bad ideas with room for more. QWacks is a prime opportunity to build something from the ground up, that has no use, no purpose, but is delightfully ridiculous.            </p>
            <FeaturesIcons
              list={[
                {
                  icon: applications,
                  number: 0,
                  text: "Applications so far"
                },
                {
                  icon: schools,
                  number: 1,
                  text: "School for now"
                },
                {
                  icon: hackers,
                  number: 0,
                  text: "Wackers as of right now"
                }
              ]}
            />
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={workingHardwebp} type="image/webp" />
              <source srcSet={workingHardjpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={workingHardjpg}
                alt="Wackers in a workshop"
              />
            </picture>
          </div>
        </div>
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap-reverse",
            marginBottom: 0
          }}
        >
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={goodJobwebp} type="image/webp" />
              <source srcSet={goodJobjpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={goodJobjpg}
                alt="Good job"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>No Ragrets</h1>
            <p css={blurbStyle}>
              We currently have no speakers, no mentors, no sponsors, but what we do have is heart. We are passionate about creating things that should never be created. We hope to inspire young and old wackers alike, to participate in this truly regrettable experience.
            </p>
            <FeaturesIcons
              list={[
                {
                  icon: mentors,
                  number: 0,
                  text: "Mentors at the moment"
                },
                {
                  icon: judges,
                  number: 3,
                  text: "Judges (actually)"
                },
                {
                  icon: challenges,
                  number: 0,
                  text: "Challenges for now"
                }
              ]}
            />
          </div>
        </div>
        <picture
          css={{
            width: "400px",
            height: "246px",
            position: "absolute",
            bottom: "-140px",
            left: "-60px",
            zIndex: 3,
            "@media(max-width: 1200px)": {
              width: "358px",
              height: "220px",
              bottom: "-120px",
              left: "-40px"
            },
            "@media(max-width: 840px)": {
              display: "none"
            }
          }}
        >
          <source srcSet={cubes2webp} type="image/webp" />
          <source srcSet={cubes2png} type="image/png" />
          <img
            css={{
              width: "400px",
              height: "246px",
              "@media(max-width: 1200px)": {
                width: "358px",
                height: "220px"
              }
            }}
            src={cubes2png}
            alt="Floating cubes"
          />
        </picture>
      </div>
    </ContentWrapper>
  </div>
);

export default Features;
