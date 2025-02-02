// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/about';

function RoutesApp({ movies }) {  // A props 'movies' é recebida aqui
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} /> 
      <Route path="/about/:id" element={<Sobre movies={movies} />} />
    </Routes>
  );
}

export default RoutesApp;
