import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerUsuarios() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Ver Usuarios</h1>
      <button onClick={handleBackClick}>Volver atrás</button>

      {/* Aquí va la lista de usuarios */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>juan@correo.com</td>
            <td>Estudiante</td>
          </tr>
          <tr>
            <td>Ana Gómez</td>
            <td>ana@correo.com</td>
            <td>Estudiante</td>
          </tr>
          <tr>
            <td>Carlos Fernández</td>
            <td>carlos@correo.com</td>
            <td>Profesor</td>
          </tr>
          {/* Más filas de usuarios... */}
        </tbody>
      </table>
    </div>
  );
}

export default VerUsuarios;
