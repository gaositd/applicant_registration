import React, { Fragment } from "react";
import{
  Link,
} from 'react-router-dom';

export function Form(){
  return(
    <Fragment>
      <div>
        <p className="lead">
          Registro de aspirantes a la Licenciatura en Matemáticas, FCE-UJED Semestre B - 2022
          ¡Bienvenidas y bienvenidos! Al formulario de registro para el proceso de selección e ingreso a la Licenciatura en Matemáticas que ofrece la Facultad de Ciencias Exactas de la Universidad Juárez del Estado de Durango.
          Al enviar el formulario acepta el siguiente Acuerdo de Privacidad (<Link to="https://face.ujed.mx/?page_id=4931">https://face.ujed.mx/?page_id=4931</Link>).
        </p>
        <hr />
        Se registrarán tus datos personales cuando subas archivos y envíes este formulario. El correo electrónico que ingresas forma parte de las respuesta.
      </div>
      <hr />
      <form className="form row">
        <label
          for="mail" class="col col-form-label">
            <bold>Correo Electrónico <span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="mail"
          name="mail" /* value='{username}' */placeholder="Correo Electrónico"
        />

        <label
          for="names" class="col col-form-label">
            <bold>Nombre(s) <span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="names"
          name="names" /* value='{username}'*/ placeholder="Solo nombre(s)"
        />

        <label
          for="firstName" class="col col-form-label">
            <bold>Primer apellido <span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="firstName"
          name="firtName" /* value='{username}'*/ placeholder="Primer Apellido"
        />

        <label
          for="lastName" class="col col-form-label">
            <bold>Segundo Apellido<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="lastName"
          name="lastName"/* value='{username}'*/ placeholder="Segundo Apellido"
        />

        <label
          for="dateOfBirth" class="col col-form-label">
            <bold>Fecha de nacimiento<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="dateOfBirth"
          name="dateOfBirth" type='date'/* value='{username}'*/
        />
        
        <label
          for="birthCertificate" class="col col-form-label">
            <bold>Acta de nacimiento (Formato PDF)<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="lastName"
          name="lastName" type='file' accept="image/*, .pdf" /*value='{username}'*/
        />

        <label
          for="curp" class="col col-form-label">
            <bold>Segundo Apellido<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="curp"
          name="curp" /* value='{username}'*/ placeholder="C.U.R.P."
        />

        <label
          for="curpPdf" class="col col-form-label">
            <bold>CURP en formato PDF<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="curpPdf"
          name="curpPdf" type='file' accept="image/+, .pdf" /*value='{username}'*/
        />

        <label
          for="actualAddress" class="col col-form-label">
            <bold>Segundo Apellido<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="actualAddress"
          name="actualAddress"/*value='{username}'*/ placeholder="Donde vives actualmente"
        />

        <label
          for="actualAddress" class="col col-form-label">
            <bold>Dirección actual<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="actualAddress"
          name="actualAddress" /* value='{username}'*/ placeholder="Durección actual donde vives"
        />
        
        <label
          for="lastSchool" class="col col-form-label">
            <bold>Nombre de la escuela de procedencia<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="lastSchool" name="lastSchool"
          /*value='{username}'*/ placeholder="¿De qué escuela vienes"
        />

        <label
          for="averageLastSchool"class="col col-form-label">
            <bold>Promedio de certificado de bachillerato (sí apun no terminas tu bachillerato poner el promedio de 1ro a 5to semestre)<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="averageLastSchool"
          name="averageLastSchool" /* value='{username}'*/ type='number'
          min='0' max='10' placeholder="0"
        />

        <label
          for="certificateLastSchool" class="col col-form-label">
            <bold>Certificado de bachillerato o constancia con las calificaciones de 1ro a 5to semenstre<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="certificaetLastSchool"
          name="certificateLastSchool" /* value='{username}'*/ type='file' accept="image/*, .pdf"
        />

        <label
          for="secondarySchool" class="col col-form-label">
            <bold>Certificado de secundaria en formato PDF<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="seconcadrySchool" name="secondarySchool"
          /*value='{username}'*/ type='file' accept="image/*, .pdf"
        />

        <label
          for="miniPicture" class="col col-form-label">
            <bold>Subir fotografía tamaño infantil (formato JPEG, JPG o PNG)<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="miniPicture" name="miniPicture"
          type='file' accept="image/*, .png, ,jpeg, .jpg"
        />

        <label
          for="maritalStatus" class="col col-form-label">
            <bold>Estado civil<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="single"
          name="maritalStatus" /*value='{username}'*/ type='radio'
        />Soltero
        <input
          className="form-control-plaintext" id="married" 
          type="radio" name="maritalStatus" /*value={username}*/
        />Casado
        
        <label
          for="actualWork" class="col col-form-label">
            <bold>¿Trabajas?<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="IWork"
          name="work" /*value='{username}'*/ type='radio'
        />Si
        <input
          className="form-control-plaintext" id="IdontWork" 
          type="radio" name="work" /*value={username}*/
        />No

        <label
          for="typeSchool" class="col col-form-label">
            <bold>Tipo escuela de procedencia<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="private"
          name="typeSchool" /*value='{username}'*/ type='radio'
        />Privada
        <input
          className="form-control-plaintext" id="public" 
          type="radio" name="typeSchool" /*value={username}*/
        />Pública

        <label for="telepohone"><bold>Teléfono<span>*</span></bold></label>
        <input type="tel" name="telephone" id="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

        <label for="telepohone"><bold>Estado de procedencia<span>*</span></bold></label>
        <select name="estado">
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

        <label for="town"><bold>Municipio<span>*</span></bold></label>
        <input type="text" name="town" id="town" placeholder="Municipio"/>

        <label for="dialect" class="col col-form-label">
            <bold>¿Hablas alguna lengia indigena?<span>*</span></bold>
        </label>
        <input
          className='form-control-plaintext' id="IWork"
          name="dialect" /*value='{username}'*/ type='radio'
        />Si
        <input
          className="form-control-plaintext" id="IdontWork" 
          type="radio" name="dialect" /*value={username}*/
        />No

        <label for="disability"><bold>Discapacidad:<span>*</span></bold></label>
        <input type="checkbox" name="disability" id="disability" />

        <input type="submit" />
      </form>
    </Fragment>
  );
}