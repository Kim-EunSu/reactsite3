import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import MovieList from "../includes/MovieList";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

// search부분은 get방식으로 데이터를 가져와서  setMovies안에 데이터값을 넣어줌
function Movie() {
  const [movies, SetMovies] = useState([]);

  const search = (query) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c0567696bc620eac81b5e3baab58ee88&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        SetMovies(result.results);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=c0567696bc620eac81b5e3baab58ee88&query=marvel",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        SetMovies(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference"]} />
        <div className="movie__cont">
          <div className="container">
            <div className="movie__inner">
              <MovieSearch onSearch={search} />
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
