import React from "react";
import Message from "./Message";

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
    }

  }
  setText = (vall) => {
    this.setState({
      text: vall
    })
  }
  clear = () => {
    this.setState({
      text: null
    })
  }
  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />

        <div className="actions">
          <button className="btn" onClick={() => this.setText('Hello, world!')}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText('Another exciting text.')}>
            Text 2
          </button>
          <button className="btn" onClick={this.clear}>
            Clear
          </button>
        </div>
      </div>

    )
  }
}

export default Page