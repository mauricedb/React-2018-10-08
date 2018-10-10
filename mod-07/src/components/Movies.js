import React, { Component } from "react";
import MovieItem from "./MovieItem";

class Movies extends Component {

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h1>Top rated movies</h1>
        {movies.map(m => (
          <MovieItem key={m.id} movie={m} />
        ))}
      </div>
    );
  }
}

export default Movies;
