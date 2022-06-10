// @ts-nocheck
import React, { Fragment } from "react";
import "./Form.css";
import { OptionReact } from './SelectOption'
// import {  useSelector,  } from "react-redux";

let errors = {
  mail:true,
  names:true,
  firstName:true,
  dateOfBirth:true,
  birthCertificate: true,
  curp: true,
  curpPdf:true,
  actualAddress:true,
  stateOfSchool:true,
  gender:true,
  actualWork:true,
  typeSchool:true,
  states:true,
  dialect:true,
  disability:true,
};

export function validate(input, e){

  //validate e mail
  // const reEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const reEmail = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/);
  if(!input.mail){ errors.mail = true; }
  else if(!reEmail.test(input.mail) ){ errors.mail = false; }
  else{ errors.mail = true; }

  //validate Name
  if(!input.names){ errors.names = true; }
  else if(input.names.length === 1){ errors.names = false; }
  else{errors.names = true;}

  //validate firts name
  if(!input.firstName){ errors.firstName = true; }
  if(input.firstName.length  <= 2){ errors.firstName = false; }
  else{errors.firstName = true;}

  //validate last name
  if(!input.lastName){ errors.lastName = true; }
  if(!input.lastName){ errors.lastName = false; }
  else if(!input.lastName.length <= 3){ errors.lastName = false; }
  { errors.lastName = true; }

  //validate date of birth
  const reDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if(!input.dateOfBirth){ errors.dateOfBirth = true; }
  if(!reDate.test(input.dateOfBirth)){ errors.dateOfBirth = false;}
  else{ errors.dateOfBirth = true; }

  //validate certifacate
  let certificatePFD = input.birthCertificate.toLowerCase();
  if(!certificatePFD){ errors.birthCertificate = false}
  if(certificatePFD){
    if(certificatePFD.substr(-3) !== "pdf"){ errors.birthCertificate = false; }
    else{ errors.birthCertificate = true; }
  }

  //validate curp //https://codepen.io/EduTel/pen/zWybLy
  const reCurp = RegExp(/^[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]$/);
  const upperCurp = input.curp.toUpperCase();
  if(!reCurp.test(upperCurp)){ errors.curp = false; }
  else{ errors.curp = true; }

  //validate curp certifacete
  const curpPDF = input.curpPdf.toLowerCase();
  if(!curpPDF){ errors.curpPdf = false; }
  if(curpPDF.substr(-3) !== "pdf"){ errors.curpPdf = false; }
  else{ errors.curpPdf = true; }

  //validate actual address
  if(!input.actualAddress || input.actualAddress.length <= 1){ errors.actualAddress = false; }
  else{ errors.actualAddress = true; }

  // //validate state of school
  if(!input.stateOfSchool || input.stateOfSchool.value === "noOne"){ errors.stateOfSchool = false; }
  else { errors.stateOfSchool = true; }

  //validate town of school
  // if(!input.townOfSchool || input.townOfSchool.value === "noOne"){ errors.townOfSchool = true;}

  // //cretificate format qualifications and secondary certificate
  // if(input.certificateLastSchool){
  //   const certificateLastSchool = certificateLastSchool.toLowerCase();
  //   const certificateLastSchoolPDF = certificateLastSchool.substr(-3);
  //   if(certificateLastSchoolPDF !== 'pdf'){ errors.certificateLastSchool("Formato incorrecto, deber ser PDF")}
  // }

  // if(input.secondarySchoolPdf){
  //   const secondarySchoolPdf = secondarySchoolPdf.toLowerCase();
  //   const secondarySchoolPdfPDF = secondarySchoolPdf.substr(-3);
  //   if(secondarySchoolPdfPDF !== 'pdf'){ errors.secondarySchoolPdf("Formato incorrecto, deber ser PDF")}
  // }

  // //validate minipicture
  // if(input.miniPicture){
  //   const miniPicture = miniPicture.toLowerCase();
  //   const miniPictureImg = miniPicture.substr(-3);
  //   if(miniPictureImg !== 'png' || miniPictureImg !== 'jpg'){ errors.miniPicture("Formato incorrecto, deber ser PNG o JPG")}
  // }

  // //validate gender
  if(!input.gender){ errors.gender = false; }
  else { errors.gender = true; }

  // //validate actualWork
  if(e.target.id === "actualWork" ||
     e.target.id === 'IDontWork'){
    errors.actualWork = true;
  }

  // //validate type school
  if(e.target.id === "private" ||
     e.target.id === 'public'){
    errors.typeSchool = true;
  }

  // //validate phone
  if(input.telephone || input.cellphone){
    const phoneRegex = RegExp(/[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
    if(!phoneRegex.test(input.telephone)) errors.telephone = false;
    else errors.telephone = true;
    
    if(!phoneRegex.test(input.cellphone)) errors.cellphone = false;
    else errors.cellphone = true;
  }

  // //validate mexican states
  if(!input.states){ errors.states = false; }
  else errors.states = true;

  // //validate town mexican states
  // if(!input.town) errors.town("No has seleccionado el municipo donde naciste")

  // //validate dialec
  if(e.target.id === "speak" ||
     e.target.id === 'IDontWork'){
    errors.dialect = true;
  }

  // //validate disability
  if(!input.disability){ errors.disability = false; }
  else errors.disability = true;

  return errors

}

export function Form() {
  const [errors, setErrors] = React.useState({});
//validate all inputs
  const [input, setInput] = React.useState({
    mail:"",//ok
    names:"",//ok
    firstName:"",//ok
    lastName:"",//ok
    dateOfBirth:"",//ok
    birthCertificate:"",//ok
    curp:"",//ok
    curpPdf:"",//ok
    actualAddress:"",//ok
    stateOfSchool:"",//ok
    townOfSchool:"",//ok
    lastSchool:"",//ok
    averageLastSchool:0.0,//ok
    actualWork:false,//ok
    typeSchool:false,//ok
    dialect:false,//ok
    gender:"",//ok
    states:"",//ok
    town:"",//ok
    disability:"",//ok
    telephone:"",
    cellphone:"",
  });

  // const municipalities = useSelector(state => state.allMunicipalities);

  const handleSubmit = (event)=>{
    if(errors){
      alert('No submited, check mandatory fields (*)');
      event.preventDefault();
      return;
    }
    debugger;
    const sendFormData={
      mail:"123123",
    };
  };

  function handleChange(event){
    debugger;
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value,
    }, event));
    console.log(event.target.value+" "+event.target.id);
  }

  function handleBlur(e){

    if(e.target.id === 'birthCertificate' || e.target.id === 'curpPdf' || e.target.id === 'certificateLastSchool' || e.target.id === 'secondarySchoolPdf'){
      if(e.target.value !== "")
        if(e.target.value.substr(-3).toLowerCase() !== "pdf") alert("El formato debe ser PDF "+e.target.value)
    }

    if(e.target.id === 'averageLastSchool'){
      const average = parseFloat(e.target.value);
      if(isNaN(average)){
        if(Number.isInteger(average))
        alert("Porporcionar un número entero en el promedio");
        return;
      }
      if(!Number.isInteger(average)){
        alert("Porporcionar un número entero en el promedio");
        return;
      }
    }

    if(e.target.id === 'miniPicture'){
      if(e.target.value !== ""){
        if(e.target.value.substr(-3).toLowerCase() !== "png" &&
           e.target.value.substr(-3).toLowerCase() !== "jpg")
          alert("El formato debe ser PNG o JPG");
      }
    }

    console.log(e.target.value+" "+e.target.id);

  }

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
        respuesta. <span className="mandatory">Todos los campos con este símbolo "*" son obligatorios, un campo mal proporcionado resaltará en ROJO</span>
      </div>
      <hr />
      <form className="form" onSubmit={handleSubmit} /*method="POST"*/ id="applicant" name="applicant">
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
            value={input.mail}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="firstName" className="col col-form-label">
            Primer Apellido <span className="mandatory">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Primer Apellido"
            onChange={handleChange}
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
            placeholder="Segundo Apellido, en caso de no tener colocar ____ (4 guiones bajos)"
            onChange={handleChange}
            //onBlur={handleBlur}
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
            onChange={handleChange}
            //onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="birthCertificate" className="col col-form-label">
            Acta de nacimiento (Formato PDF)<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="birthCertificate"
            name="birthCertificate"
            type="file"
            accept="image/*, .pdf"
            onChange={handleChange}
            //onBlur={handleBlur}
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
            onChange={handleChange}
            //onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="curpPdf" className="col col-form-label">
            CURP en formato PDF<span className="mandatory">*</span>
          </label>
          <input
            className="form-control"
            id="curpPdf"
            name="curpPdf"
            type="file"
            accept="image/+, .pdf"
            onChange={handleChange}
            //onBlur={handleBlur}
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
            onChange={handleChange}
            //onBlur={handleBlur}
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
            // className={errors.averageLastSchool ? "form-control": "form-control error"}
            className="form-control"
            id="averageLastSchool"
            name="averageLastSchool"
            type="number"
            min="0"
            max="100"
            placeholder="0"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="stateOfSchool" className="col col-form-label">
            Estado de procedencia de la escuela<span className="mandatory">*</span>
          </label>
          <OptionReact
            type="schoolOfState"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="townOfSchool" className="col col-form-label">
            Municipio de la escuela<span className="mandatory">*</span>
          </label>
          {/* <input type="text" name="townOfSchool" id="townOfSchool" placeholder="Municipio" /> */}
          <OptionReact
            type="schoolMunicipal"
            stateId="10"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label
            htmlFor="certificateLastSchool"
            className="col col-form-label"
          >
            Certificado o constancia con calificaciones de 1ro a 5to semestre en formato PDF
          </label>
          <input
            className="form-control"
            id="certificateLastSchool"
            name="certificateLastSchool"
            type="file"
            accept="image/*, .pdf"
            onChange={handleChange}
            onBlur={handleBlur}
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
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="miniPicture" className="col col-form-label">
            Subir fotografía tamaño infantil, en formato PNG o JPG
          </label>
          <input
            className="form-control"
            id="miniPicture"
            name="miniPicture"
            type="file"
            accept="image/*, .png, ,jpeg, .jpg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="marital_statuses" className="col col-form-label">
            Estado civil
          </label>
          <OptionReact
            type="marital_statuses"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="gender" className="col col-form-label">
            Sexo<span className="mandatory">*</span>
          </label>
          <OptionReact
            type="genders"
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
              name="work"
              type="radio"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
            <div className="containerRadio" role="group">
            <label className="radioButtons">
              No trabajo
            </label>
            <input
              id="IDontWork"
              name="work"
              type="radio"
              onChange={handleChange}
              onBlur={handleBlur}
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="containerRadio" role="group">
            <label className="radioButtons" htmlFor="typeSchool">
              Pública
            </label>
            <input
              id="public"
              name="typeSchool"
              type="radio"
              onChange={handleChange}
              onBlur={handleBlur}
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
            size={20}
            max="13"
            placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="cellphone" className="col col-form-label">
            Teléfono celular
          </label>
          <input
            type="tel"
            name="cellphone"
            id="cellphone"
            size={20}
            max="13"
            placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="states" className="col col-form-label">
            Estado de procedencia<span className="mandatory">*</span>
          </label>
          <OptionReact
          type="birthState"
          onChange = {handleChange}
          onBlur={handleBlur}
        />
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="town" className="col col-form-label">
            Municipio<span className="mandatory">*</span>
          </label>
          {/* <input type="text" name="town" id="town" placeholder="Municipio" onChange={handleChange}
            onBlur={handleBlur}/> */}
          <OptionReact
            type="birthMunicipal"
            stateId="10"
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
              onChange={handleChange}
              onBlur={handleBlur}
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="d-flex mb-1 flex-column">
          <label htmlFor="disability" className="col col-form-label">
            Discapacidad:<span className="mandatory">*</span>
          </label>
          <OptionReact
            type="disabilities"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="d-flex justify-content-center mt-2">
          <input
            type="submit"
            value="Enviar Información"
            className="btn btn-secondary"//dark
          />
        </div>
      </form>
    </div>
    </Fragment>
  );
}
//https://www.youtube.com/watch?v=n6i_3H3sA-Q https://es.acervolima.com/componente-de-formulario-reactjs-ui-ant-design/