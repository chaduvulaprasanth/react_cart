import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import "./assets/stylesheet/style.scss";
import Product from "./components/Product";
import { directive } from "@babel/types";
import Header from "./components/Header.js";
import { privateEncrypt } from "crypto";
import { func } from "prop-types";

function Products(props) {
  console.log(props);
  return (
    <div>
      {data.products.map(product => (
        <Product {...product} addcart={props.addcart} />
      ))}
    </div>
  );
}
function Total(props) {
  var total = props.cart.map(e => e.price).reduce((acc, price) => acc + price);
  return (
    <div className="card">
      <p>total</p>
      <p>{total}</p>
    </div>
  );
}

function Cart(props) {
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
      <button onClick={props.handleCheckout}>Check out</button>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      <p>ordered items successfully</p>
    </div>
  );
}
function HandleView(props) {
  switch (props.view) {
    case "products":
      return <Products addcart={props.addcart} />;
      break;
    case "cart":
      return <Cart cart={props.cart} handleCheckout={props.handleCheckout} />;
      break;
    case "checkout":
      return <Checkout />;
    default:
      return <Products addcart={props.addcart} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      active: "products"
    };
  }

  handleAddToCart = item =>
    this.setState({ cart: this.state.cart.concat(item) });
  handleCart = () => {
    this.setState({ active: "cart" });
    return <Cart cart={this.state.cart} />;
  };
  handleProducts = () => {
    this.setState({ active: "products" });
    return <Products addcart={this.handleAddToCart} />;
  };
  handleCheckout = () => {
    this.setState({ active: "checkout" });
    return <Checkout />;
  };

  render() {
    return (
      <>
        <Header
          cart={this.state.cart}
          handleCart={this.handleCart}
          handleProducts={this.handleProducts}
        />
        <HandleView
          view={this.state.active}
          addcart={this.handleAddToCart}
          cart={this.state.cart}
          handleCheckout={this.handleCheckout}
        />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
