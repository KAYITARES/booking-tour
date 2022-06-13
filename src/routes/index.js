import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AboutUs from "../views/About";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about-Us" element={<AboutUs />}></Route>
    </Routes>
  );
};
export default Index;
