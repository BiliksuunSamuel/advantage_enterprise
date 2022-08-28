import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/frontend";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
