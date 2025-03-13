import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Fechas from './Fechas';
import { GlobalStyles } from './GlobalStyles';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/fechas" element={<Fechas />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
