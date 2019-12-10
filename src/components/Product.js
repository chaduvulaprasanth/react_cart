import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <button onClick={() => props.addcart(props)}>Add to Cart</button>
    </div>
  );
}
