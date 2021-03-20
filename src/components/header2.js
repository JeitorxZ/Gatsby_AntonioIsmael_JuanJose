import React from "react";
import logo from "../img/Logo VV.png";
import gato2 from "../img/gato2.jpg";
import banner from "../img/banner_contacto2.jpg";
import {Link} from "gatsby";
export default (props)=>(
  <header className="responsive-banner">
    
    
    <div id="citas">
      <span>
          Citas-956987654 Urgencias 24H-956875467. Calle Poeta Rafael Alberti, El Puerto de Santa María(Cádiz) España.
      </span>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <img src={logo} width="15%" height="15%" className="d-inline-block align-top" alt="Veterinaria Vargas"/> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link fuentebanner space" href="home.html"><span className="fuentebanner"><em>Clínica Veterinaria Vargas</em></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Tienda.html"><span className="fuentebanner space2">Tienda</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link fuentebanner" href="Nosotros.html"><span className="fuentebanner space2">Nosotros</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link fuentebanner" href="Galeria.html"><span className="fuentebanner space2">Galería</span></a>              
          </li>
          <li className="nav-item dropdown">
           <a className="nav-link fuentebanner"><span className="fuentebanner space2"><Link to="nosotros">Contacto</Link></span></a>              
          </li>
          
        </ul>
      </div>
    </nav>
   

    <div>
      <img src={banner} className="img-responsive w100" alt="Banner Contacto"/>          
    </div>

  </header> 
);
