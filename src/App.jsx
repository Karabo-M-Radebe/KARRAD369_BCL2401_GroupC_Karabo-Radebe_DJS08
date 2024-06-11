import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Home } from "../presentation/Home.jsx";
import { About } from "../presentation/About.jsx";
import { Vans } from "../presentation/Vans/Vans.jsx";
import "../server.js";
import { VanDetail } from "../presentation/Vans/VanDetail.jsx";
import { Layout } from "../components/Layout.jsx";
import { Dashboard } from "../presentation/Host/Dashboard.jsx";
import { Income } from "../presentation/Host/Income.jsx";
import { Reviews } from "../presentation/Host/Reviews.jsx";
import { HostLayout } from "../components/HostLayout.jsx";
import { Login } from "../presentation/Login.jsx";
import { HostVanDetail } from "../presentation/Host/HostVanDetail.jsx";
import { HostVanInfo } from "../presentation/Host/HostVanInfo.jsx";
import { HostVanPhotos } from "../presentation/Host/HostVanPhotos.jsx";
import { HostVanPricing } from "../presentation/Host/HostVanPricing.jsx";
import { HostVans } from "../presentation/Host/HostVans.jsx";
import { AuthRequired } from "../components/AuthRequired.jsx";
import { NotFound } from "../presentation/NotFound.jsx";

export default function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />}/>

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

