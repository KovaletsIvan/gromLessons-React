import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off'
    }
  }
  toggleContent(e) {
    const event = e.target.textContent;
    this.setState({
      text: event === 'Off' ? 'On' : 'Off'
    })
  }
  render() {
    return <button className="toggler"
      onClick={this.toggleContent.bind(this)}
    >{this.state.text}</button>
  }
}

export default Toggler