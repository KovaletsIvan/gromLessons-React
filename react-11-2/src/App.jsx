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
    const text ='Use immutable array methods to work with data. It will help to avoid bugs'
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show dialog</button>
        <Dialog isOpen={this.state.isOpen} title='Recommendation' onClose={this.hideDialog}>
          <p>{text}</p>
        </Dialog>
      </div>
    )
  }


}

export default App