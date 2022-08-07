import React, { useState, useEffect, useContext } from "react";

const baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = `${process.env.REACT_APP_MOVIES_KEY}`;
//url for search
// const SEARCH_URL = `${baseURL}search/movie?api_key=${API_KEY}&query=${query}`;
//url for single page
//const singleURL=`${baseURL}movie/${id}?api_key=${API_KEY}`
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("blur");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `${baseURL}search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await resp.json();
      console.log(data.results);
      if (data.total_results === 0 || data.results === undefined) {
        setError({ show: true, msg: "404, pls search again:( " });
        setLoading(false);
      } else {
        setMovies(data.results);
        setLoading(false);
        setError({ show: false, msg: "" });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        loading,
        setLoading,
        movies,
        setMovies,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, baseURL, API_KEY };
