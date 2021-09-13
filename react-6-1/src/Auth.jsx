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
      button = <Logout onClick={() => this.handleLogout()} /> :
      button = <Login onClick={() => this.handleLogin()} />

    return (

      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    )
  }
}
export default Auth