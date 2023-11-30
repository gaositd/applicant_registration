"use client";

import {
  Icon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Image,
  Text,
  Box,
  useToast,
  Heading,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { TFormInputsSections, TInput } from "./register.types";
import RegisterSchema from "./validation.schema";
import { ZodError } from "zod";

const FormInputs: TFormInputsSections[] = [
  {
    name: "Datos personales",
    inputs: {
      nombre: {
        type: "text",
        placeholder: "Nombre",
        icon: BiSolidUserCircle,
      },
      apellidoPaterno: {
        type: "text",
        placeholder: "Apellido paterno",
        icon: BiSolidUserCircle,
      },
      apellidoMaterno: {
        type: "text",
        placeholder: "Apellido materno",
        icon: BiSolidUserCircle,
      },
      sexo: {
        type: "select",
        icon: BiSolidUserCircle,
        placeholder: "Sexo",
        options: [
          {
            value: "H",
            label: "Hombre",
          },
          {
            value: "M",
            label: "Mujer",
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
        placeholder: "Correo electrónico",
        icon: MdAlternateEmail,
      },
      telefono: {
        type: "text",
        placeholder: "Teléfono",
        icon: FaPhone,
      },
      direccion: {
        type: "text",
        placeholder: "Dirección",
        icon: FaHouseChimneyUser,
      },
    },
  },
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

const getInputHTML = (input: TInput) => {
  if (input.type === "select") {
    return (
      <Select bgColor={"white"}>
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
      type={input.type}
      placeholder={input.placeholder}
      bgColor={"white"}
      {...input.additonalProps}
    />
  );
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

  const handleOnStepChange = async (action: "next" | "prev") => {
    try {
      const data = RegisterSchema.parse(formData);

      console.log("QUIERO VER ESTE VALIR", data);
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

        console.log(formErrors);

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
              <FormControl key={key}>
                <FormLabel
                  htmlFor={key}
                  color={"whiteAlpha.900"}
                  fontWeight={"bold"}
                >
                  {FormInputs[currentPage].inputs[key].placeholder}
                </FormLabel>
                <InputGroup>
                  {getInputHTML(FormInputs[currentPage].inputs[key])}
                  <InputRightAddon
                    children={
                      <Icon as={FormInputs[currentPage].inputs[key].icon} />
                    }
                  />
                </InputGroup>
                <FormErrorMessage>{errors[key]}</FormErrorMessage>
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
        </Stack>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
