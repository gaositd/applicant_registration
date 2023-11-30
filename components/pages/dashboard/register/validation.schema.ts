import { z } from "zod";

enum Sexo {
  mujer = "mujer",
  hombre = "hombre",
}

const RegisterSchema = z.object({
  nombre: z.string(),
  apellidoPaterno: z.string(),
  apellidoMaterno: z.string(),
  email: z.string().email(),
  sexo: z.nativeEnum(Sexo, {
    required_error: "Sexo requerido",
    invalid_type_error: "Opción inválida",
  }),
  telefono: z.string(),
  direccion: z.string(),
});

export default RegisterSchema;
