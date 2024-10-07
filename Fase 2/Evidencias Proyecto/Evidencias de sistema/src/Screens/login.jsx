import React from "react";
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import Home from "../home";

const Login = () => {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    const handleRegister = () => {
        navigate('/Registro');
    };

    return (
        <div>
            <header className="top-head">
                <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                    Adopción Online
                </h1>
            </header>
            <form className="formulario">
                <h1 className="title">Inicio Sesion</h1>
                <label htmlFor="rut">Rut</label>
                <input id="rut" type="text" placeholder="12345678-9" className="login-input" />
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" placeholder="************" className="login-input" />
                <button type="submit" className="button-login">Iniciar Sesión</button>
                <p>No tienes cuenta? <span onClick={handleRegister} style={{ cursor: 'pointer' }} className="login-register">Registrarse</span></p>
                <p>Olvidaste tu Contraseña?</p>
            </form>
            <Home />
        </div>
    );
};

export default Login;
