import React from 'react';
import './CursoPage.css'; // Asegúrate de que este archivo exista

function Curso({ selectedCourse }) {
  return (
    <div className="curso">
      <h2>Detalles del Curso: {selectedCourse}</h2>
      {/* Aquí deberías mostrar los detalles y las funcionalidades del curso */}
    </div>
  );
}

export default Curso;
