import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tareas() {
  const navigate = useNavigate();

  return (
    <div className="centered-container">
      <div className="container">
        <h2>Gestión de Tareas</h2>
        <button onClick={() => navigate('/crear-tarea')}>Crear Tarea</button>
        <button onClick={() => navigate('/ver-tarea')}>Ver Tarea</button>
        <button onClick={() => navigate('/ver-usuarios')}>Ver Usuarios en Curso</button>
      </div>
    </div>
  );
}

export default Tareas;
