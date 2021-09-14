import React from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    console.log(props)
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })

  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    
    let button;
    this.state.isLoggedIn ?

      button = <Logout onLogout={this.handleLogout} /> :
      button = <Login onLogin={this.handleLogin} />

    return (

      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    )
  }
}
export default Auth