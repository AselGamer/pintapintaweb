// src/components/ListadoFaltas.js
import React from 'react';

function ListadoFaltas() {
  const faltas = [
    { nombre: 'Juan Pérez', curso: 'ASIR 1', faltas: 2 },
    { nombre: 'Ana López', curso: 'ASIR 1', faltas: 1 },
    { nombre: 'Carlos García', curso: 'ASIR 2', faltas: 3 },
  ];

  return (
    <div className="faltas-container">
      <h2>Listado de Faltas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Curso</th>
            <th>Cantidad de Faltas</th>
          </tr>
        </thead>
        <tbody>
          {faltas.map((falta, index) => (
            <tr key={index}>
              <td>{falta.nombre}</td>
              <td>{falta.curso}</td>
              <td>{falta.faltas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoFaltas;
