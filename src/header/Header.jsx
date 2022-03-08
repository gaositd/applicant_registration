import React from "react";
import Banner from '../images/baneerMatematicas.jpeg'
import './Header.css';

export function Header(){
  return(
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      {/* <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Simple header</span>
      </a> */}

      {/* <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul> */}
      <img
        src={Banner}
        alt="facultad de Ciencias Exactas"
        className="image"
      />
    </header>
  );
}