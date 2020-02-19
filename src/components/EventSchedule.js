import React, { Component } from "react";
import MediaQuery from "react-responsive";
import moment from "moment-timezone";
import { css } from "glamor";

import EventScheduleCompressedTable from "./EventScheduleCompressedTable";
import EventScheduleFullSizeTable from "./EventScheduleFullSizeTable";
import ContentWrapper from "./ContentWrapper";
import DaySwitcher from "./DaySwitcher";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2020-03-20T17:00:00",
    endDate: "2020-03-20T18:00:00",
    eventName: "Registration",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-20T17:00:00",
    endDate: "2020-03-20T18:00:00",
    eventName: "Dinner",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-20T18:00:00",
    endDate: "2020-03-20T18:30:00",
    eventName: "Opening ceremonies",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-20T18:30:00",
    endDate: "",
    eventName: "Wacking begins!",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T08:00:00",
    endDate: "2020-03-21T09:00:00",
    eventName: "Breakfast",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T13:00:00",
    endDate: "2020-03-21T14:00:00",
    eventName: "Lunch",
    subtitle: " ",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T16:59:00",
    endDate: "",
    eventName: "Wacking closes",
    subtitle: "",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T17:00:00",
    endDate: "2020-03-21T18:00:00",
    eventName: "Judging",
    subtitle: "",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T17:30:00",
    endDate: "2020-03-21T18:30:00",
    eventName: "Dinner",
    subtitle: "",
    location: "Mackintosh-Corry D201"
    },
    {
    startDate: "2020-03-21T18:30:00",
    endDate: "2020-03-21T19:00:00",
    eventName: "Closing ceremonies",
    subtitle: "",
    location: "Mackintosh-Corry D201"
    }
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
}

eventDays.sort((a, b) => {
  return (
    moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
  );
});

class EventSchedule extends Component {
  state = {
    selectedDay: eventDays[0]
  };

  addDurations(events) {
    return events.map((item) => {
      if (!item.endDate) {
        return item;
      }
      let duration = moment(item.endDate).diff(item.startDate, "minutes", true);
      if (duration > 59) {
        duration = Math.round((duration / 60) * 100) / 100;
        item.duration = `${duration} hr`;
      } else {
        item.duration = `${duration} min`;
      }
      return duration !== 1 ? { ...item, duration: `${item.duration}s` } : item;
    });
  }

  changeDay(selectedDay) {
    this.setState({ selectedDay });
  }

  render() {
    const eventsOnSelectedDay = schedule.filter(
      (item) =>
        (moment(item.startDate).format("YYYY-MM-DD") ===
          this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) > 5) ||
        (moment(item.startDate)
          .subtract("days", 1)
          .format("YYYY-MM-DD") === this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) <= 5)
    );

    const data = this.addDurations(eventsOnSelectedDay);

    return (
      <ContentWrapper>
        <section
          id="schedule"
          css={{
            padding: "120px 0 50px 0",
            margin: "0 auto",
            overflow: "hidden"
          }}
        >
          <h1
            css={{
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              color: "#FFFFFF"
            }}
          >
            Event Schedule<sup><a css={{color: "#bababa"}} href="/#*">*</a></sup>
          </h1>
          <DaySwitcher
            days={eventDays}
            changeDay={(day) => this.changeDay(day)}
          />
          <h3
            {...css({
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginLeft: "16px",
              "@media(max-width: 760px)": { marginLeft: 0 },
              fontWeight: 800
            })}
          >
            {moment(this.state.selectedDay, "YYYY-MM-DD").format(
              "dddd, MMMM Do, YYYY"
            )}
          </h3>
          <MediaQuery query="screen and (min-width: 760px)">
            <EventScheduleFullSizeTable data={data} />
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 760px)">
            <EventScheduleCompressedTable data={data} />
          </MediaQuery>
        </section>
      </ContentWrapper>
    );
  }
}

export default EventSchedule;
