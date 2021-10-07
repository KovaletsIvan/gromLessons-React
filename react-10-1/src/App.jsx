import React from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null
    }
  }
  componentDidMount() {
    this.hendelFetch(this.props.userId)
  }

  hendelFetch = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(result => this.setState({ userData: result }))
  }

  render() {
    if(!this.state.userData){
      return null
    }
    return (
      <div className="page">
        <UserMenu userData={this.state.userData} />
        <UserProfile userData={this.state.userData} />
      </div>

    )
  }
}

export default App