import React, { Component } from 'react';

import Ajax from './components/Ajax';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div>
        <Ajax url="/movies.json">
          {movies => <MovieList movies={movies} />}
        </Ajax>
      </div>
    );
  }
}

export default App;
