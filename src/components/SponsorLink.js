import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default (props) => (
  <OutboundLink
    href={props.url}
    target="_blank"
    rel="external noopener"
    data-cy="sponsor-link"
  >
    {props.children}
  </OutboundLink>
);
