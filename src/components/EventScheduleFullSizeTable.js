import React from "react";
import { css } from "glamor";
import moment from "moment-timezone";

const EventScheduleFullSizeTable = (props) => (
  <table
    {...css({
      borderRadius: "16px",
      fontWeight: "500",
      overflow: "hidden",
      // borderCollapse: "collapse",
      borderSpacing: 0,
      margin: "14px 0",
      width: "100%",
      "> tbody tr td, > tbody tr th": {
        padding: "12px 32px",
        textAlign: "left"
      },
      "> tbody tr:nth-child(2) td": {
        paddingTop: "24px"
      },
      "> tbody tr:not(:first-child) td:first-child": {
        borderLeft: "1px solid #e4e4e4"
      },
      "> tbody tr:not(:first-child) td:last-child": {
        borderRight: "1px solid #e4e4e4"
      },
      "> tbody tr:last-child td": {
        borderBottom: "1px solid #e4e4e4",
        paddingBottom: "24px !important"
      },
      "> tbody tr:last-child td:first-child": {
        borderBottomLeftRadius: "16px"
      },
      "> tbody tr:last-child td:last-child": {
        borderBottomRightRadius: "16px"
      }
    })}
  >
    <tbody>
      <tr
        css={{
          backgroundColor: "#00205B",
          color: "white"
        }}
      >
        <th>Time</th>
        <th>Duration</th>
        <th>Event</th>
        <th>Location</th>
      </tr>
      {props.data.map((item) => (
        <tr
          css={{ backgroundColor: "#F6F6F6" }}
          key={`${item.eventName} ${item.startDate}`}
        >
          <td>{moment(item.startDate).format("h:mm\xa0A")}</td>
          <td>{item.duration}</td>
          <td>
            <div>
              <b>{item.eventName}</b>
            </div>
            <div css={{
              color: "#4d4d4d",
              marginTop: "5px",
              // fontStyle: "italic",
              fontSize: "13px"
            }}>
              {item.subtitle}
            </div>
          </td>
          <td>{item.location}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EventScheduleFullSizeTable;
