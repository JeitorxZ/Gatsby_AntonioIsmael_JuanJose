import React from "react";
import apple from "../img/apple.png";
import coca from "../img/cocacolalogo.png";
import adidas from "../img/adidas.png";
import mercedes from "../img/mercedes.png";
export default (props)=>(
    <div><footer className="banner margin">
    <div className="container">
        <h3>Marcas que confían en nosotros.</h3>
        <div className="row-centered">
            <div className="col-md-1 col-centered">
                <img className="responsive" src={apple}/>
            </div>
            <div className="col-md-2 col-centered">
                <img className="responsive" src={coca}/>
            </div>
            <div className="col-md-1 col-centered">
                <img className="responsive" src={adidas}/>
            </div>
            <div className="col-md-1 col-centered">
                <img className="responsive" src={mercedes}/>
            </div>              
        </div>
        
    </div>
    
</footer>
<footer className="derechos">
    <div>
      <h4>© 2020. Veterinaria Vargas, Reservados todos los derechos</h4>
      <a className="btn-floating btn-lg btn-tw colorTwitter" type="button" role="button"><i className="fab fa-twitter"></i></a>
      <a className="btn-floating btn-lg btn-ins colorInstagram" type="button" role="button"><i className="fab fa-instagram"></i></a>
      <a className="btn-floating btn-lg btn-fb colorFacebook" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
      <a className="btn-floating btn-lg btn-yt colorYoutube" type="button" role="button"><i className="fab fa-youtube"></i></a>       
    </div>
</footer></div>
    
);