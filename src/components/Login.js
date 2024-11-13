import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/seleccionar-curso');  // Redirige después de autenticarse
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={() => navigate('/register')} className="secondary-button">Registrarse</button>
    </div>
  );
}

export default Login;
