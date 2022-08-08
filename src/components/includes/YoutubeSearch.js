import React, { useRef } from "react";

function YoutubeSearch({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  //이벤트의 key값이 엔터(Enter)키와 일치할 때 클릭이벤트를 호출
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="youtube__search">
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

export default YoutubeSearch;
