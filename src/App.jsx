/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Vans from "../pages/vans/Vans.jsx"
import VanDetail from "../pages/vans/VanDetail.jsx"
import Dashboard from "../pages/host/Dashboard.jsx"
import Income from "../pages/host/Income.jsx"
import Reviews from "../pages/host/Reviews.jsx"
import Layout from "../components/Layout.jsx"
import HostLayout from "../components/HostLayout.jsx"
import HostVans from "../pages/host/HostVans.jsx"
import HostVanDetail from "../pages/host/HostVanDetails.jsx";
import HostVanInfo from "../pages/host/HostVanInfo.jsx"
import HostVanPricing from "../pages/host/HostVanPricing.jsx"
import HostVanPhotos from "../pages/host/HostVanPhotos.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />

            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
