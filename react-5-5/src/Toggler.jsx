import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  toggleContent() {
    this.setState({
      active: this.state.active === false ? true : false
    })
  }
  render() {
    return <button className="toggler"
      onClick={() => this.toggleContent()}
    >{this.state.active ? 'On' : 'Off'}</button>
  }
}

export default Toggler