import React from "react";
import imgfile from "../../assets/img/nullimage.jpg";

function MovieItem(props) {
  //   console.log(props);
  const MovieImg = `${props.movie.poster_path}`;

  return (
    <li>
      <a href="/">
        {MovieImg !== "null" ? (
          <img
            src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`}
            alt={props.movie.title}
          />
        ) : (
          <img src={imgfile} alt="" />
        )}

        <p>{props.movie.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;
