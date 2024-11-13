import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import SeleccionarCurso from './components/SeleccionarCurso';
import CursoPage from './components/CursoPage';
import CrearTarea from './components/CrearTarea';
import VerEntregas from './components/VerEntregas';
import VerUsuarios from './components/VerUsuarios';
import VerAusencias from './components/VerAusencias';  // Importamos la nueva página

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          {isAuthenticated && (
            <>
              <Route path="/seleccionar-curso" element={<SeleccionarCurso />} />
              <Route path="/curso/:curso" element={<CursoPage />} />
              <Route path="/curso/:curso/crear-tarea" element={<CrearTarea />} />
              <Route path="/curso/:curso/ver-entregas" element={<VerEntregas />} />
              <Route path="/curso/:curso/ver-usuarios" element={<VerUsuarios />} />
              <Route path="/curso/:curso/ver-ausencias" element={<VerAusencias />} />  {/* Nueva ruta */}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
