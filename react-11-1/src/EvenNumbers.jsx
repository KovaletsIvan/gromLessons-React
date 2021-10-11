import React from "react";

class EvenNumbers extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextState) {
    return nextState.number % 2 === 0
  }
  render() {

    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    )
  }

}

export default EvenNumbers