import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import inicio from '../img/Inicio.png';
import "../inicio.css";
import "../navbar.css";
import descripcion from '../img/descripcion.jpeg';

function Inicio() {
  return (
    <div className="b1">
      <div className="image">
      <img src={inicio} alt="Imagen de inicio" />
      <div className="overlay">
        <div className="tex">
        <h1>Bienvenidos a Distorrink</h1>
        </div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut leo sit amet elit eleifend tincidunt eget eget dolor. Vivamus id euismod odio.</h4>
        <li className="boton1">
          <Link to="/iniciar-sesion" className="nav-link">
            Registrate ya
          </Link>
        </li>
      </div>
    </div>
    <section className="card">
      <div className="descripcion">
        <img src={descripcion} alt="Imagen de descripcion" className="d1"/>
      </div>
      <div className="texto">
      <h2>¿En que te ayudamos?</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique id mi in imperdiet. Sed vel suscipit lectus. Cras luctus nunc nisl, in vulputate ex facilisis sit amet. Cras urna tellus, cursus at orci id, faucibus consectetur enim. Fusce placerat aliquam lectus, vitae sagittis massa posuere eu. Quisque pretium vitae nisi quis fermentum. Sed iaculis nulla elit. Morbi facilisis nunc eu ultrices pellentesque.Nunc non sapien vel metus laoreet efficitur. In eu pharetra diam. Sed quis tellus venenatis, efficitur sem vitae, cursus lorem. Sed eleifend iaculis lacus, eget fermentum mauris feugiat ut. Suspendisse potenti. Sed eget vehicula dolor. Morbi purus dolor, mollis et laoreet a, bibendum sit amet odio. Curabitur vestibulum consectetur ex nec dapibus. Sed efficitur libero massa, eget ornare lectus congue non. Cras a aliquet nibh.Nullam in tellus nulla. Pellentesque hendrerit cursus eros, quis imperdiet risus ultrices id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla imperdiet erat eget ex pellentesque, vitae congue nisl lacinia. Pellentesque fringilla urna nulla, nec dictum turpis ultricies sit amet. Donec facilisis nibh dolor, sed commodo arcu dignissim id. Nam dictum lorem lacus, cursus mattis lectus sagittis eget.</h3>
      </div>
    </section>
</div>
  );
}

export default Inicio;