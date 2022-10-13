import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from 'components/Movie';
import { API_KEY, BASE_URL } from './utils/urls';

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`)
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