import * as Yup from "yup";
const RegisterSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es requerido"),
  apellidoPaterno: Yup.string().required("El apellido paterno es requerido"),
  apellidoMaterno: Yup.string().required("El apellido materno es requerido"),
  sexo: Yup.mixed().oneOf(["hombre", "mujer"]).required("El sexo es requerido"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es requerido"),
  telefono: Yup.string().required("El teléfono es requerido"),
  direccion: Yup.string().required("La dirección es requerida"),
});
export default RegisterSchema;
