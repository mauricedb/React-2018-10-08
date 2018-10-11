import React, { Component } from "react";
import img from "./cat.jpg";

class Cat extends Component {
  render() {
    const { catName } = this.props.match.params;

    return (
      <div>
        <h2>{catName}</h2>
        <img src={img} width={400} alt="Cat" />
      </div>
    );
  }
}

export default Cat;
