import React from "react";
import data from "../data.json";
import Product from "./Product";

export default function Products(props) {
  return (
    <div>
      {data.products.map(product => (
        <Product {...product} addcart={props.addcart} />
      ))}
    </div>
  );
}
