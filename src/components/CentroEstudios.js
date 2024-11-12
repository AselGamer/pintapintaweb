// src/components/CentroEstudios.js
import React from 'react';
import './CentroEstudios.css';

function CentroEstudios() {
  const asignaturas = [
    { nombre: 'Matemáticas', faltas: [{ alumno: 'Juan Pérez', fecha: '2024-10-01' }] },
    { nombre: 'Historia', faltas: [{ alumno: 'Carlos García', fecha: '2024-10-02' }] },
    { nombre: 'Ciencias', faltas: [{ alumno: 'Lucía Fernández', fecha: '2024-10-04' }] },
  ];

  return (
    <div className="fullscreen-container"> {/* Clase fullscreen-container */}
      <div className="centro-container container"> {/* Clase container para el contenido */}
        <h2>Centro de Estudios</h2>
        <h3>Asignaturas y Faltas de Asistencia</h3>
        {asignaturas.map((asignatura, index) => (
          <div key={index} className="asignatura-section">
            <h4>{asignatura.nombre}</h4>
            <table>
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {asignatura.faltas.map((falta, idx) => (
                  <tr key={idx}>
                    <td>{falta.alumno}</td>
                    <td>{falta.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CentroEstudios;
