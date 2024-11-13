import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerEntregas() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Ver Entregas</h1>
      <button onClick={handleBackClick}>Volver atrás</button>

      {/* Aquí van los datos de las entregas */}
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Fecha de entrega</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>10/10/2024</td>
            <td>Entregada</td>
          </tr>
          <tr>
            <td>Ana Gómez</td>
            <td>12/10/2024</td>
            <td>En revisión</td>
          </tr>
          {/* Más filas de entregas... */}
        </tbody>
      </table>
    </div>
  );
}

export default VerEntregas;
