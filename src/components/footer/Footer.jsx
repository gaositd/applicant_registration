import React, { Fragment } from "react";
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
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx" target="_blank" rel="noreferrer">Sitio oficial FCE-UJED</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://ujed.mx" target="_blank" rel="noreferrer">Sitio oficial UJED</a></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a href="#" target="_blank">Servicios</a></li> */}
                  <li><i className="bx bx-chevron-right"></i> <a href="https://escolares.ujed.mx" target="_blank" rel="noreferrer">Sitio Escolares UJED</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4931" target="_blank" rel="noreferrer">Aviso de privacidad</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Nuestros Servicios</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1454" target="_blank" rel="noreferrer">Maestría en Matemática Educativa</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=1456" target="_blank" rel="noreferrer">Maestría en Estadística Aplicada</a></li>
                  <li><i className="bx bx-chevron-right"></i>Capacitación Docente</li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=5866" target="_blank" rel="noreferrer">Tienda FCE</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://face.ujed.mx/?page_id=4487" target="_blank" rel="noreferrer">Olimpiada Mexicana de Matemáticas Durango</a></li>
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