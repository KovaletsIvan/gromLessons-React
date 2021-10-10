import React from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [
        { id: '0', name: 'iPad Pro', price: 799 },
        { id: '1', name: 'iPhone', price: 999 }
      ]
    }

  }
  render() {
  
    const count = this.state.cartItems.length
    return (
      
      <div className="column">
        <CartTitle count={count} userName={this.props.userName} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    )
  }
}
export default ShoppingCart