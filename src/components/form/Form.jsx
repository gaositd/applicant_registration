import React, { Fragment } from "react";
import "./Form.css";
import { OptionReact } from './SelectOption'

export function Form() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <Fragment>
    <div className="container-fluid">
      <div>
        <p className="lead">
          Registro de aspirantes a la Licenciatura en Matemáticas, FCE-UJED
          Semestre B - 2022 ¡Bienvenidas y bienvenidos al formulario de
          registro para el proceso de selección e ingreso a la Licenciatura en
          Matemáticas que ofrece la Facultad de Ciencias Exactas de la
          Universidad Juárez del Estado de Durango!
        </p>
        <hr />
        Se registrarán tus datos personales cuando subas archivos y envíes este
        formulario. El correo electrónico que ingresas forma parte de las
        respuesta. <span className="mandatory">Todos los campos con este símbolo "*" son obligatorios</span>
      </div>
      <hr />
      <form className="form">
        {/* fecha de captura del formulario, este campo es coulto al usuario inicio */}
        <input type="hidden" name="captureDate" id="captureDate" value={date} />
        {/* fecha de captura del formulario, este campo es coulto al usuario fin */}
        <div className="d-flex mb-1 flex-column">
          <label htmlFor="mail" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="names" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="firstName" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="lastName" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="dateOfBirth" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="birthCertificate" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="curp" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="curpPdf" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="actualAddress" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="lastSchool" className="col col-form-label">
            Escuela de procedencia<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="lastSchool"
            name="lastSchool"
            /*value='{username}'*/ placeholder="¿De qué escuela egresaste?"
            required
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="averageLastSchool" className="col col-form-label">
            Promedio de certificado de bachillerato (sí aún no terminas poner el promedio de 1ro a 5to semestre)
            <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="averageLastSchool"
            name="averageLastSchool"
            /* value='{username}'*/ type="number"
            min="0"
            max="100"
            placeholder="0"
            required
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="stateOfSchool" className="col col-form-label">
            Estado de procedencia de la escuela<span className="mandatory">*</span>
          </label>
          <OptionReact type="schoolstate" />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="townOfSchool" className="col col-form-label">
            Municipio de la escuela<span className="mandatory">*</span>
          </label>
          {/* <input type="text" name="townOfSchool" id="townOfSchool" placeholder="Municipio" /> */}
          <OptionReact type="schoolMunicipal" stateId="10" />
        </div>


        <div className="d-flex mb-1 flex-column">
          <label
            htmlFor="certificateLastSchool"
            className="col col-form-label"
          >
            Certificado o constancia con calificaciones de
            1ro a 5to semestre
          </label>
          <input
            className="form-control"
            id="certificaetLastSchool"
            name="certificateLastSchool"
            /* value='{username}'*/ type="file"
            accept="image/*, .pdf"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="secondarySchool" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="miniPicture" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="marital_statuses" className="col col-form-label">
            Estado civil
          </label>
          <OptionReact type="marital_statuses"/>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="gender" className="col col-form-label">
            Sexo<span className="mandatory">*</span>
          </label>
          <OptionReact type="genders"/>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="actualWork" className="col col-form-label">
            ¿Trabajas?<span className="mandatory">*</span>
          </label>
          <div className="containerRadio" role="group">
            <label className="radioButtons">
              Si trabajo
            </label>
            <input
              id="IWork"
              name="work"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="containerRadio" role="group">
            <label className="radioButtons">
              No trabajo
            </label>
            <input
              id="IDontWork"
              name="work"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="typeSchool" className="col col-form-label">
            Estudie en escuela<span className="mandatory">*</span>
          </label>
          <div className="containerRadio" role="group">
            <label className="radioButtons" htmlFor="typeSchool">
              Privada
            </label>
            <input
              id="private"
              name="typeSchool"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="containerRadio" role="group">
            <label className="radioButtons" htmlFor="typeSchool">
              Pública
            </label>
            <input
              id="public"
              name="typeSchool"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="telephone" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="celphone" className="col col-form-label">
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

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="states" className="col col-form-label">
            Estado de procedencia<span className="mandatory">*</span>
          </label>
          <OptionReact type="birthState" />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="town" className="col col-form-label">
            Municipio<span className="mandatory">*</span>
          </label>
          {/* <input type="text" name="town" id="town" placeholder="Municipio" /> */}
          <OptionReact type="birthMunicipal" stateId="10" />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="dialect" className="col col-form-label">
            ¿Hablas algún dialecto?<span className="mandatory">*</span>
          </label>
          <div className="containerRadio" role="group">
            <label className="radioButtons">
              Si
            </label>
            <input
              id="speak"
              name="dialect"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
          <div className="containerRadio" role="group">
            <label className="radioButtons">
              No
            </label>
            <input
              id="IDontSpeak"
              name="dialect"
              /*value='{username}'*/ type="radio"
              required
            />
          </div>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="disability" className="col col-form-label">
            Discapacidad:<span className="mandatory">*</span>
          </label>
          <OptionReact type="disabilities"/>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <input
            // type="submit"
            type="button"
            value="Enviar Información"
            className="btn btn-outline-secondary"//dark
            // disabled
          />
        </div>
      </form>
    </div>
    </Fragment>
  );
}
