import React, { Component } from "react";
import errorBoundary from "./errorBoundary";
import propTypes from "prop-types";

class Ajax extends Component {
  state = {
    data: [],
    loading: true,
    error: null
  };

  static propTypes = {
    url: propTypes.string.isRequired,
    children: propTypes.func.isRequired
  };

  componentWillMount() {
    fetch(this.props.url)
      .then(rsp => (rsp.ok ? rsp : Promise.reject(rsp)))
      .then(rsp => rsp.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));

    // this.setState(oldState => ({ count: oldState.count + 1 }));
    // this.setState(oldState => ({ count: oldState.count + 1 }));
  }

  render() {
    const { data, loading, error } = this.state;
    const { children } = this.props;

    if (loading) {
      return "I am loading...";
    }

    if (error) {
      return "Found a dragon...";
    }

    return children(data);
  }
}

export default errorBoundary(Ajax);
