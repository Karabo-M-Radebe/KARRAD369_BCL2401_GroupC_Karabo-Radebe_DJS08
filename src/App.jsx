import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Home } from "../presentation/Home.jsx";
import { About } from "../presentation/About.jsx";
import { Vans } from "../presentation/Vans/Vans.jsx";

import "./server.js";
import { VanDetail } from "../presentation/Vans/VanDetail.jsx";
import { Layout } from "../components/Layout.jsx";
import { Dashboard } from "../presentation/Host/Dashboard.jsx";
import { Income } from "../presentation/Host/Income.jsx";
import { Reviews } from "../presentation/Host/Reviews.jsx";

export default function App () {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/>
        <Route path="/host" element={<Dashboard/>}>
          <Route path="/host/income" element={<Income/>}/>
          <Route path="/host/reviews" element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

