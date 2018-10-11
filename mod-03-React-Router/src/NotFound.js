import React, { Component } from "react";
import img from "./404.jpg";

class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={img} width={400} alt="Not found" />
      </div>
    );
  }
}

export default NotFound;
