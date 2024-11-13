import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerEntregasPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Entregas</h2>
      <p>Lista de entregas realizadas en el curso.</p>
      <button onClick={() => navigate('/poner-notas')}>Poner Notas</button>
    </div>
  );
}

export default VerEntregasPage;
