import React, { Component } from "react";
import ActionButton from "./ActionButton";
import { graphql } from "react-apollo";
import * as Sentry from "@sentry/browser";
import gql from "graphql-tag";

import circleCheckWhite from "../assets/img/icons/circleSuccess-white.svg";
import circleTimesWhite from "../assets/img/icons/circleError-white.svg";
import circleCheck from "../assets/img/icons/circleSuccess-green.svg";
import circleTimes from "../assets/img/icons/circleError-red.svg";
import spinnerWhite from "../assets/img/icons/spinner-white.svg";
import spinner from "../assets/img/icons/spinner-black.svg";

const CREATE_MAILING_LIST_SUBSCRIPTION_MUTATION = gql`
  mutation CreateMailingListSubscription(
    $eventSlug: String!
    $mailingListSlug: String!
    $input: MailingListSubscriberInput!
  ) {
    mailingListSubscriberCreate(
      eventSlug: $eventSlug
      mailingListSlug: $mailingListSlug
      input: $input
    ) {
      subscriber {
        email
      }
    }
  }
`;

class SignUpForm extends Component {
  state = {
    status: null,
    message: null,
    emailAddress: "",
    boldMessage: ""
  };

  setStatusFailure = (errorMsg) => {
    this.setState({
      status: "failure",
      boldMessage: errorMsg,
      message: ""
    });
    setTimeout(() => this.resetStatus(), 3500);
  };

  setStatusSuccess = (email) => {
    this.setState({
      status: "success",
      boldMessage: email,
      message: "has been added to our mailing list."
    });
    setTimeout(() => this.resetStatus(), 3500);
  };

  setStatusLoading = () => {
    this.setState({ status: "loading", message: "", boldMessage: "" });
  };

  resetStatus = () => {
    this.setState({ status: null, message: "", boldMessage: "" });
  };

  signUp() {
    const email = this.state.emailAddress;

    this.setStatusLoading();

    this.props
      .mutate({
        variables: {
          mailingListSlug: "announcements-newsletter",
          eventSlug: "qhacks-2019",
          input: {
            email
          }
        }
      })
      .then((res) => {
        try {
          return this.setStatusSuccess(
            res.data.mailingListSubscriberCreate.subscriber.email
          );
        } catch (err) {
          Sentry.captureException(err);
          return this.setStatusFailure(
            "Something went wrong - please try again later."
          );
        }
      })
      .catch((err) => {
        Sentry.captureException(err);
        if (
          err.graphQLErrors &&
          err.graphQLErrors[0] &&
          err.graphQLErrors[0].extensions &&
          err.graphQLErrors[0].extensions.code === "EMAIL_ALREADY_SUBSCRIBED"
        ) {
          return this.setStatusFailure(`${email} has already been signed up!`);
        }

        return this.setStatusFailure(
          "Something went wrong - please try again later."
        );
      });
  }

  render() {
    let buttonContent = "";
    const whiteIcons =
      this.props.foregroundColor &&
      ["#fff", "#ffffff", "white"].includes(
        this.props.foregroundColor.toLowerCase()
      );
    switch (this.state.status) {
      case "loading": {
        buttonContent = (
          <img
            src={whiteIcons ? spinnerWhite : spinner}
            css={{
              animation: "spin 2s infinite linear"
            }}
            alt=""
          />
        );
        break;
      }
      case "success": {
        buttonContent = (
          <img src={whiteIcons ? circleCheckWhite : circleCheck} alt="" />
        );
        break;
      }
      case "failure": {
        buttonContent = (
          <img src={whiteIcons ? circleTimesWhite : circleTimes} alt="" />
        );
        break;
      }
      default: {
        buttonContent = "Sign Up";
        break;
      }
    }

    return (
      <div
        css={{
          maxWidth: "530px",
          margin: this.props.center ? "0 auto" : "12px 0 0 8px",
          width: "100%"
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <input
            placeholder="Enter your email address"
            type="email"
            css={{
              flexGrow: 2,
              padding: "0 16px",
              height: "48px",
              lineHeight: "48px",
              borderRadius: "4px",
              border: "none",
              fontSize: this.props.fontSize || "16px",
              margin: "4px"
            }}
            data-cy={this.props.dataCyInput || "signup-input"}
            value={this.state.emailAddress}
            aria-label="Your email address"
            onChange={(e) => this.setState({ emailAddress: e.target.value })}
          />
          <ActionButton
            backgroundColor={this.props.backgroundColor || "white"}
            foregroundColor={this.props.foregroundColor || "black"}
            hoverBackgroundColor={this.props.hoverBackgroundColor} // can be null
            type="rect"
            onClick={() => this.signUp()}
            width="130px"
            css={{ margin: "4px" }}
            disabled={!!this.state.status}
            data-cy={this.props.dataCyButton || "signup-button"}
          >
            {buttonContent}
          </ActionButton>
        </div>
        <p
          css={{
            marginTop: "8px",
            height: "22px",
            fontWeight: "500",
            lineHeight: "22px"
          }}
        >
          {this.state.boldMessage ? (
            <strong>
              {this.state.boldMessage}
              &nbsp;
            </strong>
          ) : (
            ""
          )}
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default graphql(CREATE_MAILING_LIST_SUBSCRIPTION_MUTATION)(SignUpForm);