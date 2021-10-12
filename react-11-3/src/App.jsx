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
    const isVisible = this.state.isVisible

    const visible = isVisible ?
      <i className="fas fa-chevron-up"></i>
      : <i className="fas fa-chevron-down"></i>



    const text =
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>


    const content = isVisible ?
      <div className="expand__content">
        {text}
      </div> :
      null

    return (
      <div className="app">
        <Expand
          isVisible={visible}
          title="Some title"
          onClick={this.hendelClick}
        >
          {content}
        </Expand>

      </div>
    )
  }


}

export default App
