import React from "react";
import Clock from "./Clock";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  hiden = () => {
    this.setState({
      visible: !this.state.visible
    })

  }
  render() {

    return (
      <>
        {this.state.visible &&
          <div className="clock-div">
            <Clock location="New York" offset={-5} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="London" offset={0} />
          </div>}
        <div>
          <button onClick={this.hiden}>Hiden</button>
        </div>
      </>
    )
  }
}

export default App