import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppNavbar from '../Misc/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Processos from '../Pages/Processos/Processos';
import Relatorios from '../Pages/Relatorios/Relatorios';

const App = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processos" element={<Processos />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
