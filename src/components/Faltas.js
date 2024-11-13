import React, { useState, useEffect } from 'react';
import faltasData from '../data/Faltas'; // Asegúrate de que la ruta es correcta

function Faltas() {
  const [faltas, setFaltas] = useState([]);

  useEffect(() => {
    // Verifica que los datos sean un array antes de establecer el estado
    if (Array.isArray(faltasData) && faltasData.length > 0) {
      setFaltas(faltasData);
    }
  }, []);

  return (
    <div className="faltas-container">
      <h2>Listado de Faltas</h2>
      <table className="faltas-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Faltas</th>
          </tr>
        </thead>
        <tbody>
          {faltas.map((falta, index) => (
            <tr key={index}>
              <td>{falta.nombre}</td>
              <td>{falta.faltas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faltas;
