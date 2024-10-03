import React from "react";
import HomePage from "./Navbar/HomePage";
import LoginPage from "./Navbar/LoginPage";
import ServicesPage from "./Navbar/ServicesPage";
import AboutPage from "./Navbar/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App1;
