import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Chef from "./pages/Chef";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import Comming from "./pages/Comming";
import ErrorPages from "./pages/ErrorPages";
import Chefdetails from "./pages/Chefdetails";
import Portfoliodetails from "./pages/Portfoliodetails";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import ReservationSuccess from "./pages/ReservationSuccess";
import ZenchefWidget from "./components/ZenchefWidget";

export default function App() {
  return (
    <>
      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/home2" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/meet-the-chef/:id" element={<Chefdetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details/:id" element={<Portfoliodetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:id" element={<Blogdetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comming-soon" element={<Comming />} />
          <Route path="/*" element={<ErrorPages />} />
          <Route path="/reservation-success" element={<ReservationSuccess />} />
        </Route>
      </Routes>

      {/* 🔥 ZENCHEF GLOBAL WIDGET */}
      <ZenchefWidget />
    </>
  );
}
