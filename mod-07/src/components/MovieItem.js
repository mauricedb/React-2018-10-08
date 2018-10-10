import React from "react";
import propTypes from 'prop-types'

const MovieItem = ({ movie }) => (
  <div>
    <h3 onClick={() => this.test()}>{movie.title}</h3>
    { movie.backdrop_path && <img src={movie.backdrop_path} alt={movie.title} />}
    <p>{movie.overview.toLowerCase()}</p>
  </div>
);


class Movie {

}

MovieItem.propTypes = {
  // movie: propTypes.instanceOf(Movie),
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    backdrop_path: propTypes.string,
    overview: propTypes.string.isRequired,
  }).isRequired
}

export default MovieItem;
