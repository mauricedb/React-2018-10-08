import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import Person from "./Person";

class App extends Component {
  state = {
    now: new Date(),
    cats: [
      { id: 1, name: "Zorro" },
      { id: 2, name: "Diego" },
      { id: 3, name: "Diego" }
    ]
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      // this.state.now = new Date()
      this.setState({ now: new Date() });
    }, 1000);

    // fetch('/api/cats')
    //   .then(rsp => rsp.json())
    //   .then(data => this.setState({cats: data}))
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    // if (!this.state) return null;

    const { now, cats } = this.state;

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
       */}
        <Clock now={now} />
        <Person />

        {cats.map((cat, index) => (
          <div key={cat.id}>{cat.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
