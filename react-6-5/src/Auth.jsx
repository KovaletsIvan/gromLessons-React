import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner'



class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  onLogin = () => {
    const loginBtn = document.querySelector('.login')
    const spinnerElement = document.querySelector('.spinner')
    loginBtn.classList.add('disp')
    spinnerElement.classList.remove('disp')

    setTimeout(() => {
      spinnerElement.classList.add('disp')
      this.setState({
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
    this.state.status ?
      btn = <Logout onLogout={this.onLogout} /> :
      btn = <Login onLogin={this.onLogin} />

    return (
      <>
        <Spinner size={20} />  {btn}
      </>
    )
  }
}

export default Auth



