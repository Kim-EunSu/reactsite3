import React from "react";

function MovieItem(props) {
  console.log(props);
  return (
    <li>
      <a href="/">
        <img
          src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <p>{props.movie.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;
