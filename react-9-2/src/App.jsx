import React from "react";
import UserForm from "./UserForm";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  createUser = (obj) => {
    console.log(obj)
  }

  render() {
    return (<UserForm createUser={this.createUser} />)
  }

}


export default App