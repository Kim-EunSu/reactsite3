import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";

function Movie() {
  const [movies, setMovies] = useState([]);

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
        setMovies(result.results);
        //데이터가 불러와지는지
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
        setMovies(result.results);
        // 데이터가 불러와지는지
        // console.log(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference"]} />
        <section className="movie__cont">
          <div className="container">
            <div className="movie__inner">
              <MovieSearch onSearch={search} />
              <MovieList movies={movies} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
