import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PartnersStrip from "./components/PartnersStrip";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SalesPage from "./pages/SalesPage";

// Intranet
import IntranetLoginPage from "./pages/IntranetLoginPage";
import IntranetDashboard from "./pages/IntranetDashboard";

function Layout() {
  const location = useLocation();
  const isIntranet = location.pathname.startsWith('/intranet');

  return (
    <>
      <ScrollToTop />
      {!isIntranet && <Navbar />}
      
      <main className={isIntranet ? 'intranet-root' : ''}>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/ventas" element={<SalesPage />} />
          <Route path="/instalaciones" element={<FacilitiesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Private Intranet */}
          <Route path="/intranet/login" element={<IntranetLoginPage />} />
          <Route path="/intranet" element={<IntranetDashboard />} />
        </Routes>
      </main>

      {!isIntranet && <PartnersStrip />}
      {!isIntranet && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
