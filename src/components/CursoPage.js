// src/components/CursoPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function CursoPage() {
  const { courseName } = useParams(); // Obtenemos el nombre del curso desde la URL
  const navigate = useNavigate();

  const handleFaltasClick = () => {
    navigate('/faltas'); // Redirigir a la página de faltas
  };

  const handleEntregasClick = () => {
    navigate('/entregas'); // Redirigir a la página de entregas
  };

  return (
    <div className="curso-page-container">
      <h2>Curso Seleccionado: {courseName}</h2>
      <div className="course-actions">
        <button onClick={handleFaltasClick}>Ver Faltas</button>
        <button onClick={handleEntregasClick}>Hacer Entregas</button>
      </div>
    </div>
  );
}

export default CursoPage;
