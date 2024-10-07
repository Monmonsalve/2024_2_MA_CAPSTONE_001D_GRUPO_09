import React from 'react';
import './App.css';
import Home from "./home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './header'; // Importa el nuevo componente de encabezado
import Login from './Screens/login';
import Registro from './Screens/registro';
import Donar from './Screens/donar';
import Animales from './Screens/mascotas';

function App() {
  return (
    <div >
      <Header /> {/* Usa el encabezado aquí */}
      <main>
                <article className='info'>
                <img></img>
                <h1 className='titleArticle'>Quienes Somos?</h1>
                <h1 className='messageText'>  </h1>
                </article>
                <article className='info'>
                <h1 className='titleArticle'>Sobre nuestras mascotas</h1>
                <h1 className='messageText'> </h1>
                <img></img>
                </article>
            </main>
      <Home />
    </div>
  );
}

const AppWithRouter = () => (
  <Router>
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/Animales' element={<Animales />} />
      <Route path='/Donar' element={<Donar />} />
      <Route path='/Registro' element={<Registro />} />
      <Route path='/' element={<App />} />
    </Routes>
  </Router>
);

export default AppWithRouter;