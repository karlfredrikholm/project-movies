import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from 'components/Movie';

const List = () => {
  const apiKey = '90e0ffba52cb15df6b98a296fea045cc';
  console.log(apiKey)
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error))
  };

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <section>
      {movies.map((movie) => (
        <Link key={movie.id}>
          <Movie movie={movie} />
        </Link>
      ))}
    </section>
  );
};

export default List;