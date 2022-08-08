import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Title from "../layout/Title";
import Contents from "../layout/Contents";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Youtube() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&key=AIzaSyD8vsLhlpA3iTG28aC7PctLYtvO6wOiHZM`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        // console.log(result)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=music&key=AIzaSyD8vsLhlpA3iTG28aC7PctLYtvO6wOiHZM",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        // console.log(result)
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Reference"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeList videos={videos} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
