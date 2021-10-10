import React from "react";

const ProductsList = (props) => {
  let total = props.cartItems.reduce((acc, elem) => acc + elem.price, 0)
  return (
    <div className="products">
      <ul className="products__list">
        {props.cartItems.map(elem =>
          <li key={elem.id} className="products__list-item">
            <span className="products__item-name">{elem.name}</span>
            <span className="products__item-price">{elem.price}</span>
          </li>
        )}

      </ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>

  )
}

export default ProductsList