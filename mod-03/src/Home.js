import React, { Component } from "react";
import img from "./home.png";

class Home extends Component {
  render() {
    return (
      <div>
        <img src={img} width={400} alt="Home" />
      </div>
    );
  }
}

export default Home;
