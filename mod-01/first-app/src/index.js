import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TheApp from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TheApp />, document.getElementById("root"));

// function render() {
//     const now = new Date();
//     const app = React.createElement('div', null ,
//     React.createElement('h1', null,  "The app"),
//     React.createElement('div', null, "The time is " + now.toLocaleTimeString()))
//     ReactDOM.render(app, document.getElementById('root'));
// }

// setInterval(render, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
