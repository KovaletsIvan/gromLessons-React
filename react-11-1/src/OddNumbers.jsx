import React from "react";

class OddNumbers extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nexState) {
    return nexState.number % 2 > 0
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    )
  }
}


export default OddNumbers