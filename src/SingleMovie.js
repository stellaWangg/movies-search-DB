import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY, baseURL } from "./context";
import { imgURL } from "./Movies";

const nonimgURL =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [single, setSingle] = useState("");

  const fetchSingle = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${baseURL}movie/${id}?api_key=${API_KEY}`);
      const data = await resp.json();
      setSingle(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingle();
  }, [id]);
  if (loading) {
    return <div className="loader"></div>;
  }

  const {
    poster_path: poster,
    title,
    release_date: date,
    overview,
    vote_average: rating,
  } = single;
  return (
    <section className="single-movie">
      <div className="img-container">
        <img
          src={poster === null ? nonimgURL : `${imgURL}${poster}`}
          alt=""
          className="single-img"
        />
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
      <div className="single-movie-info">
        <h1>{title}</h1>
        <h2>Release Date: {date}</h2>
        <h4>⭐️⭐️⭐️⭐️{rating}</h4>
        <p>{overview}</p>
      </div>
    </section>
  );
};
export default SingleMovie;
