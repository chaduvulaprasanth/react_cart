import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="cart-logo" onClick={props.handleProducts}>
        Cart
      </h1>
      <div className="cart" onClick={props.handleCart}>
        <img src="shopping-cart.png" alt="" />
        <p className="cart-length">{props.cart.length}</p>
      </div>
    </div>
  );
}
