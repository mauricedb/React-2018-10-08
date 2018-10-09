import React, { Component } from "react";
import img from "./cat.jpg";

class Cat extends Component {
  render() {
    return (
      <div>
        <img src={img} width={400} alt="Cat" />
      </div>
    );
  }
}

export default Cat;
