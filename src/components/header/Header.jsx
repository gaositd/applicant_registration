import React from "react";
import Banner from '../images/baneerMatematicas.jpeg'
import './Header.css';

export function Header(){
  return(
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <img
        src={Banner}
        alt="facultad de Ciencias Exactas"
        className="image"
      />
    </header>
  );
}