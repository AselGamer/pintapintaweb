import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerAusencias() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Ver Ausencias</h1>
      <button onClick={handleBackClick}>Volver atrás</button>

      {/* Aquí van los datos de ausencias */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Faltas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan</td>
            <td>Pérez</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Ana</td>
            <td>Gómez</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>Fernández</td>
            <td>0</td>
          </tr>
          {/* Más filas de ausencias... */}
        </tbody>
      </table>
    </div>
  );
}

export default VerAusencias;
