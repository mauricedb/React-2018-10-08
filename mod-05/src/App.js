import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const o = {
//   value: 1
// };
// Object.freeze(o);
// o.value = 2;
// console.log(o);

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import myReducer from "./myReducer";
import CurrentValue from "./CurrentValue";
import AddButton from "./AddButton";

import { addActionCreator, loadMovies } from "./actions";

const store = createStore(myReducer, applyMiddleware(thunk));

store.dispatch(addActionCreator(7));

store.dispatch(addActionCreator(10));
store.dispatch(loadMovies())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CurrentValue />
          <AddButton value={5} />
          <AddButton value={42} />
        </div>
      </Provider>
    );
  }
}

export default App;
