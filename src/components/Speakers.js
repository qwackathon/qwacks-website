import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import kermit from "../assets/img/headshots/kermit.jpg";

import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Daniel Molyneaux",
    title: "Chief Embezzlement Officer",
    company: "dan@qwacks.fun",
    description: " ",
    image: "https://cac.queensu.ca/wp-content/uploads/2019/05/Daniel.jpg",
    companyUrl: "mailto:dan@qwacks.fun"
  },
  {
    name: "Joshua Wade",
    title: "Chief Propaganda Officer",
    company: "josh@qwacks.fun",
    description: " ",
    image: "https://cac.queensu.ca/wp-content/uploads/2019/05/Josh.jpg",
    companyUrl: "mailto:josh@qwacks.fun"

  },
  {
    name: "Spencer Kelly",
    title: "Chief Dough Getter",
    company: "spence@qwacks.fun",
    description: " ",
    image: "https://cac.queensu.ca/wp-content/uploads/2019/05/Spencer.jpg",
    companyUrl: "mailto:spence@qwacks.fun"

  },
  {
    name: "Cooper Leong",
    title: "Chief Hackerman",
    company: "coop@qwacks.fun",
    description: " ",
    image: "https://cac.queensu.ca/wp-content/uploads/2019/05/Cooper.jpg",
    companyUrl: "mailto:coop@qwacks.fun"

  },
  {
    name: "Evan Arsenault",
    title: "Chief Collision Avoidance",
    company: "evan@qwacks.fun",
    description: " ",
    image: "https://cac.queensu.ca/wp-content/uploads/2019/05/Evan.jpg",
    companyUrl: "mailto:evan@qwacks.fun"

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
    id="team"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingTop: "50px",
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
        The goons who thought this would be a good idea
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
          maxWidth: speakers.length * 500,
          marginLeft: "-17%",
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
