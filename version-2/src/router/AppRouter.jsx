import React from "react";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
