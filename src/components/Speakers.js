import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import cameron from "../assets/img/speakers/CameronGorrie.jpg";
import nicole from "../assets/img/mentors/headshots/NicoleFitzgerald.jpg";
import david from "../assets/img/speakers/DavidHariri.jpg";


import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Cameron Gorrie",
    title: "Senior Engineering Manager",
    company: "Top Hat",
    description: " ",
    image: cameron,
    companyUrl: "https://tophat.com/"
  },
  {
    name: "Nicole Fitzgerald",
    title: "Machine Learning Engineer",
    company: "Microsoft",
    description: " ",
    image: nicole,
    companyUrl: "https://careers.microsoft.com/us/en"

  }

    //He got the flu :(
    // {
    // name: "David Hariri",
    // title: "Co-Founder, Head of Product",
    // company: "Ada",
    // description: " ",
    // image: david
    // }
];

const Speakers = () => (
  <section
    css={{
    //   backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="speakers"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          color: "#ffffff",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingBottom: "24px"
          }
        }}
      >
        Speakers
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
          maxWidth: speakers.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: speakers
            .map(() => "1fr ")
            .reduce((a, b) => a + b),
          "@media(max-width: 1120px)": {
            display: "none"
          }
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard {...speaker} key={speaker.name} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 1120px)": { display: "none" }
        }}
      >
        <SpeakerSlider speakers={speakers} />
      </div>
      {/* <picture
        css={{
          zIndex: "1",
          width: "235px",
          height: "289px",
          position: "absolute",
          bottom: "-250px",
          right: "62px",
          display: "block",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      >
        <source srcSet={cubes3webp} type="image/webp" />
        <source srcSet={cubes3png} type="image/png" />
        <img
          css={{
            "@media(max-width: 1000px)": {
              display: "none"
            }
          }}
          src={cubes3png}
          alt="Floating cubes"
        />
      </picture> */}
      <Mentors />
    </ContentWrapper>
  </section>
);

export default Speakers;
