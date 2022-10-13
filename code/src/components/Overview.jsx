import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowIcon, StarIcon } from './Icons';

const Overview = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const apiKey = '90e0ffba52cb15df6b98a296fea045cc';

  const onButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <section
      className="overviewContainer"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }}>
      <button className="backButton" type="button" onClick={onButtonClick}>
        <ArrowIcon /><span>Movies</span>
      </button>
      <div className="posterAndInfoContainer">
        <img className="posterImage" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="movie poster" />
        <div className="infoContainer">
          <h1 className="titleAndRating">
            <span className="title">{details.title}</span>
            <span className="rating"><i className="starIcon"><StarIcon /></i>{details.vote_average}</span>
          </h1>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
};
export default Overview;
