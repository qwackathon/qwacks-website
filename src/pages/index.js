import React from "react";
import fetch from "unfetch";
import Helmet from "react-helmet";
import Particles from "react-particles-js";


import "./index.css";
import Landing from "../components/Landing";
import OpeningSummary from "../components/OpeningSummary";
import SellingPoints from "../components/SellingPoints";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer"
import favicon from "../assets/img/icons/favicon.ico";
import sharingImage from "../assets/img/logo/sharingImage2020.png";
import MailingListSignup from "../components/MailingListSignup";
import Features from "../components/Features";
import EventSchedule from "../components/EventSchedule";

const parameters = {
  "particles": {
      "number": {
          "value": 100,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": false,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.1
      },
      "size": {
          "value": 2
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 0.05,
              "opacity_min": 0.10
          }
      }
  },
}


export default () => {
 
  return (
   
      <div css={{ 
        //backgroundImage: "repeating-linear-gradient(#855988, #070b34 20%, #855988, #070b34);",
        backgroundImage: "repeating-linear-gradient(#A059A4, #26BCE5 20%, #22CC6C, #A059A4);",
        backgroundSize: "cover",
        maxWidth: "100%",
        overflowY: "hidden",
        overflowX: "hidden" }}>
        <Helmet
          title="QWacks"
          meta={[
            {
              name: "description",
              content:
                "QHacks is Queen’s University’s annual hackathon, happening January 31st - February 2nd, 2020."
            },
            {
              name: "keywords",
              content:
                "Hackathon, Queen's University, Kingston, QHacks, Queensu"
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:url",
              content: "https://qhacks.io/"
            },
            {
              property: "og:title",
              content: "QWacks"
            },
            {
              property: "og:image",
              content: sharingImage
            },
            {
              property: "og:description",
              content:
                "QHacks is back for round five! We're bringing in students from all over North America to come together for a wild 36 hours - designing, developing, demoing, cup-stacking, and foosball-playing at our home base at Queen's University. Whether you're a first timer or a seasoned veteran, QHacks definitely has something to satisfy your interests. This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study are encouraged to bring their innovative ideas for a weekend of creative problem solving! The only prerequisites for this weekend are a love for tech and drive to learn."
            },
            {
              property: "og:site_name",
              content: "QWacks"
            },
            {
              property: "og:locale",
              content: "en_US"
            }
          ]}
          link={[
            {
              rel: "shortcut icon",
              href: `${favicon}`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Landing />
          {/* <MailingListSignup /> */}
          <OpeningSummary />
          <Features />
          <SellingPoints />
          <EventSchedule />
          {/*<Speakers />*/}
          <Sponsors />
          <FAQs />
          <Footer />
          <Particles params={parameters} style={{ position: "fixed", zIndex: 0, left: 0, top: 0, minWidth: '100vw', minHeight: '100vh'}}/>
       </div>
      </div>
      
  );
};



