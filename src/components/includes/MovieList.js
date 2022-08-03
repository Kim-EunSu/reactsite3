import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  // console.log(props);
  // 무비리스트들이 나옴20개
  return (
    <div className="movie__list">
      <ul>
        {props.movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
