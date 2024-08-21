import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/:filter" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;