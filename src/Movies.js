import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
export const imgURL = `https://image.tmdb.org/t/p/w500/`;
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
export const Movies = () => {
  const { loading, movies, error } = useGlobalContext();
  if (loading) {
    return <div className="loader"></div>;
  }
  if (error.show) {
    return (
      <div className="error">
        <h1>{error.msg}</h1>
        {/* <Link to="/" className="btn">
          Back to Home
        </Link> */}
      </div>
    );
  } else {
    return (
      <section className="movies">
        {movies.map((movie) => {
          const { poster_path: poster, id, title, release_date: date } = movie;
          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <article>
                <img
                  src={poster === null ? url : `${imgURL}${poster}`}
                  alt=""
                  className="movie-img"
                />
                <div className="movie-info">
                  <h4>{title}</h4>
                  <p>{date}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    );
  }
};
