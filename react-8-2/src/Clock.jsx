
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      date: new Date()
    }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {

    let timeUTS =
      new Date(new Date().setHours(new Date().getUTCHours()))
    let x = new Date(timeUTS.setHours(timeUTS.getHours() + this.props.offset))

    return (

      <div className="clock">
        <div className="clock__location">
          {this.props.location}
        </div>
        <div className="clock__time">
          {x.toLocaleTimeString()}
        </div>
      </div>

    )

  }
}



export default Clock



