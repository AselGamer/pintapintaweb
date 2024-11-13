import React from 'react';

function CrearTarea() {
  return (
    <div className="crear-tarea-container">
      <h2>Crear Nueva Tarea</h2>
      <input type="text" placeholder="Nombre de la tarea" />
      <textarea placeholder="Descripción"></textarea>
      <button>Guardar Tarea</button>
    </div>
  );
}

export default CrearTarea;
