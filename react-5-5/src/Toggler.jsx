import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'On'
    }
  }
  toggleValue(e) {
    const event = e.target.textContent;
    this.setState({
      text: event === 'On' ? 'Of' : 'On'
    })
  }
  render() {
    return <button className="toggler" onClick={(e)=>this.toggleValue(e)}>{this.state.text}</button>
  }
}

export default Toggler