import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Overview = () => {
  const [details, setDetails] = useState({});
  console.log(details)
  const { id } = useParams();
  console.log(id)
  const apiKey = '90e0ffba52cb15df6b98a296fea045cc';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
  }, []);

  //  const idMatch = movies.find((movie) => movie.id === params.id);
  // console.log(idMatch)

  return (
    <section
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`,
        backgroundSize: 'cover',
        height: '100vh' }}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="movie poster" />
        <div>
          <h4>{details.original_title}</h4>
          <p>{details.vote_average}</p>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
};
export default Overview;
