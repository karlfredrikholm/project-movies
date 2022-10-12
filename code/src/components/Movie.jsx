import React from 'react'
import { MovieContainer } from './styled/MovieContainer.styled';
import { Overlay } from './styled/Overlay.styled';

const Movie = ({ movie }) => {
  return (
    <MovieContainer style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
      <Overlay>
        <h3>{movie.original_title}</h3>
        <h4>Released {movie.release_date}</h4>
      </Overlay>
    </MovieContainer>
  );
};

export default Movie;