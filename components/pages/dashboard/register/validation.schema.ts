import { z } from "zod";

enum Sexo {
  mujer = "mujer",
  hombre = "hombre",
  otro = "otro",
}

enum EstadoCivil {
  casado = "casado",
  soltero = "soltero",
}

enum Dialecto {
  si = "si",
  no = "no",
}

const StepOneValidationSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidoPaterno: z.string().min(2, {
    message: "El apellido paterno debe tener al menos 2 caracteres.",
  }),
  apellidoMaterno: z.string().min(2, {
    message: "El apellido materno debe tener al menos 2 caracteres.",
  }),
  sexo: z.nativeEnum(Sexo, {
    errorMap: (issue, ctx) => {
      console.log(issue, ctx);
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  fechaNacimiento:z.date().refine(fechaIngresada =>{
    const fechaLimite = new Date();
    //calcula la efcha 15 años hacia atras para poder ser una fecha válida
    fechaLimite.setFullYear(fechaLimite.getFullYear() - 15);
    return fechaIngresada <= fechaLimite;
  },
  {
    message: `La fecha límite debe ser almenos 15 años atrás`
  }),
  curp: z.string().refine(curp =>{
    const regexCurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    
    if(!regexCurp.test(curp)){
      return "C.R.P. inválida, favor de revisar"
    }
    return;
  }),
  estadoCivil: z.nativeEnum(EstadoCivil, {
    errorMap: (issue, ctx) => {
      console.log(issue, ctx);
      if (issue.code === "invalid_enum_value")
        return {
          message: "Opción no válida.",
        };
      return {
        message: "Debes seleccionar una opción.",
      };
    },
  }),
  dialecto: z.nativeEnum(Dialecto, {
    errorMap: (issue, ctx) => {
      console.log(issue, ctx);
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

const StepTwoValidationSchema = z.object({
  email: z
    .string()
    .email('El email debe tener un formato válido. Ej: "mail@domain.com"')
    .min(5, {
      message: "El email debe tener al menos 5 caracteres.",
    }),
  telefono: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 caracteres.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
});

const RegisterFormValidationSchemas = [
  StepOneValidationSchema,
  StepTwoValidationSchema,
];

export default RegisterFormValidationSchemas;
