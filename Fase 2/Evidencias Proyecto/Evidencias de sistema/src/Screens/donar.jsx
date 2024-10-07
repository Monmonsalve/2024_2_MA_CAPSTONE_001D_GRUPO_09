import React from "react";
import Header from "../header";
import "../css/donacion.css"
import Home from "../home";

const Donar = () =>{
    return (
        <div>
            <Header/>
            <article className="Donacion">
                <h1 className="title">Donacion</h1>
                <h1 className="info">Usuario:</h1>
                <h1 className="info">Mensaje:</h1>
                <input className="input" type="text"></input>
                <h1 className="info">Cantidad:</h1>
                <input type="number" min="1000" step="any"/>
                <button className="button-donacion"><span>Continuar</span></button>
            </article>
            <Home/>
        </div>
    )
};

export default Donar