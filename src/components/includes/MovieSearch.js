import React, { useRef } from "react";
// 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”

function MovieSearch({ onSearch }) {
  const inputRef = useRef(); //useRef를 호출해서 inputRef에 ref객체 저장

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  // onKeyPress는 키보드에서 키를 눌렀을 때 발생하는 이벤트 헨들러
  // 키보드를 누르고 있는 동안에도 이벤트 발생
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="movie__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}

export default MovieSearch;
