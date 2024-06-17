import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/inicio';
import QuienesSomos from './componentes/quienessomos';
import "./navbar.css";
import Myv from "./componentes/myv";
import Contactanos from "./componentes/contactanos";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <section className="disto">
        <Link to="/Inicio" className="nav__brand">
          <h3>Distorrink</h3>
        </Link>
      </section>
      <ul className={active}>
        <li className="nav-item" >
          <Link to="/Inicio" className="nav-link mx-lg-2">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/quienessomos" className="nav-link mx-lg-2">
            ¿Quienes somos?
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myv" className="nav-link mx-lg-2">
            Mision y vision
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactanos" className="nav-link mx-lg-2">
            Contactanos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/para-empresas" className="nav-link mx-lg-2">
            Para empresas
          </Link>
        </li>
        <li className="boton2">
          <Link to="/iniciar-sesion" className="nav-link">
            Iniciar sesion
          </Link>
        </li>
      </ul>
      <li className="boton">
          <Link to="/iniciar-sesion" className="nav-link">
            Iniciar sesion
          </Link>
        </li>
      <div onClick={navToggle} className={icon}>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/myv" element={<Myv />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;