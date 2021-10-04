import React from "react";
import UserForm from "./UserForm";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  createUser = (obj) => {
    const formData = [...new FormData(obj)]
      .reduce((acc, [name, value]) => ({ ...acc, [name]: value }), {})
    console.log(formData)
  }

  render() {
    return (<UserForm onSubmit={this.createUser} />)
  }

}


export default App