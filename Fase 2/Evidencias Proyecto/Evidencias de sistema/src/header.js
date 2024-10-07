import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './component/NavBar'; // Asegúrate de la ruta correcta

const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <header className="top-head">
      <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
        Adopción Online
      </h1>
      <div className="nav-options">
        <button type="button" className="Buttons" onClick={() => navigate('/Animales')}>
          Mascotas
        </button>
        <button type="button" className="Buttons" onClick={() => navigate('/Donar')}>
          Donar
        </button>
      </div>
      <div className="nav-login">
        <div className="auth-buttons">
          <button type="button" className="LoginButton" onClick={() => navigate('/Login')}>
            Iniciar Sesión
          </button>
          <button type="button" className="RegisterButton" onClick={() => navigate('/Registro')}>
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
