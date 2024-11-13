import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={() => navigate('/')}>Registrarse</button>
    </div>
  );
}

export default Register;
