import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

function Dashboard() {
  const navigate = useNavigate();

  // Cursos disponibles
  const cursos = ['Asir1', 'Asir2', 'Dam1', 'Dam2'];

  // Función para manejar la selección de curso
  const handleSelectCourse = (curso) => {
    navigate(`/curso/${curso}`);  // Redirige a la página del curso seleccionado
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <h3>Selecciona un curso:</h3>
      <div>
        {cursos.map((curso) => (
          <button key={curso} onClick={() => handleSelectCourse(curso)}>
            {curso}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
