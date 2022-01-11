import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
