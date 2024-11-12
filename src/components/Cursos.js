// src/components/Cursos.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cursos() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = ['Curso ASIR 1', 'Curso ASIR 2', 'Curso ASIR 3']; // Lista de cursos disponibles

  const handleCourseSelect = (course) => {
    setSelectedCourse(course); // Al seleccionar un curso, lo guardamos en el estado
    // Redirigir al usuario a la página de selección de curso
    navigate(`/curso/${course}`); // Redirige a una nueva ruta con el curso seleccionado
  };

  return (
    <div className="cursos-container">
      <h2>Selecciona un Curso</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <button
            key={index}
            className="course-btn"
            onClick={() => handleCourseSelect(course)}
          >
            {course}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
