// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Estilos principales

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Cursos from './components/Cursos';
import ListadoFaltas from './components/ListadoFaltas'; // Página de faltas
import Entregas from './components/Entregas'; // Página de entregas
import CursoPage from './components/CursoPage'; // Nueva página para ver el curso

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirigir la ruta raíz (/) al Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:courseName" element={<CursoPage />} /> {/* Página del curso */}
          <Route path="/faltas" element={<ListadoFaltas />} />
          <Route path="/entregas" element={<Entregas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
