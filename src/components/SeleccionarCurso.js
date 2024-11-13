import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SeleccionarCurso() {
  const navigate = useNavigate();

  const cursos = ['Asir1', 'Asir2', 'Dam1', 'Dam2'];

  const handleCursoClick = (curso) => {
    navigate(`/curso/${curso}`);
  };

  return (
    <div className="container">
      <h1>Selecciona un curso</h1>
      {cursos.map((curso) => (
        <button key={curso} onClick={() => handleCursoClick(curso)}>
          {curso}
        </button>
      ))}
    </div>
  );
}

export default SeleccionarCurso;
