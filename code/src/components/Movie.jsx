import React from 'react'

const Movie = ({ movie }) => {
  return (
    <article className="movieContainer" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
      <div className="overlay">
        <h3 className="listTitle">{movie.title}</h3>
        <p className="releaseDate">Released {movie.release_date}</p>
      </div>
    </article>
  );
};

export default Movie;