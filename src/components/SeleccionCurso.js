import React from "react";
import "./SeleccionCurso.css"; // Asegúrate de tener el archivo de estilos correcto

// Definir los cursos disponibles
const cursos = ['Asir1', 'Asir2', 'Dam1', 'Dam2'];

function SeleccionarCurso({ onCursoSeleccionado }) {
    return (
        <div className="seleccion-curso-container">
            <h2>Selecciona un curso</h2>
            <div className="cursos-grid">
                {cursos.map((curso, index) => (
                    <button 
                        key={index} 
                        className="curso-button" 
                        onClick={() => onCursoSeleccionado(curso)}
                    >
                        {curso}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SeleccionarCurso;
