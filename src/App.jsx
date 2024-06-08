import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Home } from "../presentation/Home.jsx";
import { About } from "../presentation/About.jsx";
import { Vans } from "../presentation/Vans.jsx";

import "./server.js";
import { VanDetail } from "../presentation/VanDetail.jsx";
import { Layout } from "../components/Layout.jsx";

export default function App () {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

