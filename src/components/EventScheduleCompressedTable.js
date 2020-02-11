import React from "react";
import { css } from "glamor";
import moment from "moment-timezone";

const EventScheduleCompressedTable = (props) => (
  <table
    {...css({
      borderRadius: "4px",
      overflow: "hidden",
      border: "1px solid #e4e4e4",
      borderSpacing: "0",
      margin: "16px 0",
      width: "100%",
      color: "black",
      fontSize: "15px",
      backgroundColor: "#f6f6f6",
      "> tbody tr td": {
        padding: "3px 16px",
        textAlign: "left",
        fontWeight: 500
      },
      "> tbody tr td:last-child": {
        paddingLeft: "0px"
      },
      "> tbody tr td .eventStart": {
        color: "#00205B",
        marginBottom: "6px"
      },
      "> tbody tr td .eventEnd": {
        color: "#00205b"
      },
      "> tbody:not(:last-child) tr:nth-child(2) td, > tbody:not(:last-child) tr:nth-child(1) td:first-child": {
        borderBottom: "1px solid #e4e4e4"
      },
      "> tbody tr:nth-child(1) td:last-child": {
        paddingTop: "16px"
      },
      "> tbody tr:nth-child(2) td": {
        paddingBottom: "16px"
      }
    })}
  >
    {props.data.map((item) => (
      <tbody key={`${item.eventName} ${item.startDate}`}>
        <tr>
          <td rowSpan={2}>
            <div className="eventStart">
              {moment(item.startDate).format("h:mm\xa0A")}
            </div>
            <div className="eventEnd">
              {item.endDate ?
                moment(item.endDate).format("h:mm\xa0A")
                : ""}
            </div>
          </td>
          <td className="eventName">
            <strong>{item.eventName}</strong>
            <br></br>
            <p css={{fontSize: "14px", paddingTop: "6px"}}>{item.subtitle}</p>
          </td>
        </tr>
        <tr>
          <td className="eventLocation">{item.location}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

export default EventScheduleCompressedTable;
