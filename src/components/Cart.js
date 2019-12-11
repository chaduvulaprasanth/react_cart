import React from "react";

export default function Cart(props) {
  function Total(props) {
    var total = props.cart
      .map(e => e.price)
      .reduce((acc, price) => acc + price);
    return (
      <div className="card">
        <p>total</p>
        <p>{total}</p>
      </div>
    );
  }

  return (
    <div>
      {props.cart.map(item => (
        <div className="card">
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
      <hr></hr>
      <Total cart={props.cart} />
      <button className="checkout-btn" onClick={props.handleCheckout}>
        Check out
      </button>
    </div>
  );
}
