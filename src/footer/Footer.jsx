import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import privacy from '../images/privacy-policy-information-computer-icons-freepng.es.png'
import './Footer.css';

export function Footer(){
  return(
    <Fragment>
      <footer id="footer" className="footerBackground">
        <div className="d-flex justify-content-center">
          <h6>Al enviar el formulario aceptas el siguiente Acuerdo de Privacidad <a href="https://face.ujed.mx/?page_id=4931" target="_blank" rel="noopener noreferrer"><img src={privacy} className="privacy" alt="ACuerdo de confidencialidad"/></a></h6>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>Facultad de Ciencias Exactas</h3>
                <p>
                  Calle Lic. Héctor García Calderón 210 <br />
                  Fracc. SARH,  Durango, Dgo. C.P. 34113<br />
                  México <br /><br />
                  <strong>Teléfono:</strong> 618 827 13 50<br />
                    <strong>Correo:</strong> <a href="mailto:academica.fce@ujed.mx"> academica.fce@ujed.mx</a><br /><b />
                </p>
              </div>
              
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Sitios de interés</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx" target="_blank">Sitio oficial FCE-UJED</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://ujed.mx" target="_blank">Sitio oficial UJED</a></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a href="#" target="_blank">Servicios</a></li> */}
                  <li><i className="bx bx-chevron-right"></i> <a href="https://escolares.ujed.mx" target="_blank">Sitio Escolares UJED</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4931" target="_blank">Aviso de privacidad</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Nuestros Servicios</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1454" target="_blank">Maestría en Matemática Educativa</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1456" target="_blank">Maestría en Estadística Aplicada</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Capacitación Docente</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=5866" target="_blank">Tienda FCE</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4487" target="_blank">Olimpiada Mexicana de Matemáticas Durango</a></li>
                </ul>
              </div>

              {/* <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Más información</h4>
                <p>Si deseas recibir información extra de la oferta educativa que ofrece la Facultad de Ciencias Exactas de la UJED escribe tu correo electrónico</p>
                <form action="" method="post">
                  <input type="email" name="email" disabled={true}  /><input type="submit" value="Suscribirse" disabled={true} />
                  <p className="disabledTextInput">Temporalmente fuera de servicio</p>
                </form>
              </div> */}

            </div>
          </div>
        </div>

      </footer>
  </Fragment>
  );
}
/*
para usar solo react y no elementos html es necesario hacer una funcion con el evento onclick

const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };
<button onClick={handleClick}>Twitter</button>
*/
{/* 
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Facultad de Ciencias Exactas</h3>
            <p>
              Calle Lic. Héctor García Calderón 210 <br />
              Fracc. SARH,  Durango, Dgo. C.P. 34113<br />
              México <br /><br />
              <strong>Teléfono:</strong> 618 827 13 50<br />
                <strong>Correo:</strong> <a href="mailto:academica.fce@ujed.mx"> academica.fce@ujed.mx</a><br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Sitios de interés</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx" target="_blank">Sitio oficial FCE-UJED</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://ujed.mx" target="_blank">Sitio oficial UJED</a></li>
              <!--<li><i className="bx bx-chevron-right"></i> <a href="#" target="_blank">Servicios</a></li>-->
              <li><i className="bx bx-chevron-right"></i> <a href="https://escolares.ujed.mx" target="_blank">Sitio Escolares UJED</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4931" target="_blank">Aviso de privacidad</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1454" target="_blank">Maestría en Matemática Educativa</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1456" target="_blank">Maestría en Estadística Aplicada</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Capacitación Docente</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=5866" target="_blank">Tienda FCE</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4487" target="_blank">Olimpiada Mexicana de Matemáticas Durango</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Más información</h4>
            <p>Si deseas recibir información extra de la oferta educativa que ofrece la Facultad de Ciencias Exactas de la UJED escribe tu correo electrónico</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Suscribirse">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>Facultad de Ciencias Exactas - UJED</span></strong>. Todos los derechos reservados
        </div>
        <div className="credits">
          Diseño: <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-3">
        <!--<a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>-->
        <a href="https://www.facebook.com/Facultad.de.ciencias.exactas.ujed" className="facebook" target="_blank"><i className="bx bxl-facebook"></i></a>
        <!--<a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>-->
        <!--<a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>-->
      </div>
    </div> */}