import React from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {
        firstName: 'Tom',
        lastName: 'Form'
      },
      cartItems: this.props.cartItems
    }
  }
  hendleInpat = (e) => {
    const { name, value } = e.target
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    })
  }

  render() {

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} cartItems={this.props.cartItems} />
          <Profile userData={this.state.userData} onChange={this.hendleInpat} />
        </main>
      </div >
    )
  }
}

export default App