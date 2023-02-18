import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import About from "pages/about/About";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import NoPage from "pages/nopage/NoPage";
import Logement from "pages/logement/Logement";

function Layout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
