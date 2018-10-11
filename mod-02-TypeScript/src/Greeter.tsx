import * as React from "react";

interface IGreeterProps {
  name: string;
}

class Greeter extends React.Component<IGreeterProps> {
  public render() {
    const { name } = this.props;

    return <div>Hello {name}</div>;
  }
}

export default Greeter;
