import React, { Component } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { baseUrl } from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    this.getData()
  }
  // componentDidUpdate(prevState) {
 
  // }
  getData = () => {
    fetch(baseUrl)
      .then((resp) => resp.json())
      .then((result) => {
        result.map((elem) => {
          (elem.dateFrom = new Date(elem.dateFrom)),
            (elem.dateTo = new Date(elem.dateTo));
        });
        return result;
      })
      .then((res) => {
        this.setState({ events: res });
      });
  };


  render() {
    console.log(this.state.events)
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.state.events} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;

  // getData = () => {
  //   fetch(baseUrl)
  //     .then((resp) => resp.json())
  //     .then((result) => {
  //       result.map((elem) => {
  //         (elem.dateFrom = new Date(elem.dateFrom)),
  //           (elem.dateTo = new Date(elem.dateTo));
  //         this.setState({
  //           events: result
  //         })
  //       });
  //     })
  // };