import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos el hook useNavigate

function CrearTarea() {
  const navigate = useNavigate(); // Usamos el hook useNavigate

  // Función para volver a la página anterior
  const handleBackClick = () => {
    navigate(-1);  // Esto lleva al usuario a la página anterior en el historial
  };

  return (
    <div>
      <h1>Crear Tarea</h1>
      <button onClick={handleBackClick}>Volver atrás</button> {/* Botón de volver atrás */}
      
      {/* Aquí va el contenido de "Crear Tarea" */}
      <form>
        <div>
          <label htmlFor="tarea">Título de la tarea:</label>
          <input type="text" id="tarea" name="tarea" placeholder="Ingresa el título de la tarea" required />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" placeholder="Detalles de la tarea" required />
        </div>
        <div>
          <label htmlFor="fecha">Fecha de entrega:</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <button type="submit">Crear tarea</button>
      </form>
    </div>
  );
}

export default CrearTarea;
