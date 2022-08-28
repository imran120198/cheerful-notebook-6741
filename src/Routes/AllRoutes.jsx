import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "../Pages/Features/Features";
import Homepage from "../Pages/HomePage/Homepage";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing/Pricing";
import Templates from "../Pages/Templates/Templates";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<h1>CREATE</h1>} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
