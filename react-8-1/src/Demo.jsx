import React from "react";
import Life from "./Life";

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      visible: true
    }
  }

  show = () => {
    this.setState({
      visible: this.state.visible || true 
    })
  }
  hide = () => {
    this.setState({
      visible: false
    })
  }
  apdate = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <div className='pagination'>
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
          <button className="btn" onClick={this.apdate}>
            Update
          </button>
        </div>
        {this.state.visible && <Life number={this.state.number} />}
      </div>
    )
  }
}

export default Demo