import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";
import ActionButton from "./ActionButton";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "220px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#00205B",
      backgroundSize: "cover"
    }}
  >
    <ContentWrapper>
      <p
        data-cy="mailing-list-cta"
        css={{
          fontWeight: 700,
          marginTop: "20px",
          marginBottom: "28px",
          fontSize: "22px",
          "@media screen and (max-width: 860px)": {
            fontSize: "16px"
          },
          lineHeight: "28px",
          textAlign: "center"
        }}
      >
        Sign up for our mailing list to receive important QHacks announcements!
      </p>
      <input
      placeholder="This field is non-functional"
      type="email"
      css={{
        display: "block",
        margin: "0 auto",
        textAlign: "center",
        flexGrow: 2,
        padding: "0 16px",
        height: "48px",
        width: "325px",
        lineHeight: "48px",
        borderRadius: "4px",
        border: "none",
        fontSize: "16px"
        }}
        />
      {/* <SignUpForm
        dataCyInput="mailing-list-input"
        dataCyButton="mailing-list-button"
        hoverBackgroundColor="#00205b"
        center={true}
      /> */}
    </ContentWrapper>
  </section>
);

export default MailingListSignup;
