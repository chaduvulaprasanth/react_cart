import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="home" onClick={props.handleProducts}>
        Cart
      </h1>
      <p className="cart" onClick={props.handleCart}>
        {props.cart.length}
      </p>
    </div>
  );
}
