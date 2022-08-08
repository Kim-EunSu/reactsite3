import React from "react";

function YoutubeItem(props) {
  //   console.log(props);
  return (
    <li>
      <a href="/">
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.title}
        />
        <p>{props.video.title}</p>
      </a>
    </li>
  );
}

export default YoutubeItem;
