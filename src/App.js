// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import Navbar from './Navbar';
import Inicio from './Inicio';
import Fechas from './Fechas';
// Importa otros componentes si los tienes

function App() {
  return (
    <Router> {/* Envuelve tu aplicación con BrowserRouter */}
      <Navbar /> {/* El Navbar estará siempre visible */}
      <Routes>
        {/* Define las rutas para tus componentes */}
        <Route path="/" element={<Inicio />} /> {/* Ruta para la pantalla de Inicio */}
        <Route path="/fechas" element={<Fechas />} /> {/* Ruta para la pantalla de Fechas */}
        {/* Agrega más rutas según tus necesidades, como "/videos" o "/fotos" */}
      </Routes>
    </Router>
  );
}

export default App;
