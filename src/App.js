import React from "react";
// reacr-router-dom이 주소(경로)를 만들어주는거 , BrowserRouter, Route, Routes는 그안에 잇다?
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Portfolio from "./components/pages/Portfolio";
import Refer from "./components/pages/Refer";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reference" element={<Refer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
