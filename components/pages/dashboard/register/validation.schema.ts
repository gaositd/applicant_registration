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

enum SiNo {
  si = "si",
  no = "no",
}

enum TipoEscuela {
  privada = "privada",
  publica = "publica",
}

enum Estados {
  ags  = "ags",
  bjn  = "bjn",
  bjs  = "bjs",
  cam  = "cam",
  chs  = "chs",
  chi  = "chi",
  cdmx = "cdmx",
  coh  = "coh",
  col  = "col",
  df   = "df",
  dgo  = "dgo",
  gua  = "gua",
  gue  = "gue",
  hgo  = "hgo",
  jal  = "jal",
  mic  = "mic",
  mor  = "mor",
  nay  = "nay",
  nln  = "nln",
  oax  = "oax",
  pue  = "pue",
  qro  = "qro",
  qnr  = "qnr",
  slp  = "slp",
  sin  = "sin",
  son  = "son",
  tab  = "tab",
  tam  = "tam",
  tlx  = "tlx",
  ver  = "ver",
  yuc  = "yuc",
  zac  = "zac",
  extr = "extr",
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
      return "C.U.R.P. inválida, favor de revisar"
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
  dialecto: z.nativeEnum(SiNo, {
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
  celular: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 caracteres.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
  trabaja: z.nativeEnum(SiNo, {
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
  estadoNacimiento: z.nativeEnum(Estados, {
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
  municipioNacimiento: z.string().min(5, {
    message: "El municipio de nacimiento debe tener al menos 5 caracteres.",
  }),
});

const StepThreeValidationSchema = z.object({
  escuerlaProcedencia: z.nativeEnum(Estados, {
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
  promedioBachillerato: z.number().refine(promedio => {
    if(promedio < 60){
      return "promedio demasiado bajo, favor de revisar";
    }
    return;
  }),
  tipoEscuelaProcedencia: z.nativeEnum(TipoEscuela, {
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
  estadoEscuela: z.nativeEnum(Estados, {
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
  municipioEscuela: z.string().min(5, {
    message: "El municipio de nacimiento debe tener al menos 5 caracteres.",
  }),
});

// const StepFourValidationSchema = z.object({
  
// });

const RegisterFormValidationSchemas = [
  StepOneValidationSchema,
  StepTwoValidationSchema,
  StepThreeValidationSchema,
  // StepFourValidationSchema,
];

export default RegisterFormValidationSchemas;
