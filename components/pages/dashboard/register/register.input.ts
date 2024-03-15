import {
  BiCalendar,
  BiDetail,
  BiSolidFoodMenu,
  BiSolidSchool,
  BiSolidUserCircle,
  BiWrench
} from 'react-icons/bi'
import { FaHouseUser, FaPhone } from 'react-icons/fa'
import { FaHouseChimneyUser } from 'react-icons/fa6'
import { GiMexico } from 'react-icons/gi'
import { MdAlternateEmail } from 'react-icons/md'
import { TbLanguageHiragana } from 'react-icons/tb'
import { TFormInputsSections } from './register.types'
import { EstadoEnum, Sexo } from './register.consts'

const FormInputs: TFormInputsSections[] = [
  {
    name: 'Datos personales',
    inputs: {
      nombre: {
        type: 'text',
        label: 'Nombre',
        placeholder: 'Escribe tu nombre',
        icon: BiSolidUserCircle
      },
      apellidoPaterno: {
        type: 'text',
        label: 'Apellido paterno',
        placeholder: 'Escibre tu apellido paterno',
        icon: BiSolidUserCircle
      },
      apellidoMaterno: {
        type: 'text',
        label: 'Apellido materno',
        placeholder: 'Escibre tu apellido materno',
        icon: BiSolidUserCircle
      },

      sexo: {
        label: 'Sexo',
        type: 'select',
        icon: BiSolidUserCircle,
        placeholder: 'Selecciona tu sexo de las opciones',
        options: Object.keys(Sexo).map((key: string) => ({
          value: key,
          label: Sexo[key as keyof typeof Sexo]
        }))
      }
    }
  },
  {
    name: 'Datos personales II',
    inputs: {
      fechaNacimiento: {
        type: 'date',
        placeholder: '',
        icon: BiCalendar,
        label: 'Fecha de nacimiento'
      },
      curp: {
        type: 'text',
        label: 'C.U.R.P. escrita',
        placeholder: 'Escribe tu C.U.R.P.',
        icon: BiSolidFoodMenu,
        additonalProps: {
          onKeyDown: (e: any) => {
            // make uppercase
            e.target.value = e.target.value.toUpperCase()

            // avoid length > 18
            if (e.target.value.length > 17) {
              e.preventDefault()
            }
          },
          style: {
            textTransform: 'uppercase'
          }
        }
      },
      estadoCivil: {
        label: 'Estado civil',
        type: 'select',
        icon: BiSolidUserCircle,
        placeholder: 'Selecciona tu estado civil de las opciones',
        options: [
          {
            value: 'soltero',
            label: 'Soltero'
          },
          {
            value: 'casado',
            label: 'Casado'
          }
        ]
      },
      dialecto: {
        label: 'Hablas alguna lengua indígena?',
        boolean: true,
        type: 'select',
        icon: TbLanguageHiragana,
        placeholder: 'Selecciona una de las opciones',
        options: [
          {
            value: 'si',
            label: 'Sí'
          },
          {
            value: 'no',
            label: 'No'
          }
        ]
      }
    }
  },
  {
    name: 'Datos de contacto',
    inputs: {
      email: {
        type: 'email',
        label: 'Correo electrónico',
        placeholder:
          'Debe contener un @ y un dominio válido (gmail.com, hotmail.com, etc)',

        icon: MdAlternateEmail
      },
      telefono: {
        type: 'text',
        label: 'Teléfono fijo',
        placeholder: 'Debe contener 10 dígitos (ej. 6181234567)',
        icon: FaPhone
      },
      celular: {
        type: 'text',
        label: 'Teléfono celular',
        placeholder: 'Debe contener 10 dígitos (ej. 6181234567)',
        icon: FaPhone
      },
      direccion: {
        type: 'text',
        label: 'Dirección actual',
        placeholder: 'Escribe tu dirección completa',
        icon: FaHouseChimneyUser
      }
    }
  },
  {
    name: 'Datos de ubicación',
    inputs: {
      trabaja: {
        label: '¿Trabajas?',
        boolean: true,
        type: 'select',
        icon: BiWrench,
        placeholder: 'Selecciona una de las opciones',
        options: [
          {
            value: 'si',
            label: 'Sí'
          },
          {
            value: 'no',
            label: 'No'
          }
        ]
      },
      estadoNacimiento: {
        label: 'Estado de nacimiento',
        type: 'select',
        icon: GiMexico,
        placeholder: 'Selecciona un estado de las opciones',
        options: Object.keys(EstadoEnum).map((key: string) => ({
          value: EstadoEnum[key as keyof typeof EstadoEnum],
          label: EstadoEnum[key as keyof typeof EstadoEnum]
        }))
      },
      municipioNacimiento: {
        type: 'text',
        label: 'Municipio de nacimiento',
        placeholder: 'Municipio donde naciste',
        icon: FaHouseUser
      }
    }
  },
  {
    name: 'Datos Escolares',
    inputs: {
      escuelaProcedencia: {
        type: 'select',
        options: [
          {
            value: 'cch',
            label: 'CCH'
          },
          {
            value: 'preparatoriaNocturna',
            label: 'Preparatoria Nocturna'
          }
        ],
        label: 'Nombre de la escuela de procedencia',
        placeholder: 'Nombre de la escuela',
        icon: BiSolidSchool
      },
      promedioBachillerato: {
        type: 'number',
        label: 'Promedio de certificado de bachillerato',
        placeholder:
          'Sí aún no terminas el bachillerato poner el promedio de 1ro a 5to semestre',
        icon: BiDetail,
        additonalProps: {
          onKeyDown: (e: any) => {
            // avoid typing letters
            if (
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 97 && e.keyCode <= 122)
            ) {
              e.preventDefault()
            } else if (// avoid typing special characters except dot
              (e.keyCode >= 33 && e.keyCode <= 47) ||
              (e.keyCode >= 58 && e.keyCode <= 64) ||
              (e.keyCode >= 91 && e.keyCode <= 96) ||
              (e.keyCode >= 123 && e.keyCode <= 126)
            ) {
              if (e.keyCode !== 190) {
                e.preventDefault()
              }
            }
          }
        }
      }
    }
  },
  {
    name: 'Datos de la escolares II',
    inputs: {
      tipoEscuelaProcedencia: {
        label: 'Tipo escuela de procedencia',
        type: 'select',
        icon: BiSolidSchool,
        placeholder: 'Selecciona el tipo de escuela de las opciones',
        options: [
          {
            value: 'privada',
            label: 'Privada'
          },
          {
            value: 'publica',
            label: 'Pública'
          }
        ]
      },
      estadoEscuela: {
        label: 'Estado de la escuela de procedencia',
        type: 'select',
        icon: GiMexico,
        placeholder: 'Selecciona un estado de las opciones',
        options: Object.keys(EstadoEnum).map((key: string) => ({
          value: EstadoEnum[key as keyof typeof EstadoEnum],
          label: EstadoEnum[key as keyof typeof EstadoEnum]
        }))
      },
      municipioEscuela: {
        type: 'text',
        label: 'Municipio de la escuela de procedencia',
        placeholder: 'Municipio de la escuela de procedencia',
        icon: FaHouseUser
      }
    }
  }
]

export default FormInputs
