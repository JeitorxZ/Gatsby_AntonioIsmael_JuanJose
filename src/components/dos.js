import React from "react";
import logo from "../img/Logo VV.png";
export default (props)=>(
  <div> <div className="margin container-fluid">
  <h2 id="titulo">Servicios de <span id="color">Clínica Veterinaria Vargas</span></h2>
  <div className="row">
    <div className="col-lg">
      <h1><i className="fas fa-star fa-2x color"></i><span> 50 Años de Experiencia</span></h1>
      <p id="tdescrip">CVE te ofrece uno delos mejores servicios de la zona con una gran relación calidad-precio, lo que nos convierte en uno de los referentes mas competitivos del mercado</p>
    </div>
    <div className="col-lg">
      <h1><i className="fas fa-heart fa-2x color"></i> Servicios Veterinarios</h1>
      <p id="tdescrip">CVE cuenta con una gran variedad de servicios médicos veterinarios de la mejor calidad que garantizan así el completo bienestar de tu mascota </p>
    </div>
    <div className="col-lg">
      <h1><i className="fas fa-users fa-2x color"></i> Personal cualificado</h1>
      <p id="tdescrip">Nuestro centro está apoyado en un personal altamente cualificado, ético y comprometido con la excelencia en la calidad del servicio y una inmejorable atención personal.</p>
    </div>    
  </div>

  <div className="row" id="ultimo">
    <div className="col-lg">
      <h1><i className="fas fa-cart-arrow-down fa-2x color"></i> Tienda Especializada</h1>
      <p id="tdescrip">CVE te ofrece uno delos mejores servicios de la zona con una gran relación calidad-precio, lo que nos convierte en uno de los referentes mas competitivos del mercado</p>
    </div>
    <div className="col-lg">
      <h1><i className="fas fa-shower fa-2x color"></i> Peluqueria</h1>
      <p id="tdescrip">CVE te ofrece uno delos mejores servicios de la zona con una gran relación calidad-precio, lo que nos convierte en uno de los referentes mas competitivos del mercado</p>
    </div>
    <div className="col-lg">
      <img src={logo} className="img-responsive logo"/>
    </div>    	
  </div>
</div></div>
 
);