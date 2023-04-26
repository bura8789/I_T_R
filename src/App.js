import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";
import Bike from "./Pages/Bike";
import Inomark from "./Pages/Inomark";
import Yaxti from "./Pages/Yaxti";
import Aboutme from "./Pages/Aboutme";
import Document from "./Pages/Document";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/inomark" element={<Inomark />} />
        <Route path="/yaxti" element={<Yaxti />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/document" element={<Document />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
