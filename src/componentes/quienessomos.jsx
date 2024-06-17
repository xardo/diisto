import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import q1 from '../img/q1.png';
import "../quienessomos.css";
import an from '../img/an.png';
import pa from '../img/pa.png';
import os from '../img/os.png';

function QuienesSomos() {
  return (
    <div>
      <div className="image">
      <img src={q1} alt="Imagen de inicio" />
      <div className="intro">
        <div className="tex1">
        <h1>¿QUIENES SOMOS?</h1>
        </div>
        <div className="lore">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut leo sit amet elit eleifend tincidunt eget eget dolor. Vivamus id euismod odio. Nulla at tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non auctor nulla. </h4>
        </div>
        <li className="boton1">
          <Link to="/iniciar-sesion" className="nav-link">
            Registrate ya
          </Link>
        </li> 
      </div>
    </div>
    <section className="card1">
      <section className="an">
        <img src={an} alt="an" className="an1"/>
        <h1>Angel Moreno</h1>
      </section>
      <section className="pa">
        <img src={pa} alt="pa" className="pa1"/>
        <h1>Sergio Pardo</h1>
      </section>
      <section className="os">
        <img src={os} alt="os" className="os1"/>
        <h1>Julian Ospina</h1>
      </section>
    </section>
</div>
  
  );
}

export default QuienesSomos;