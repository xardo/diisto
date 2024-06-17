import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "../contactanos.css"

const Contactanos = () => {
  return (
    <div className="te">
    <h1 className="i1">¿Tienes alguna duda?</h1>
    <h1 className="i1">Contactanos</h1>
    <div className="c1">
        <h3 className="t1">Nombre:</h3>
        <input type="text" placeholder="Nombre" className="p1"/>
    </div>
    <div className="c2">
        <h3 className="t2">Correo Electronico:</h3>
        <input type="text" placeholder="Correo Electronico" className="p2"/>
    </div>
    <div className="c3">
        <h3 className="t3">Numero de telefono:</h3>
        <input type="text" placeholder="Numero de Telefono" className="p3"/>
    </div>
    <div className="c4">
        <h3 className="t4">Mensaje:</h3>
        <textarea name="comentario" id="#" placeholder="Mensaje" className="p4"></textarea>
    </div>
        <Link to="/iniciar-sesion" className="botonc">
            Enviar
        </Link>
    </div>
  );
};

export default Contactanos;