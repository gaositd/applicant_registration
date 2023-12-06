import { z } from "zod";
import { EstadoEnum, EstadoCivil, Sexo } from "./register.consts";

const getValues = (object: any): [string] => {
  return Object.keys(object) as [string];
};
const DatosPersonalesValidationSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidoPaterno: z.string().min(2, {
    message: "El apellido paterno debe tener al menos 2 caracteres.",
  }),
  apellidoMaterno: z.string().min(2, {
    message: "El apellido materno debe tener al menos 2 caracteres.",
  }),
  sexo: z.enum(getValues(Sexo), {
    errorMap: (issue, ctx) => {
      console.log(ctx);
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
});

const DatosUbicacionValidationSchema = z.object({
  estadoNacimiento: z.nativeEnum(EstadoEnum, {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  municipioNacimiento: z.string().min(2, {
    message: "El municipio de nacimiento debe tener al menos 2 caracteres.",
  }),
  trabaja: z.boolean(),
});

const DatosContactoValidationSchema = z.object({
  email: z
    .string()
    .email('El email debe tener un formato válido. Ej: "mail@domain.com"')
    .min(5, {
      message: "El email debe tener al menos 5 caracteres.",
    }),
  telefono: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 caracteres.",
  }),
  celular: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 caracteres.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
});

const DatosPersonalesIIValidationSchema = z.object({
  fechaNacimiento: z.coerce.date(),
  curp: z.string().refine((curp) => {
    const regexCurp =
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;

    if (!regexCurp.test(curp)) {
      return "C.U.R.P. inválida, favor de revisar";
    }
    return;
  }),
  estadoCivil: z.enum(getValues(EstadoCivil), {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  dialecto: z.boolean(),
});

const DatosEscuelaProcedenciaValidationSchema = z.object({
  escuelaProcedencia: z.string().min(2, {
    message: "El nombre de la escuela debe tener al menos 2 caracteres.",
  }),
  promedioBachillerato: z
    .number()
    .min(0, {
      message: "El promedio debe ser mayor a 0.",
    })
    .max(100, {
      message: "El promedio debe ser menor a 100.",
    }),
  tipoEscuelaProcedencia: z.enum(["publica", "privada"], {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  estadoEscuela: z.nativeEnum(EstadoEnum, {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  municipioEscuela: z.string().min(2, {
    message: "El municipio de la escuela debe tener al menos 2 caracteres.",
  }),
});

const RegisterFormValidationSchemas = [
  DatosPersonalesValidationSchema,
  DatosPersonalesIIValidationSchema,
  DatosContactoValidationSchema,
  DatosUbicacionValidationSchema,
  DatosEscuelaProcedenciaValidationSchema,
];

export default RegisterFormValidationSchemas;
