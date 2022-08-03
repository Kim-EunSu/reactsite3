import React from "react";
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
  //30개를 불러옴
  console.log(props);
  return (
    <div className="youtube__list">
      <ul>
        {props.videos.map((video, index) => (
          <YoutubeItem key={index} video={video} />
        ))}
      </ul>
    </div>
  );
}

// video={video}는 element를뜻함

export default YoutubeList;
