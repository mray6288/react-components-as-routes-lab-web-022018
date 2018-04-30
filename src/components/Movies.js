import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let allMovies = movies.map(movie => {
  	return <div className='movie'>{movie.title} - {movie.time} - {movie.genres} - {movie.metascore}</div>
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
};

export default Movies;
