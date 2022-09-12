import { BrowserRouter, Routes, Route } from "react-router-dom";


import React from 'react';
import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import Contacto from './pages/Contacto.js';
import Homepage from './pages/Homepage.js';
import Miperfil from './pages/Miperfil.js';
import Novedades from './pages/Novedades.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Miperfil" element={<Miperfil />} />
          <Route path="Novedades" element={<Novedades />} />
          <Route path="Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
