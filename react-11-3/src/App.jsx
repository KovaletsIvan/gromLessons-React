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
    const visibility = this.state.isVisible ?
      <i className="fas fa-chevron-up"></i>
      : <i className="fas fa-chevron-down"></i>
    const context = this.state.isVisible ?
      <div className="expand__content">
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      </div>
      : null

    const btn = <button className="expand__toggle-btn" onClick={this.hendelClick}>
      {visibility}
    </button>
    return (
      <div className="app">
        <div className="expand border">
          <Expand title='Some title'>
            {btn}
          </Expand>

          {context}
        </div>
      </div>
    )
  }


}

export default App