import React from "react";
import ContentWrapper from "./ContentWrapper";

const linkCss = {
  position: "relative",
  zIndex: "9999",
  textDecoration: "underline",
  color: "#fcbdff",
  fontWeight: 500
};

const questionsAndAnswers = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a sprint-like event where people from a variety of backgrounds come together to collaborate on software and hardware projects."
  },
  {
    question: "Who is invited?",
    answer:
      "Any college or university student of any skill level! All you need is a passion for tech/data/design and a willingness to learn! We welcome applicants from all fields of study."
  },
  {
    question: "Where is it?",
    answer:
      "QHacks will be taking place at Queen's University in the city of Kingston, Ontario. The event will be held in Mitchell Hall. Don’t worry about getting lost! We will have maps for you and volunteers all over campus to guide the way."
  },
  {
    question: "How much does it cost to attend?",
    answer: "Absolutely nothing! Not one penny. (Remember those?)"
  },
  {
    question: "What if I don’t have a team?",
    answer:
      "Not to worry! We'll have a team-formation session prior to the hackathon for you to find people you’d like to work with. There will be plenty of other people in the same situation, and we’ll have you up and running in no time!"
  },
  {
    question: "Can I work on a past project?",
    answer: "No. All projects must be started from scratch at the event."
  },
  {
    question: "Is there a Code of Conduct?",
    answer: (
      <span>
        Yes! Hackers are expected to adhere to the{" "}
        <a
          css={linkCss}
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          rel="external noopener"
          target="_blank"
        >
          Major League Hacking Code of Conduct.
        </a>
      </span>
    )
  },
  {
    question: "What if I'm not from Kingston?",
    answer:
      "Encountering a 307 status? We'll be sending buses to Kingston from Ottawa and Toronto. If you can make it to either of those cities, we'll reimburse for your cost to get there (GO Buses preferred)."
  },
  {
    question: "How do I apply?",
    answer:
      "Applications are out now! Click the button at the top of the page to apply. You don't need to be an expert hacker or to have been to a hackathon before - we just want to see what makes you creative and unique!"
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
                href="mailto:hello@qhacks.io"
              >
                hello@qhacks.io
              </a>{" "}
              or on{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="https://fb.com/qhacks"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
