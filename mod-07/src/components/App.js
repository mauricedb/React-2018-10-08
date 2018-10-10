import React, { Component } from "react";
import Ajax from "./Ajax";
import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <div>
        <Ajax url="/movies.json" style={{margin: 10}}>
        {movies => <Movies movies={movies} />}
        </Ajax>
      </div>
    );
  }
}

export default App;
