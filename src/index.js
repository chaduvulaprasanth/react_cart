import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import "./assets/stylesheet/style.scss";
import Product from "./components/Product";
import Header from "./components/Header.js";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import Cart from "./components/Cart";

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

  HandleView = () => {
    switch (this.state.active) {
      case "products":
        return <Products addcart={this.handleAddToCart} />;
        break;
      case "cart":
        return (
          <Cart cart={this.state.cart} handleCheckout={this.handleCheckout} />
        );
        break;
      case "checkout":
        return <Checkout />;
        break;

      default:
        return <Products addcart={this.handleAddToCart} />;
    }
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Header
            cart={this.state.cart}
            handleCart={this.handleCart}
            handleProducts={this.handleProducts}
          />
          {this.HandleView()}
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
