// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ListadoFaltas from './components/ListadoFaltas'; // Importar ListadoFaltas

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal del login */}
        <Route path="/" element={<Login />} />
        
        {/* Ruta del Dashboard con los cursos */}
        <Route path="/dashboard/:course" element={<Dashboard />} />
        
        {/* Ruta para mostrar las faltas de un curso y asignatura */}
        <Route path="/faltas/:course/:asignatura" element={<ListadoFaltas />} />
      </Routes>
    </Router>
  );
}

export default App;
