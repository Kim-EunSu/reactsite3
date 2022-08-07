import React from "react";
import MovieItem from "./MovieItem";

// props는 내용을 전달해주는 매개변수 거기서 movies를 접근
// movies를 map함수로 반복 map(element, index)
// 이 데이터값에 MovieItem에 전달하여 movie={movie} 앞에있는 movie는 내가 정한 매개변수,
// {movie}는 map함수의 element
function MovieList(props) {
  //   console.log(props);

  const MovieContent = `${props.movies}`;

  return (
    <div className="movie__list">
      <ul>
        {MovieContent === "" ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          props.movies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))
        )}
      </ul>
    </div>
  );
}

export default MovieList;
