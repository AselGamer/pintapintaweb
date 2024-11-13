import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectCourse() {
  const navigate = useNavigate();

  const handleCourseSelection = (curso) => {
    navigate(`/curso/${curso}`);
  };

  return (
    <div className="centered-container">
      <div className="container">
        <h2>Selecciona un Curso</h2>
        <button onClick={() => handleCourseSelection('Asir1')}>Curso ASIR1</button>
        <button onClick={() => handleCourseSelection('Asir2')}>Curso ASIR2</button>
      </div>
    </div>
  );
}

export default SelectCourse;
