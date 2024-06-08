import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Home } from "../presentation/Home.jsx";
import { About } from "../presentation/About.jsx";
import { Vans } from "../presentation/Vans.jsx";

import "./server.js";

export default function App () {

  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vans" element={<Vans/>}/>
    </Routes>
    </BrowserRouter>
  )
}

