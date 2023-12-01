import { z } from "zod";

enum Sexo {
  mujer = "mujer",
  hombre = "hombre",
  otro = "otro",
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
