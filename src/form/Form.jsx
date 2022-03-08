import React from "react";
import{
  Link,
} from 'react-router-dom';

export function Form(){
  return(
    <div>
      <p className="text-center">
        Registro de aspirantes a la Licenciatura en Matemáticas, FCE-UJED Semestre B - 2022
        ¡Bienvenidas y bienvenidos! Al formulario de registro para el proceso de selección e ingreso a la Licenciatura en Matemáticas que ofrece la Facultad de Ciencias Exactas de la Universidad Juárez del Estado de Durango.
        Al enviar el formulario acepta el siguiente Acuerdo de Privacidad (<Link to="https://face.ujed.mx/?page_id=4931">https://face.ujed.mx/?page_id=4931</Link>)
        gaositd@gmail.com Cambiar cuenta
        
        Se registrarán tus datos personales cuando subas archivos y envíes este formulario. El correo electrónico que ingresas forma parte de las respuesta.
      </p>
    </div>
  );
}