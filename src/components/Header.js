import React, { Component } from "react";

import ContentWrapper from "./ContentWrapper";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

let prevScrollY = 0;

const menuItems = [
  "about",
  "testimonials",
  "schedule",
  "speakers",
  "sponsors",
  "faq"
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: true,
      isMobileMenuVisible: false,
      isLogoVisible: false,
      isAtTheTop: true,
      standaloneVersion: props.standaloneVersion || false
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (!this.props.standaloneVersion) {
        const isAtTheTop = window.scrollY === 0;
        const isLogoVisible = window.scrollY > 200;
        const isHeaderVisible =
          window.scrollY < prevScrollY || window.scrollY < 100;
        if (
          this.state.isHeaderVisible !== isHeaderVisible ||
          this.state.isLogoVisible !== isLogoVisible ||
          this.state.isAtTheTop !== isAtTheTop
        ) {
          this.setState({ isHeaderVisible, isLogoVisible, isAtTheTop });
        }
        prevScrollY = window.scrollY;
      }
    };
  }

  disableScrolling = (e) => e.preventDefault();

  enableScrolling = () => true;

  onMobileMenuClicked = () => {
    this.setState({ isMobileMenuVisible: !this.state.isMobileMenuVisible });
    document.body.style.overflow = this.state.isMobileMenuVisible
      ? ""
      : "hidden";
  };

  render() {
    // Throws an error during build command
    try {
      document.ontouchmove = this.state.isMobileMenuVisible
        ? this.disableScrolling
        : this.enableScrolling;
    } catch (e) {}

    return (
      <div>
      
        <div
data-cy="mlh-banner"
css={{
  width: "100%",
  position: "fixed",
  top: this.state.isHeaderVisible ? "0px" : "-100px",
  transition: "0.5s",
  backgroundColor: "#ffffff",
  opacity: this.state.isMobileMenuVisible
    ? "1.0"
    : (this.state.isHeaderVisible && "0.95") || "0",
  zIndex: "5",
  "@media(min-width:860px)": {
    backgroundColor: this.props.standaloneVersion
      ? "#ffffff"
      : this.state.isAtTheTop
        ? "#ffffff"
        : "#ffffff",
  }
}}
        >
          <ContentWrapper>
            <div
              css={{
                "@media(max-width:100%)": {
                  display: "grid",
                  zIndex: "99999",
                  gridTemplateColumns: "auto auto",
                 
                }
              }}
            >
              <Menu
                menuItems={this.props.menuItems || menuItems}
                imgCss={this.state.isLogoVisible}
                standaloneVersion={this.props.standaloneVersion}
                      />
              <MobileMenu
                menuItems={this.props.menuItems || menuItems}
                isMenuVisible={this.state.isMobileMenuVisible}
                toggleMenu={this.onMobileMenuClicked}
              />
            </div>
          </ContentWrapper>
        </div>
      </div>
    );
  }
}

export default Header;
