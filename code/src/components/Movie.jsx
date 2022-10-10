import React from 'react'

const Movie = ({ movie }) => {
  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
      {movie.original_title}
    </div>
  );
};

export default Movie;