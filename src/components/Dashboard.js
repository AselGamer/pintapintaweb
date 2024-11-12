// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleCursosClick = () => {
    navigate('/cursos');
  };

  return (
    <div className="dashboard-container">
      <h2>Bienvenido al Dashboard</h2>
      <button onClick={handleCursosClick}>Seleccionar Curso</button>
    </div>
  );
}

export default Dashboard;
