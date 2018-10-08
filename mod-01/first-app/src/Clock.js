import React from "react";

class Clock extends React.Component {
  render() {
    const { now } = this.props;
    return (
      <div>
        The time:
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
