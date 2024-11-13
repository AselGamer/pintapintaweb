import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CursoPage() {
  const { curso } = useParams();  // Obtener el nombre del curso desde la URL

  return (
    <div>
      <h1>Estás en el curso: {curso}</h1>
      <div>
        <button>
          <Link to={`/curso/${curso}/crear-tarea`}>Crear Tarea</Link>
        </button>
        <button>
          <Link to={`/curso/${curso}/ver-entregas`}>Ver Entregas</Link>
        </button>
        <button>
          <Link to={`/curso/${curso}/ver-usuarios`}>Ver Usuarios</Link>
        </button>
        <button>
          <Link to={`/curso/${curso}/ver-ausencias`}>Ver Ausencias</Link>
        </button>
      </div>
    </div>
  );
}

export default CursoPage;
