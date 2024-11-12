// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate(`/dashboard`);
    } else {
      alert('Por favor, ingresa tus credenciales.');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div className="input-container">
        <label>Usuario:</label>
        <input 
          type="text" 
          placeholder="Ingresa tu usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className="input-container">
        <label>Contraseña:</label>
        <input 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleLogin} className="login-btn">Iniciar Sesión</button>
      <button onClick={handleRegister} className="register-btn">Registrarse</button>
    </div>
  );
}

export default Login;
