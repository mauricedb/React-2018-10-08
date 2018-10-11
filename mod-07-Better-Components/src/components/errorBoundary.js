import React, { Component } from "react";

export default function withErrorBoundary(WrappedComponent) {
  return class extends React.Component {
    state = {
      error: null
    };
    componentDidCatch(error, info) {
      console.warn("Oops", error, info);
      this.setState({ error });
    }

    render() {
      if (this.state.error) {
        return "Another dragon";
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
