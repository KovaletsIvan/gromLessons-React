import React from "react";
import Dialog from "./Dialog";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  hideDialog = () => {
    this.setState({
      isOpen: false
    })
  }
  showDialog = () => {
    this.setState({
      isOpen: true
    })
  }

  render() {

    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show dialog</button>
        <Dialog isOpen={this.state.isOpen} title='some title' onClose={this.hideDialog}>
          <p>Some Text</p>
        </Dialog>
      </div>
    )
  }


}

export default App