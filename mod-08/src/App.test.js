import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("./components/Ajax", () => (props) => <span>the ajax component {JSON.stringify(props)}</span>);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  console.log(div.innerHTML); 
  ReactDOM.unmountComponentAtNode(div);
});
