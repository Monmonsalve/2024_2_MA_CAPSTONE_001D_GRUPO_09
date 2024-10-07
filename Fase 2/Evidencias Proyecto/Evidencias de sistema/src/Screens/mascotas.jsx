import React from "react";
import Header from '../header'; // Asegúrate de que la ruta es correcta
import Home from "../home";

const Animales = () => {
    return (
        <div>
            <Header />
            <h1>Mascotas Disponibles</h1>
            <article className="pets">
                <img className="pets-img"></img>
                <button className="button-pets">Agendar Visita</button>
                <button className="button-pets">Adoptar</button>
                <h1 className="description-pets">Descripcion: "" </h1>
            </article>
            <Home/>
        </div>
    );
};

export default Animales;
