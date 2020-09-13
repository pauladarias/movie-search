import React, { useState } from "react";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=7e8859b384ed2c19b2a4adcfe7f44364&language=en-US&query=${query}&page=1&include_adult=false`;

    // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name{" "}
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Star Wars"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchMovies;
