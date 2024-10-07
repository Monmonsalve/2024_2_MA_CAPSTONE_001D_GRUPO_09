import React from "react";
import '../css/registro.css'; // Asegúrate de que esta ruta es correcta
import { useNavigate } from 'react-router-dom';
import Home from "../home";

const Registro = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleTitleClick = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <div>
            <header className="top-head">
                <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                    Adopción Online
                </h1>
            </header>
            <form className="formulario" >
                <h1 className="title">Registro</h1>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Nombre" className="login-input" required />

                <label htmlFor="apellido">Apellido</label>
                <input id="apellido" type="text" placeholder="Apellido" className="login-input" required />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="example@domain.com" className="login-input" required />

                <label htmlFor="direccion">Dirección</label>
                <input id="direccion" type="text" placeholder="Dirección" className="login-input" required />

                <label htmlFor="rut">Rut</label>
                <input id="rut" type="text" placeholder="12345678-9" className="login-input" required />

                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" placeholder="************" className="login-input" required />

                <label htmlFor="repeat-password">Repetir Contraseña</label>
                <input id="repeat-password" type="password" placeholder="************" className="login-input" required />

                <label>
                    <input type="checkbox" required />
                    Acepto los términos y condiciones
                </label>

                <button type="submit" className="button-login">Registrarse</button>
                <p>Ya tienes cuenta? <span onClick={handleLogin} style={{ cursor: 'pointer' }} className="login-register">Iniciar Sesión</span></p>
            </form>
            <Home/>
        </div>
    );
};

export default Registro;
