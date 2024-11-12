// src/components/SeleccionCurso.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeleccionCurso.css';

function SeleccionCurso() {
  const navigate = useNavigate();

  // Datos de ejemplo para los cursos
  const cursos = ['Curso de Matemáticas', 'Curso de Historia', 'Curso de Ciencias', 'Curso de Inglés'];

  const handleSelectCurso = (curso) => {
    // Redirige a la página del curso seleccionado
    navigate(`/curso/${curso}`);
  };

  return (
    <div className="fullscreen-container">
      <div className="seleccion-curso-container container">
        <h2>Selecciona un Curso</h2>
        <div>
          {cursos.map((curso, index) => (
            <button
              key={index}
              className="btn-curso"
              onClick={() => handleSelectCurso(curso)}
            >
              {curso}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeleccionCurso;
