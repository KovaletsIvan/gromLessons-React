import React from "react";
import Expand from "./Expand";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  hendelClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const context = this.state.isVisible ?
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>

      : null

    return (
      <div className="app">
        <div className="expand border">
          <Expand isVisible={this.state.isVisible} title="Some title" onClick={this.hendelClick} />
          <div className="expand__content">
            {context}
          </div>
        </div>
      </div>
    )
  }


}

export default App
