import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowIcon, StarIcon } from './Icons';
import { API_KEY, BASE_URL } from '../utils/urls';

const Overview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [id]);

  const onButtonClick = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <p className="listTitle">Loading ...</p>
    )
  }

  return (
    <section
      className="overviewContainer"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0) 70%, rgb(0,0,0) 100%), url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }}>
      <button className="backButton" type="button" onClick={onButtonClick}>
        <ArrowIcon /><span>Movies</span>
      </button>
      <div className="posterAndInfoContainer">
        <img className="posterImage" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="movie poster" />
        <div className="infoContainer">
          <h1 className="titleAndRating">
            <span className="title">{details.title}</span>
            <span className="rating"><i className="starIcon"><StarIcon /></i>{details.vote_average?.toFixed(1)}</span>
          </h1>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
