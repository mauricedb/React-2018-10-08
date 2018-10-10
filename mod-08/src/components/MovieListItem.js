import React from 'react';
import propTypes from 'prop-types';

function MovieListItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.backdrop_path} />
      <p>{movie.overview}</p>
    </div>
  );
}

MovieListItem.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    backdrop_path: propTypes.string.isRequired,
    overview: propTypes.string
  }).isRequired
};

export default MovieListItem;
