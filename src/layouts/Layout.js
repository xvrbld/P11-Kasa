import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import About from "pages/about/About";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import NoPage from "pages/nopage/NoPage";

function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
