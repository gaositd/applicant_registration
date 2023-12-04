"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BiCalendar,
  BiDetail,
  BiSolidFoodMenu,
  BiSolidSchool,
  BiSolidUserCircle,
  BiWrench,
} from "react-icons/bi";
import { FaHouseUser, FaPhone } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { GiMexico } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import { ZodError } from "zod";
import { TFormInputsSections, TInput } from "./register.types";
import RegisterSchema from "./validation.schema";

const FormInputs: TFormInputsSections[] = [
  {
    name: "Datos personales",
    inputs: {
      nombre: {
        type: "text",
        label: "Nombre",
        placeholder: "Escribe tu nombre",
        icon: BiSolidUserCircle,
      },
      apellidoPaterno: {
        type: "text",
        label: "Apellido paterno",
        placeholder: "Escibre tu apellido paterno",
        icon: BiSolidUserCircle,
      },
      apellidoMaterno: {
        type: "text",
        label: "Apellido materno",
        placeholder: "Escibre tu apellido materno",
        icon: BiSolidUserCircle,
      },
      fechaNacimiento:{
        type:"date",
        placeholder:"",
        icon: BiCalendar,
        label:"Fecha de nacimiento"
      },
      sexo: {
        label: "Sexo",
        type: "select",
        icon: BiSolidUserCircle,
        placeholder: "Selecciona tu sexo de las opciones",
        options: [
          {
            value: "hombre",
            label: "Hombre",
          },
          {
            value: "mujer",
            label: "Mujer",
          },
          {
            value: "otro",
            label: "Prefiero no decirlo",
          },
        ],
      },
      curp:{
        type: "text",
        label:"C.U.R.P. escrita",
        placeholder: "Escribe tu C.U.R.P.",
        icon: BiSolidFoodMenu,
      },
      estadoCivil:{
        label: "Estado civil",
        type: "select",
        icon: BiSolidUserCircle,
        placeholder: "Selecciona tu estado civil de las opciones",
        options:[
          {
            value: "soltero",
            label: "Soltero",
          },
          {
            value: "casado",
            label: "Casado",
          },
        ],
      },
      dialecto:{
        label: "Hablas alguna lengua indígena?",
        type: "select",
        icon: TbLanguageHiragana,
        placeholder: "Selecciona una de las opciones",
        options:[
          {
            value: "si",
            label: "Sí",
          },
          {
            value: "no",
            label: "No",
          },
        ],
      },
    },
  },
  {
    name: "Datos de contacto",
    inputs: {
      email: {
        type: "email",
        label: "Correo electrónico",
        placeholder: "Debe contener un @ y un dominio válido (gmail.com, hotmail.com, etc)",
        icon: MdAlternateEmail,
      },
      telefono: {
        type: "text",
        label: "Teléfono fijo",
        placeholder: "Debe contener 10 dígitos (ej. 6181234567)",
        icon: FaPhone,
      },
      celular: {
        type: "text",
        label: "Teléfono celular",
        placeholder: "Debe contener 10 dígitos (ej. 6181234567)",
        icon: FaPhone,
      },
      direccion: {
        type: "text",
        label: "Dirección actual",
        placeholder: "Escribe tu dirección completa",
        icon: FaHouseChimneyUser,
      },
      trabaja:{
        label: "¿Trabajas?",
        type: "select",
        icon: BiWrench,
        placeholder: "Selecciona una de las opciones",
        options:[
          {
            value: "si",
            label: "Sí",
          },
          {
            value: "no",
            label: "No",
          },
        ],
      },
      estadoNacimiento:{
        label: "Estado de nacimiento",
        type: "select",
        icon: GiMexico,
        placeholder: "Selecciona un estado de las opciones",
        options:[
          {
            value: "ags",
            label: "Aguascalientes",
          },
          {
            value: "bjn",
            label: "Baja Califonia",
          },
          {
            value: "bjs",
            label: "Baja Califonia Sur",
          },
          {
            value: "cam",
            label: "Campeche",
          },
          {
            value: "chs",
            label: "Chiapas",
          },
          {
            value: "chi",
            label: "Chihuahua",
          },
          {
            value: "cdmx",
            label: "Ciudad de México",
          },
          {
            value: "coh",
            label: "Coahuila de Zaragoza",
          },
          {
            value: "col",
            label: "Colima",
          },
          {
            value: "df",
            label: "Distrito Federal",
          },
          {
            value: "dgo",
            label: "Durango",
          },
          {
            value: "gua",
            label: "Guanajuato",
          },
          {
            value: "gue",
            label: "Guerrero",
          },
          {
            value: "hgo",
            label: "Hidalgo",
          },
          {
            value: "jal",
            label: "Jalisco",
          },
          {
            value: "mic",
            label: "Michoacan de Ocampo",
          },
          {
            value: "mor",
            label: "Morelos",
          },
          {
            value: "nay",
            label: "Nayarit",
          },
          {
            value: "nln",
            label: "Nuevo León",
          },
          {
            value: "oax",
            label: "Oaxaca",
          },
          {
            value: "pue",
            label: "Puebla",
          },
          {
            value: "qro",
            label: "Querétaro",
          },
          {
            value: "qnr",
            label: "Quintana Roo",
          },
          {
            value: "slp",
            label: "San Luis Potosí",
          },
          {
            value: "sin",
            label: "Sinaloa",
          },
          {
            value: "son",
            label: "Sonora",
          },
          {
            value: "tab",
            label: "Tabasco",
          },
          {
            value: "tam",
            label: "Tamaulipas",
          },
          {
            value: "tlx",
            label: "Tlaxcala",
          },
          {
            value: "ver",
            label: "Veracruz de la Llave",
          },
          {
            value: "yuc",
            label: "Yucatán",
          },
          {
            value: "zac",
            label: "Zacatecas",
          },
          {
            value: "extr",
            label: "Extranjero",
          },
        ],
      },
      municipioNacimiento: {
        type: "text",
        label: "Municipio de nacimiento",
        placeholder: "Municipio donde naciste",
        icon: FaHouseUser,
      },
    },
  },
  {
    name:"Datos Escolares",
    inputs:{
      escuelaProcedencia:{
        type:"text",
        label: "Nombre de la escuela de procedencia",
        placeholder: "Nombre de la escuela",
        icon: BiSolidSchool,
      },
      promedioBachillerato:{
        type: "number",
        label: "Promedio de certificado de bachillerato",
        placeholder: "Sí aún no terminas el bachillerato poner el promedio de 1ro a 5to semestre, escla 1 a 100",
        icon: BiDetail,
      },
      tipoEscuelaProcedencia:{
        label: "Tipo escuela de procedencia",
        type: "select",
        icon: BiSolidSchool,
        placeholder: "Selecciona el tipo de escuela de las opciones",
        options:[
          {
            value: "privada",
            label: "Privada",
          },
          {
            value: "publica",
            label: "Pública",
          },
        ],
      },
      estadoEscuela:{
        label: "Estado de la escuela de procedencia",
        type: "select",
        icon: GiMexico,
        placeholder: "Selecciona un estado de las opciones",
        options:[
          {
            value: "aguascalientes",
            label: "Aguascalientes",
          },
          {
            value: "bajaCalifonia",
            label: "Baja Califonia",
          },
          {
            value: "bajaCalifoniaSur",
            label: "Baja Califonia Sur",
          },
          {
            value: "Campeche",
            label: "Campeche",
          },
          {
            value: "Chiapas",
            label: "Chiapas",
          },
          {
            value: "chihuahua",
            label: "Chihuahua",
          },
          {
            value: "cdmx",
            label: "Ciudad de México",
          },
          {
            value: "cohahuila",
            label: "Coahuila de Zaragoza",
          },
          {
            value: "colima",
            label: "Colima",
          },
          {
            value: "df",
            label: "Distrito Federal",
          },
          {
            value: "durango",
            label: "Durango",
          },
          {
            value: "guanajuato",
            label: "Guanajuato",
          },
          {
            value: "guerrero",
            label: "Guerrero",
          },
          {
            value: "hidalgo",
            label: "Hidalgo",
          },
          {
            value: "Jalisco",
            label: "Jalisco",
          },
          {
            value: "michoacan",
            label: "Michoacan de Ocampo",
          },
          {
            value: "Morelos",
            label: "Morelos",
          },
          {
            value: "Nayarit",
            label: "Nayarit",
          },
          {
            value: "nuevoLeon",
            label: "Nuevo León",
          },
          {
            value: "oaxaca",
            label: "Oaxaca",
          },
          {
            value: "puebla",
            label: "Puebla",
          },
          {
            value: "qro",
            label: "Querétaro",
          },
          {
            value: "quintanaRoo",
            label: "Quintana Roo",
          },
          {
            value: "slp",
            label: "San Luis Potosí",
          },
          {
            value: "sin",
            label: "Sinaloa",
          },
          {
            value: "son",
            label: "Sonora",
          },
          {
            value: "taba",
            label: "Tabasco",
          },
          {
            value: "tam",
            label: "Tamaulipas",
          },
          {
            value: "tlx",
            label: "Tlaxcala",
          },
          {
            value: "vera",
            label: "Veracruz de la Llave",
          },
          {
            value: "yuc",
            label: "Yucatán",
          },
          {
            value: "zac",
            label: "Zacatecas",
          },
          {
            value: "extr",
            label: "Extranjero",
          },
        ],
      },
      municipioEscuela: {
        type: "text",
        label: "Municipio de la escuela de procedencia",
        placeholder: "Municipio de la escuela de procedencia",
        icon: FaHouseUser,
      },
    },
  }
];

const getInputObject = () => {
  type TInputs = {
    [key: string]: string;
  };

  const inputs: TInputs = {};

  FormInputs.forEach((section) => {
    Object.keys(section.inputs).forEach((key) => {
      inputs[key] = "";
    });
  });

  return inputs;
};

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(getInputObject());
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    console.log(
      currentPage,
      currentPage === FormInputs.length - 1,
      FormInputs.length
    );
  }, [currentPage]);

  const handleSubmit = () => {
    console.log("Registrarse");
    console.log(formData);
  };

  const getInputHTML = (input: TInput, key: string) => {
    if (input.type === "select") {
      return (
        <Select
          bgColor={"white"}
          value={formData[key]}
          placeholder={input.placeholder}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (currentPage !== FormInputs.length - 1) {
                handleOnStepChange("next");
              }
            }
          }}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [key]: e.target.value,
            }))
          }
        >
          {input.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      );
    }

    return (
      <Input
        value={formData[key]}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            [key]: e.target.value,
          }))
        }
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (currentPage !== FormInputs.length - 1) {
              handleOnStepChange("next");
            }
          }
        }}
        type={input.type}
        placeholder={input.placeholder}
        bgColor={"white"}
        {...input.additonalProps}
      />
    );
  };

  const handleOnStepChange = async (action: "next" | "prev") => {
    try {
      RegisterSchema[currentPage].parse(formData);

      if (action === "next" && currentPage === FormInputs.length - 1) {
        handleSubmit();
      }

      if (action === "next" && currentPage !== FormInputs.length - 1) {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage((prev) => prev - 1);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const formErrors: Record<string, string> = {};

        const flatErrors = error.flatten().fieldErrors;
        Object.keys(flatErrors).forEach((errorKey) => {
          const errorValue = flatErrors[errorKey];
          if (Array.isArray(errorValue) && errorValue.length > 0) {
            formErrors[errorKey] = errorValue[0];
          }
        });

        setErrors(formErrors);
      }
    }
  };
  return (
    <Flex
      as={"main"}
      color="#6C6C6C"
      h={"100vh"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        as={"article"}
        w={{ base: "100%", md: "60%" }}
        h={{ base: "30%", md: "100%" }}
        bg="white"
        flexDir={"column"}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          boxSize={{ base: "70%", md: "45%" }}
          maxW="100%"
          minHeight="max-content"
        />
        <Box
          as="footer"
          alignItems={"flex-end"}
          marginTop="auto"
          position={"absolute"}
          bottom={"0"}
          display={{ base: "none", md: "block" }}
          textAlign={{ base: "center", md: "center" }}
        >
          <Text fontWeight={"bold"}>
            Universidad Juárez del Estado de Durango
          </Text>
          <Text fontSize="md">
            Constitución 404 Sur. Zona Centro. C.P. 34000. Durango, Dgo. México.
            <br />
            Tel: 618 827 1200.
          </Text>
        </Box>
      </Flex>
      <Flex
        as={"aside"}
        bg="primary.base"
        w={{ base: "100%", md: "40%" }}
        h={{ base: "70%", md: "100%" }}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="center"
        p={{ base: "2rem", md: 0 }}
        flexDir={"column"}
      >
        <Heading color={"white"}>Registrate</Heading>

        <Stack
          gap={3}
          display="flex"
          flexDir={"column"}
          justify="center"
          align={"center"}
          w={"100%"}
          padding={"3rem"}
        >
          {Object.keys(FormInputs[currentPage].inputs).map((key) => {
            return (
              <FormControl
                key={key}
                isInvalid={errors && typeof errors[key] !== "undefined"}
              >
                <FormLabel
                  htmlFor={key}
                  color={"whiteAlpha.900"}
                  fontWeight={"bold"}
                >
                  {FormInputs[currentPage].inputs[key].label}
                </FormLabel>
                <InputGroup>
                  {getInputHTML(FormInputs[currentPage].inputs[key], key)}
                  <InputRightAddon
                    children={
                      <Icon as={FormInputs[currentPage].inputs[key].icon} />
                    }
                  />
                </InputGroup>
                <FormErrorMessage color={"whiteAlpha.900"} fontWeight={"bold"}>
                  {errors[key]}
                </FormErrorMessage>
              </FormControl>
            );
          })}
          <ButtonGroup>
            {currentPage !== 0 && (
              <Button
                mt={4}
                alignItems={"center"}
                color="black"
                bgColor="white"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Atrás
              </Button>
            )}

            <Button
              mt={4}
              alignItems={"center"}
              color="black"
              bgColor="white"
              isDisabled={isDisabled}
              onClick={() => handleOnStepChange("next")}
            >
              {currentPage === FormInputs.length - 1
                ? "Registrarse"
                : "Siguiente"}
            </Button>
          </ButtonGroup>
          <Text
            fontSize='1xl'
            color='white'
            as='b'
          >
            *Podrás pasar a la siguiente página hasta completar esta sección
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
