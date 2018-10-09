import React, { Component } from "react";
import img from "./pier.jpg";

class Pier extends Component {
  render() {
    return (
      <div>
        <img src={img} width={400} alt="Bornemouth pier" />
      </div>
    );
  }
}

export default Pier;
