import React, { Component } from "react";
import { connect } from "react-redux";
import { addActionCreator, loadMovies } from "./actions";

class AddButton extends Component {
  add = () => {
    this.props.dispatchAdd(this.props.value);
  };

  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAdd(value) {
      dispatch(addActionCreator(value));
    },
    loadMovies() {
      dispatch(loadMovies());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
