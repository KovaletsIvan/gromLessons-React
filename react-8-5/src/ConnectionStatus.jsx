
import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
    }

  }

  componentDidMount() {
    window.addEventListener('offline', this.setStatusOffline)
    window.addEventListener('online', this.setStatusOnline)
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.setStatusOffline)
    window.removeEventListener('online', this.setStatusOnline)
  }
  setStatusOffline = () => {
    const divElem = document.querySelector(".status")
    divElem.classList.add('status_offline')
    this.setState({
      online: false
    })
  }

  setStatusOnline = () => {
    const divElem = document.querySelector(".status")
    divElem.classList.remove('status_offline')
    this.setState({
      online: true
    })
  }


  render() {

    let statusResult = this.state.online ? "online" : "offline"

    return (
      <div className="status">{statusResult}</div>
    )
  }
}



export default ConnectionStatus



