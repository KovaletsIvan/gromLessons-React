import React from "react";
import UserForm from "./UserForm";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  createUser = (e,obj) => {
    e.preventDefault()
    console.log(obj)
  }

  render() {
    return (<UserForm onSubmit={this.createUser} />)
  }

}


export default App