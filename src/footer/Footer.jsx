import React from "react";
import { Link } from "react-router-dom";
import privacy from '../images/privacy-policy-information-computer-icons-freepng.es.png'
import './Footer.css';

export function Footer(){
  return(
    <div className="d-flex justify-content-center">
      <h6>Al enviar el formulario aceptas el siguiente Acuerdo de Privacidad <a href="https://face.ujed.mx/?page_id=4931" target="_blank" rel="noopener noreferrer"><img src={privacy} className="privacy" alt="ACuerdo de confidencialidad"/></a></h6>
    </div>
  );
}
/*
para usar solo react y no elementos html es necesario hacer una funcion con el evento onclick

const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };
<button onClick={handleClick}>Twitter</button>
*/