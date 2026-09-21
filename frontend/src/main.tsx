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
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AboutPage from "./pages/AboutPage";

// Intranet
import IntranetLoginPage from "./pages/IntranetLoginPage";
import IntranetDashboard from "./pages/IntranetDashboard";

function Layout() {
  const location = useLocation();
  const isIntranet = location.pathname.startsWith('/intranet');
  const isContact = location.pathname === '/contacto';

  return (
    <>
      <ScrollToTop />
      {!isIntranet && <Navbar />}
      
      <main className={isIntranet ? 'intranet-root' : ''}>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/instalaciones" element={<FacilitiesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          
          {/* Private Intranet */}
          <Route path="/intranet/login" element={<IntranetLoginPage />} />
          <Route path="/intranet" element={<IntranetDashboard />} />
        </Routes>
      </main>

      {!isIntranet && !isContact && <PartnersStrip />}
      {!isIntranet && !isContact && <Footer />}
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
