import React, { Component } from "react";
import { fetchData } from "../../gateway/events";
import "./modal.scss";



class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    }
  }

  handleChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const formData = [...new FormData(document.querySelector('.event-form'))]
      .reduce((obj, [field, value]) => ({ ...obj, [field]: value }), {})

    fetchData(formData)
    this.props.togleVisibility()
  }

  render() {

    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn"
              onClick={this.props.togleVisibility}>+</button>
            <form className="event-form" onSubmit={this.onSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={this.state.date}
                  onChange={this.handleChange} />
                <input
                  type="time"
                  name="dateFrom"
                  className="event-form__field"
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="dateTo"
                  className="event-form__field"
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
              ></textarea>
              <button type="submit"
                className="event-form__submit-btn"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
