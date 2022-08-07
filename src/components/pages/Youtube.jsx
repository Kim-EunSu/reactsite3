// import React, { useEffect, useState } from "react";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import Contents from "../layout/Contents";
// import Title from "../layout/Title";
// import Contact from "../layout/Contact";
// import YoutubeList from "../includes/YoutubeList";

// function Youtube() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     let requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch(
//       "https://youtube.googleapis.com/youtube/v3/search?maxResults=30&q=$query&key=AIzaSyB5UfUETUb2lR2D8WXj6UAAZWl7WP2RaM0",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
//   }, []);
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["youtube", "reference"]} />
//         <section className="youtube__cont">
//           <div className="container">
//             <div className="youtube__inner">
//               {/* videos={videos} */}
//               <YoutubeList videos={videos} />
//             </div>
//           </div>
//         </section>
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// export default Youtube;
