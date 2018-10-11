import React from 'react';
import propTypes from 'prop-types';

import MovieListItem from './MovieListItem';

const MovieList = ({ movies }) => (
  <div>
    <h1>Top  Movies</h1>
    {movies.map(movie => (
      <MovieListItem key={movie.id} movie={movie} />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired
    })
  )
};

export default MovieList;
