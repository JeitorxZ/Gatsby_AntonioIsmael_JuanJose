import React from "react";
export default (props)=>(
    <div className="row margin container-fluid">
      <div className="col-lg">
        <i id="center" className="fas fa-heart fa-8x color"></i>
        <p id="encabezado">Medicina y Cirugía</p>
        <p id="texto">Medicina Interna, Medicina Preventiva, Geriátrica y Cirugía general</p>
      </div>
      <div className="col-lg"  >
        <i id="center" className="fas fa-user-md fa-8x color"></i> 
        <p id="encabezado">Especialistas</p>
        <p id="texto">Medina Felina, Oftalmología, Dermatología, Cardiología, Odontología, Traumatología</p>
      </div>
      <div className="col-lg"  >
        <i id="center" className="fas fa-flask fa-8x color"></i>
        <p id="encabezado">Lab. Y Diagnostico por Imagen</p>
        <p id="texto">Medina Felina, Oftalmología, Dermatología, Cardiología, Odontología, Traumatología</p>
      </div>
        <div className="col-lg"  >         
        <i id="center" className="fas fa-cut fa-8x color"></i>
        <p id="encabezado">Peluquería</p>
        <p id="texto">Peluquería Canina y Tienda Especializada</p>
      </div>
    </div>  
);
