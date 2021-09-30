
import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
    }

  }

  componentDidMount() {
    window.addEventListener('online', this.setStatusOnline)
    window.addEventListener('offline', this.setStatusOffline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setStatusOnline)
    window.removeEventListener('offline', this.setStatusOffline)
  }
  setStatusOffline = () => {
    this.setState({
      online: false
    })
  }

  setStatusOnline = () => {
    this.setState({
      online: true
    })
  }


  render() {

    let statusResult = this.state.online ? "online" : "offline"
    let result = statusResult === 'online' ? "status" : "status status_offline"


    return (
      <div className={result}>{statusResult}</div>
    )
  }
}



export default ConnectionStatus



