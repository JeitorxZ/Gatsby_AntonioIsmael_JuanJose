import React from "react";
import Header2 from "../components/header2";
import Footer from "../components/footer";
import telefono from "../img/telefono.png";
import pnge from "../img/pngegg.png";
import tijeras from "../img/tijeras.png";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default ()=>(
<div>
    <Header2></Header2>
    
    <div className="container">
    <p id="encabezado2">¿Dónde encontrarnos?</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25624.255258252524!2d-6.248595748645416!3d36.601540569340365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dd021173d3f65%3A0x2d90da52b414124b!2sIES%20Mar%20de%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1606865772580!5m2!1ses!2ses" 
    width="100%" height="600px" frameborder="1" allowfullscreen="true" aria-hidden="false" tabindex="0">
    </iframe>
  </div>

<div className="container CServicios">
    <div className="row">
      <img src={telefono} width="80px" height="80px" className="d-inline-block align-top"/> 
      <h3 className="consulta">Consulta</h3>
      <p className="tlfConsulta">956987654</p>
      
      <h3 className="exp">50 años de Experiencia</h3>
      <img src={pnge} width="170px" height="40px" className="d-inline-block align-top expimg"/> 
      
     <div className="space">
      <img src={telefono} width="80px" height="80px" className="d-inline-block align-top"/> 
      <h3 className="consulta">Consulta</h3>
      <p className="tlfConsulta">956987654</p>           
    </div>
   </div>
</div>
  
  


  <div className="container margin">    
    <div className="row">
        <div className="col-sm">
            <img className="responsive" width="80px" height="80px" src={telefono} alt="Telefono"/><span className="estiloNum">956987654</span>
            
        </div>        
        <div className="col-sm responsive posicion">
          <h3 className="">50 años de Experiencia</h3>   
          <img className="responsive move" width="170px" height="40px" style={{alignItems : 'center'}} src={pnge} alt="Estrellas"/>                   
        </div>
        <div className="col-sm-3">
            <img className="responsive" width="80px" height="80px" src={tijeras} alt="Tijeras"/><span className="estiloNum">956985623</span>       
        </div>
    </div>
    </div>
    






  <div className="container">
    <p id="encabezado2">Envíanos un Mensaje</p>
    <p>Comunícanos por esta vía cualquier duda o solicita alguna información relacionada que necesites. La información que suministres por esta vía esta sujete a nuestra Política de Privacidad.</p>
  </div>  



  <div className="container margin">
    <form role="form">
      <fieldset> 
          <div className="form-group">
            <label for="usuario">Nombre</label>
            <input type="text" className="form-control" id="usuario" required/>
          </div>
          <div className="form-group">
            <label for="clave">Correo electrónico</label>
            <input className="form-control" type="text" id="correo" name="correo" pattern="^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$" title="Formato texto@servidor.loquesea" required/>
          </div>
          <div className="form-group">
            <label for="clave">Asunto</label>
            <input type="text" className="form-control" id="clave" required/>
          </div>
          <div className="form-group">
            <label for="clave">Mensaje</label>
            <input type="text" className="form-control" id="clave" required /> 
          </div>
       </fieldset>  
       <div className="checkbox">
        <label>
          <input type="checkbox" value="" enabled required/>
          *Acepta las Políticas de Privacidad de la Empresa
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-dark">Enviar</button>
      </div>                   
    </form> 
  
  </div>
    
 
  
    
    
    <Footer></Footer>




</div>


);