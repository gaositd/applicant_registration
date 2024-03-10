import { z } from 'zod'
import { EstadoEnum, EstadoCivil, Sexo } from './register.consts'

const getValues = (object: any): [string] => {
  return Object.keys(object) as [string]
}
export const DatosPersonalesValidationSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.'
  }),
  apellidoPaterno: z.string().min(2, {
    message: 'El apellido paterno debe tener al menos 2 caracteres.'
  }),
  apellidoMaterno: z.string().min(2, {
    message: 'El apellido materno debe tener al menos 2 caracteres.'
  }),
  sexo: z.enum(getValues(Sexo), {
    errorMap: (issue, ctx) => {
      console.log(ctx)
      if (issue.code === 'invalid_enum_value') {
        return {
          message: 'Opción no válida.'
        }
      }
      return {
        message: 'Debes seleccionar una opción.'
      }
    }
  })
})

export const DatosUbicacionValidationSchema = z.object({
  estadoNacimiento: z.nativeEnum(EstadoEnum, {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return {
          message: 'Opción no válida.'
        }
      }
      return {
        message: 'Debes seleccionar una opción.'
      }
    }
  }),
  municipioNacimiento: z.string().min(2, {
    message: 'El municipio de nacimiento debe tener al menos 2 caracteres.'
  }),
  trabaja: z.boolean()
})

export const DatosContactoValidationSchema = z.object({
  email: z
    .string()
    .email('El email debe tener un formato válido. Ej: "mail@domain.com"')
    .min(5, {
      message: 'El email debe tener al menos 5 caracteres.'
    }),
  telefono: z.string().min(10, {
    message: 'El teléfono debe tener al menos 10 caracteres.'
  }),
  celular: z.string().min(10, {
    message: 'El teléfono debe tener al menos 10 caracteres.'
  }),
  direccion: z.string().min(5, {
    message: 'La dirección debe tener al menos 5 caracteres.'
  })
})

export const DatosPersonalesIIValidationSchema = z.object({
  fechaNacimiento: z.coerce.date(),
  curp: z.string().min(18, {
    message: 'La CURP debe tener al menos 18 caracteres.'
  }),

  estadoCivil: z.enum(getValues(EstadoCivil), {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return {
          message: 'Opción no válida.'
        }
      }
      return {
        message: 'Debes seleccionar una opción.'
      }
    }
  }),
  dialecto: z.boolean()
})

export const DatosEscuelaProcedenciaValidationSchema = z.object({
  escuelaProcedencia: z.string().min(2, {
    message: 'Valor no válido.'
  }),
  promedioBachillerato: z
    .number()
    .min(1, {
      message: 'El promedio debe ser mayor a 0.'
    })
    .max(100, {
      message: 'El promedio debe ser menor a 100.'
    }),
  tipoEscuelaProcedencia: z.enum(['publica', 'privada'], {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return {
          message: 'Opción no válida.'
        }
      }
      return {
        message: 'Debes seleccionar una opción.'
      }
    }
  }),
  estadoEscuela: z.nativeEnum(EstadoEnum, {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return {
          message: 'Opción no válida.'
        }
      }
      return {
        message: 'Debes seleccionar una opción.'
      }
    }
  }),
  municipioEscuela: z.string().min(2, {
    message: 'El municipio de la escuela debe tener al menos 2 caracteres.'
  })
})
