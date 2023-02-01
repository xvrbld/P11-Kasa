import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import About from "pages/about/About";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
