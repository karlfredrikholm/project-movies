import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from 'components/Movie';

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '90e0ffba52cb15df6b98a296fea045cc';
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error))
  }, []);

  return (
    <section className="listGrid">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <Movie movie={movie} />
        </Link>
      ))}
    </section>
  );
};

export default List;