import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Movie from 'components/Movie';
import { API_KEY, BASE_URL } from '../utils/urls';

const List = () => {
  const { section } = useParams();
  const [movies, setMovies] = useState([]);
  let show = '';
  if (section === 'popular') {
    show = 'popular';
  } else if (section === 'toprated') {
    show = 'top_rated';
  } else if (section === 'intheatersnow') {
    show = 'now_playing'
  }

  useEffect(() => {
    fetch(`${BASE_URL}${show}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error))
  }, [section, show]);

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