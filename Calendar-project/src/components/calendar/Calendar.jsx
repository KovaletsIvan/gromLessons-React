import React, { Component } from "react";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { removeEvent } from '../../gateway/events.js'


import "./calendar.scss";

class Calendar extends Component {


  removeEvents = (e) => {
    removeEvent(e.target.id)
    this.props.getEventData()
  }

  render() {
    
    const { weekDates } = this.props;
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.props.events}
              showElem={this.showElem}
              removeEvents={this.removeEvents}
              getEventData={this.props.getEventData}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;