import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

export function Form() {
  return (
    <Fragment>
      <div>
        <p className="lead">
          Registro de aspirantes a la Licenciatura en Matemáticas, FCE-UJED
          Semestre B - 2022 ¡Bienvenidas y bienvenidos! Al formulario de
          registro para el proceso de selección e ingreso a la Licenciatura en
          Matemáticas que ofrece la Facultad de Ciencias Exactas de la
          Universidad Juárez del Estado de Durango.
        </p>
        <hr />
        Se registrarán tus datos personales cuando subas archivos y envíes este
        formulario. El correo electrónico que ingresas forma parte de las
        respuesta. <span className="mandatory"> Obligatorio *</span>
      </div>
      <hr />
      <form className="form row">
        <div className="d-flex mb-1">
          <label htmlFor="mail" className="col-3 col-form-label">
            Correo Electrónico <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="mail"
            name="mail"
            /* value='{username}' */ placeholder="Correo Electrónico"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="names" className="col-3 col-form-label">
            Nombre(s) <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="names"
            name="names"
            /* value='{username}'*/ placeholder="Solo nombre(s)"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="firstName" className="col-3 col-form-label">
            Primer apellido <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="firstName"
            name="firtName"
            /* value='{username}'*/ placeholder="Primer Apellido"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="lastName" className="col-3 col-form-label">
            Segundo Apellido<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            /* value='{username}'*/ placeholder="Segundo Apellido"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="dateOfBirth" className="col-3 col-form-label">
            Fecha de nacimiento<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            /* value='{username}'*/ required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="birthCertificate" className="col-3 col-form-label">
            Acta de nacimiento (Formato PDF)
          </label>
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="file"
            accept="image/*, .pdf" /*value='{username}'*/
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="curp" className="col-3 col-form-label">
            C.U.R.P.<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="curp"
            name="curp"
            /* value='{username}'*/ placeholder="C.U.R.P."
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="curpPdf" className="col-3 col-form-label">
            CURP en formato PDF
          </label>
          <input
            className="form-control"
            id="curpPdf"
            name="curpPdf"
            type="file"
            accept="image/+, .pdf" /*value='{username}'*/
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="actualAddress" className="col-3 col-form-label">
            Dirección actual<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="actualAddress"
            name="actualAddress"
            /*value='{username}'*/ placeholder="Donde vives actualmente"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="lastSchool" className="col-3 col-form-label">
            Escuela de procedencia<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="lastSchool"
            name="lastSchool"
            /*value='{username}'*/ placeholder="¿De qué escuela vienes"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="averageLastSchool" className="col-3 col-form-label">
            Promedio de certificado de bachillerato (sí aún no terminas tu
            bachillerato poner el promedio de 1ro a 5to semestre)
            <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="averageLastSchool"
            name="averageLastSchool"
            /* value='{username}'*/ type="number"
            min="0"
            max="10"
            placeholder="0"
            required
          />
        </div>

        <div className="d-flex mb-1">
          <label
            htmlFor="certificateLastSchool"
            className="col-3 col-form-label"
          >
            Certificado de bachillerato o constancia con las calificaciones de
            1ro a 5to semenstre
          </label>
          <input
            className="form-control"
            id="certificaetLastSchool"
            name="certificateLastSchool"
            /* value='{username}'*/ type="file"
            accept="image/*, .pdf"
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="secondarySchool" className="col-3 col-form-label">
            Certificado de secundaria en formato PDF
          </label>
          <input
            className="form-control"
            id="seconcadrySchool"
            name="secondarySchool"
            /*value='{username}'*/ type="file"
            accept="image/*, .pdf"
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="miniPicture" className="col-3 col-form-label">
            Subir fotografía tamaño infantil
          </label>
          <input
            className="form-control"
            id="miniPicture"
            name="miniPicture"
            type="file"
            accept="image/*, .png, ,jpeg, .jpg"
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="maritalStatus" className="col-3 col-form-label">
            Estado civil
          </label>
          <div className="btn-group" role="group">
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Soltero(a)
            </label>
            <input
              className="form-check-input"
              id="single"
              autoComplete="off"
              name="maritalStatus"
              /*value='{username}'*/ type="radio"
            />
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-check-input"
              id="married"
              autoComplete="off"
              type="radio"
              name="maritalStatus" /*value={username}*/
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Casado
            </label>
          </div>
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="actualWork" className="col-3 col-form-label">
            Sexo<span className="mandatory">*</span>
          </label>
          <div className="btn-group" role="group">
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Femenino
            </label>
            <input
              className="form-check-input"
              id="IWork"
              name="work"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-check-input"
              id="IdontWork"
              type="radio"
              name="work"
              /*value={username}*/ required
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Masculino
            </label>
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-check-input"
              id="IdontWork"
              type="radio"
              name="work"
              /*value={username}*/ required
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Prefiero no decirlo
            </label>
          </div>
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="actualWork" className="col-3 col-form-label">
            ¿Trabajas?<span className="mandatory">*</span>
          </label>
          <div className="btn-group" role="group">
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Si trabajo
            </label>
            <input
              className="form-check-input"
              id="IWork"
              name="work"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-check-input"
              id="IdontWork"
              type="radio"
              name="work"
              /*value={username}*/ required
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              No trabajo
            </label>
          </div>
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="typeSchool" className="col-3 col-form-label">
            Estudie en escuela<span className="mandatory">*</span>
          </label>
          <div className="btn-group" role="group">
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Privada
            </label>
            <input
              className="form-control"
              id="private"
              name="typeSchool"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-control"
              id="public"
              type="radio"
              name="typeSchool"
              /*value={username}*/ required
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Pública
            </label>
          </div>
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="telephone" className="col-3 col-form-label">
            Teléfono
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            size="20"
            max="13"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="celphone" className="col-3 col-form-label">
            Teléfono celular
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            size="20"
            max="13"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="state" className="col-3 col-form-label">
            Estado de procedencia<span className="mandatory">*</span>
          </label>
          <select name="state" className="form-select" required>
            <option value="no">Seleccione uno...</option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="CDMX">Ciudad de México</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Estado de México">Estado de México</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </select>
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="town" className="col-3 col-form-label">
            Municipio<span className="mandatory">*</span>
          </label>
          <input type="text" name="town" id="town" placeholder="Municipio" />
        </div>

        <div className="d-flex mb-1">
          <label htmlFor="dialect" className="col-3 col-form-label">
            ¿Hablas alguna lengia indigena?<span className="mandatory">*</span>
          </label>
          <div className="btn-group" role="group">
            <label className="btn btn-outline-secondary" htmlFor="dialectic">
              Si
            </label>
            <input
              className="form-control"
              id="IWork"
              name="dialect"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="btn-group" role="group">
            <input
              className="form-control"
              id="IdontWork"
              type="radio"
              name="dialect"
              /*value={username}*/ required
            />
            <label className="btn btn-outline-secondary" htmlFor="dialectic">
              No
            </label>
          </div>
        </div>

        <div className="d-flex mb-3">
          <label htmlFor="disability">
            Discapacidad:<span className="mandatory">*</span>
          </label>
          
          <div className="disabilityFiveElements">
          
            <div className="form-check d-flex justify-content-between">
              <label htmlFor="noOne">Ninguna</label>
              <input
                type="checkbox"
                className="checkboxes"
                name="noOne"
                id="noOne"
                value=""
              />
            </div>

            <div className="form-check labelCheck">
              <label htmlFor="disabilityToSee">
                Discapacidad para ver
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="disabilityToSee"
                  id="disabilityToSee"
                />
              </label>
            </div>
            
            <div className="form-check">
              <label htmlFor="hearingImpairment">
                Discapacidad oir
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="hearingImpairment"
                  id="hearingImpairment"
                />
              </label>
            </div>

            <div className="form-check labelCheck">
              <label htmlFor="speechImpairment">
                Discapacidad para hablar (mudez), tartamudez
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="speechImpairment"
                  id="speechImpairment"
                />
              </label>
            </div>

            <div className="form-check d-flex justify-content-between">
              <label htmlFor="upperDisability">
                Discapacidad de las extremidades superiores
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="upperDisability"
                  id="upperDisability"
                />
              </label>
            </div>

          </div>
          
          <div className="disabilityFiveElements">
            <div className="form-check d-flex justify-content-between">
              <label htmlFor="lowerDisability">
                Discapacidad de las extremidades iferiores, tronco, cuello o cabeza
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="lowerDisability"
                  id="lowerDisability"
                />
              </label>
            </div>

            <div className="form-check d-flex justify-content-between">
              <label htmlFor="languageDisabilities">
                Discapacidad de la comunicación y comprensión del lenguaje
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="languageDisabilities"
                  id="languageDisabilities"
                />
              </label>
            </div>
            
            <div className="form-check d-flex justify-content-between">
              <label htmlFor="OtherDisabilities">
                Otra(s) Discapacidad(es)
                <input
                  type="checkbox"
                  className="checkboxes"
                  name="OtherDisabilities"
                  id="OtherDisabilities"
                />
                <input
                  type="text"
                  name="OtherDisabilitiesTxt"
                  id="OtherDisabilitiesTxt"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Enviar Información"
            className="secondary"
            disabled
          />
        </div>
      </form>
    </Fragment>
  );
}
