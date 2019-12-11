import React from "react";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: +91,
      place: "andharapradesh"
    };
  }
  handleInput = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    alert(
      `name ${this.state.name}, email ${this.state.email}, phone number ${this.state.phone} and state ${this.state.place}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleInput}
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            Email:
            <input
              onChange={this.handleInput}
              type="email"
              name="email"
              value={this.state.email}
            />
          </label>
          <label>
            Phone No:
            <input
              onChange={this.handleInput}
              type="number"
              name="phone"
              value={this.state.phone}
            />
          </label>
          <label>
            Select your State:
            <select value={this.state.place} onChange={this.handleInput}>
              <option value="andharapradesh">Andhra Pradesh</option>
              <option value="himachalpradesh">HImachal Pradesh</option>
              <option value="kerala">Kerala</option>
              <option value="tamilnadu">Tamilnadu</option>
            </select>
          </label>
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
