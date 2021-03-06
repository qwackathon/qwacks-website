import React from "react";
import ContentWrapper from "./ContentWrapper";

const linkCss = {
  position: "relative",
  zIndex: "4",
  color: "#26BCE5",
  fontWeight: 450
};

const questionsAndAnswers = [
  {
    question: "What is a wackathon?",
    answer:
      "A Wackathon is similar to a hackathon but is dedicated to and celebrates bad ideas. Students will have the opportunity to create something using software, hardware, as well as the best business idea. At the current time, we can’t guarantee any hardware at the event but we encourage wackers to bring their own."
  },
  {
    question: "Who is invited?",
    answer:
      "Anyone of any skill level is encouraged to apply to QWacks! All you need is a bad idea in tech/data/design or whatever, and a willingness to learn! We welcome applicants from all fields of study."
  },
  {
    question: "Where is it?",
    answer:
      "QWacks will be taking place at Queen's University in the city of Kingston, Ontario. The event will be held in Mackintosh-Corry Room D201."
  },
  {
    question: "How much does it cost to attend?",
    answer: "The event will cost anywhere from $5 - $10. Now wait a minute, you're probably asking why you'd pay for a hackathon? Well it's simple! Not only does your ticket buy you admission to the event, it also gets you 4 free meals (two dinners, breakfast, lunch), as well as free QWacks swag and goodies. Also, any extra funds leftover after expenses will be donated to charity."
  },
  {
    question: "What if I don’t have a team?",
    answer:
      "We will have a team-formation channel on the Slack, so you can find goons that you think you’d work well with!"
  },
  {
    question: "Can I work on a past project?",
    answer: "Please no. If you’ve already created something like the examples we’ve given then shame on you - is that how you really use your time? Then again, I don't see any cops around..."
  },
  {
    question: "Is there a Code of Conduct?",
    answer: (
      <span>
        Absolutely. All projects and behavior must follow{" "}
        <a
          css={linkCss}
          href="https://www.queensu.ca/universityrelations/equity"
          rel="external noopener"
          target="_blank"
        >
        Queen’s Guiding Philosophy on Equity, Diversity and Inclusivity.
        </a>
       The goal of QWacks is to provide a positive and inclusive experience for everyone involved.
      </span>
    )
  },
  {
    question: "What if I'm not from Kingston?",
    answer:
      "Find a way to Kingston. You can take a choo choo or a vroom vroom or a splish splash or a flip flap."
  },
  {
    question: "How do I apply?",
    answer:
      "Click the “Apply” button at the top of the page lmao."
  }
];



const FAQs = () => (
  <section id="faq">
    <ContentWrapper>
      <div
        css={{
          padding: "0px 0 114px 0",
          "@media(max-width: 780px)": {
            padding: "0 0 120px 0",
            position: "relative",
            zIndex: "2"
          }       
        }}
      >
        <h1 css ={{color:"white"}}>Frequently Asked Questions</h1>
        <div
          css={{
            paddingTop: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media(max-width: 1190px)": {
              display: "block"
            },
            color: "#ffffff"
          }}
        >
          {questionsAndAnswers.map(({ question, answer }) => (
            <div
              key={question}
              css={{
                zIndex: 3,
                padding: "0px 64px 40px 0px",
                "@media(max-width: 780px)": {
                  paddingRight: "24px",
                  
                }
              }}
            >
              <h2
                css={{
                  paddingBottom: "10px",
                  fontWeight: "500",
                  color:"white"
                }}
              >
                {question}
              </h2>
              <p
                css={{ fontSize: "14px", color: "#fffffff", lineHeight: "20px" }}
              >
                {answer}
              </p>
            </div>
          ))}
          
          <div css={{ paddingTop: "12px" }}>
            <h2 css={{ paddingBottom: "10px", fontWeight: "500", color:"white" }}>
              Have additional questions?
            </h2>
            <p css={{ fontSize: "14px", color: "#fffffff", lineHeight: "20px" }}>
              Feel free to reach out to us at{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="mailto:coop@qwacks.fun"
              >
                coop@qwacks.fun
              </a>{" "}
              {/*
              or on{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="https://thumbs.gfycat.com/AbsoluteRaggedCopperbutterfly-size_restricted.gif"
              >
                Facebook
              </a>
            */}
            </p>
          </div>

        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
