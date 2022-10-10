import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Overview = () => {
  const apiKey = '90e0ffba52cb15df6b98a296fea045cc';
  const params = useParams();

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error))
  };

  useEffect(() => {
    fetchMovies()
  }, []);

  const idMatch = movies.find((movie) => movie.id === params.id);
  console.log(idMatch)

  return (
    <div>
      Movie overview
    </div>
  );
};
export default Overview;
