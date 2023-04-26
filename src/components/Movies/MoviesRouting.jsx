import React from "react";
import { Routes, Route } from "react-router";
import Movie from "./Movie";
import MoviesDetails from "./MoviesDetails";
const MoviesRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie></Movie>} />
      <Route path="/detail" element={<MoviesDetails />} />
    </Routes>
  );
};

export default MoviesRouting;
