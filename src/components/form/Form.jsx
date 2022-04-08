import React, { Fragment } from "react";
import "./Form.css";
import { OptionReact } from './SelectOption'

const handleSubmit = (e)=>{
  console.log(e.target);
  e.preventDefault();
};

export function Form() {
const [input, setIput] = React.useState({
  mail:"",
  name:"",
  firstName:"",
  lastName:"",
  dateOfBirth:"0000-00-00",
  birthCertificate:"",
  curp:"",
  curpPdf:"",
  actualAddress:"",
  lastSchool:"",
  averageLastSchool:0.0,
  certificateLastSchool:"",
  secondarySchoolPdf:"",
  miniPicture:"",
  actualWork:false,
  typeSchool:false,
  telephone:"000-0000-000",
  celphone:"000-0000-000",
  dialect:false,

});

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
      <form className="form" action="POST" onSubmit={handleSubmit} id="applicant" name="applicant">
        {/* fecha de captura del formulario, este campo es coulto al usuario inicio */}
        <input type="hidden" name="captureDate" id="captureDate" value={date} />
        {/* fecha de captura del formulario, este campo es coulto al usuario fin */}
        <div className="d-flex mb-1 flex-column">
          <label htmlFor="mail" className="col col-form-label">
            Correo Electrónico <span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            type="email"
            id="mail"
            name="mail"
            placeholder="Correo Electrónico"
            value={mail}
            onChange={(e)=> setIput.mail(e.target.value)}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="names" className="col col-form-label">
            Nombre(s) <span className="mandatory">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="names"
            name="names"
            placeholder="Solo nombre(s)"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="firstName" className="col col-form-label">
            Primer apellido <span className="mandatory">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firtName"
            placeholder="Primer Apellido"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="lastName" className="col col-form-label">
            Segundo Apellido<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Segundo Apellido"
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
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="birthCertificate" className="col col-form-label">
            Acta de nacimiento (Formato PDF)
          </label>
          <input
            className="form-control"
            id="birthCertificate"
            name="birthCertificate"
            type="file"
            accept="image/*, .pdf"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="curp" className="col col-form-label">
            C.U.R.P.<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            id="curp"
            name="curp"
             placeholder="C.U.R.P."
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
            accept="image/+, .pdf"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="actualAddress" className="col col-form-label">
            Dirección actual<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            id="actualAddress"
            name="actualAddress"
            placeholder="Donde vives actualmente"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="lastSchool" className="col col-form-label">
            Escuela de procedencia<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            id="lastSchool"
            name="lastSchool"
            placeholder="¿De qué escuela egresaste?"
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
            type="number"
            min="0"
            max="100"
            placeholder="0"
            
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
            id="certificateLastSchool"
            name="certificateLastSchool"
            type="file"
            accept="image/*, .pdf"
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="secondarySchoolPdf" className="col col-form-label">
            Certificado de secundaria en formato PDF
          </label>
          <input
            className="form-control"
            id="secondarySchoolPdf"
            name="secondarySchoolPdf"
            type="file"
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
              id="actualWork"
              name="actualWork"
              type="radio"
              
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
              type="radio"
              
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
            name="celphone"
            id="celphone"
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
              type="radio"
              
            />
          </div>
          <div className="containerRadio" role="group">
            <label className="radioButtons">
              No
            </label>
            <input
              id="IDontSpeak"
              name="dialect"
              type="radio"
              
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
            type="submit"
            value="Enviar Información"
            className="btn btn-secondary"//dark
            // className="btn btn-outline-secondary"//dark
            // disabled
          />
        </div>
      </form>
    </div>
    </Fragment>
  );
}
//https://www.youtube.com/watch?v=n6i_3H3sA-Q https://es.acervolima.com/componente-de-formulario-reactjs-ui-ant-design/