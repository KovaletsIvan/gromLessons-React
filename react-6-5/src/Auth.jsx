import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
      spin: false
    }
  }
  onLogin = () => {
    this.setState({
      spin: true,
    });
    setTimeout(() => {
      this.setState({
        spin: false,
        status: true
      })
    }, 2000)

  }

  onLogout = () => {
    this.setState({
      status: false
    })
  }

  render() {
    let btn;
    let spiner;

    this.state.spin ?
      spiner = <Spinner size={20} /> :
      spiner = <Login onLogin={this.onLogin} />
    if (this.state.status) {
      btn = <Logout onLogout={this.onLogout} />
      spiner = null
    }

    return (
      <>{btn}
        {spiner}
      </>
    )
  }
}

export default Auth



