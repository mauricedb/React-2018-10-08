import React, { Component } from "react";
import { connect } from "react-redux";

class CurrentValue extends Component {
  render() {
    const { value } = this.props;

    return <div>The current value = {value}</div>;
  }
}

function mapStateToProps(state) {
  return {
    value: state.theValue
  };
}

export default connect(mapStateToProps)(CurrentValue);
