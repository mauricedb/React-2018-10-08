import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    fetch("/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Top rated movies</h1>
        {movies.map(m => (
          <div key={m.id}>
            <h3>{m.title}</h3>
            <img src={m.backdrop_path} alt={m.title} />
            <p>{m.overview}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
