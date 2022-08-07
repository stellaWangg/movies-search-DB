import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="movies/:id" element={<SingleMovie />}></Route>
    </Routes>
  );
}
export default App;
