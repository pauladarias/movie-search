import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/movie/550?api_key=7e8859b384ed2c19b2a4adcfe7f44364&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchMovies;
