"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import axios from "axios";
import { useMutation } from "react-query";
import { ZodError } from "zod";
import { UserType } from "../../../../types/userType";
import { StepDatosContactoForm } from "./form-steps/step.datosContacto";
import {
  StepDatosPersonalesForm,
  StepDatosPersonalesIIForm,
} from "./form-steps/step.datosPersonales";
import { StepDatosUbicacionForm } from "./form-steps/step.datosUbicacion";
import FormInputs from "./register.input";
import RegisterSchema from "./validation.schema";
import { StepDatosEscolaresForm } from "./form-steps/step.datosEscolares";

type RegisterUserType = UserType & {
  password: string;
};

export type RegisterFormValues = {
  apellidoMaterno: string;
  apellidoPaterno: string;
  celular: string;
  curp: string;
  dialecto: boolean;
  direccion: string;
  email: string;
  escuelaProcedencia: string;
  estadoCivil: string;
  estadoEscuela: string;
  estadoNacimiento: string;
  fechaNacimiento: string;
  municipioEscuela: string;
  municipioNacimiento: string;
  nombre: string;
  promedioBachillerato: number;
  sexo: string;
  telefono: string;
  tipoEscuelaProcedencia: string;
  trabaja: boolean;
};

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState<RegisterFormValues>({
    apellidoMaterno: "",
    apellidoPaterno: "",
    celular: "",
    curp: "",
    dialecto: false,
    direccion: "",
    email: "",
    escuelaProcedencia: "",
    estadoCivil: "",
    estadoEscuela: "",
    estadoNacimiento: "",
    fechaNacimiento: "",
    municipioEscuela: "",
    municipioNacimiento: "",
    nombre: "",
    promedioBachillerato: 0,
    sexo: "",
    telefono: "",
    tipoEscuelaProcedencia: "",
    trabaja: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const FormSteps = [
    <StepDatosPersonalesForm
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosPersonalesIIForm
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosContactoForm
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosUbicacionForm
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosEscolaresForm
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
      handleSubmit={handleSubmit}
    />,
  ];

  const { mutate } = useMutation<RegisterUserType>(
    "register",
    async () => {
      setIsDisabled(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        formData
      );
      return data;
    },
    {
      onSuccess: (data) => {
        setIsDisabled(false);
        toast({
          title: "Usuario registrado",
          description: `Tu matrícula es ${data.matricula} y tu contraseña es ${data.password}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/dashboard");
      },
      onError: (error) => {
        setIsDisabled(false);

        if (error instanceof Error)
          toast({
            title: "Error al registrar",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      },
    }
  );

  function handleSubmit() {
    mutate();
  }

  // async function handleOnStepChange(action: "next" | "prev") {
  //   console.log("Aqui la data viejon", formData);
  //   setErrors({});
  //   try {
  //     RegisterSchema[currentPage].parse(formData);
  //     if (action === "next" && currentPage === FormInputs.length - 1) {
  //       handleSubmit();
  //     } else if (action === "next" && currentPage !== FormInputs.length - 1) {
  //       setCurrentPage((prev) => prev + 1);
  //     } else {
  //       setCurrentPage((prev) => prev - 1);
  //     }
  //   } catch (error) {
  //     if (error instanceof ZodError) {
  //       console.log(error);
  //       const formErrors: Record<string, string> = {};

  //       const flatErrors = error.flatten().fieldErrors;
  //       Object.keys(flatErrors).forEach((errorKey) => {
  //         const errorValue = flatErrors[errorKey];
  //         if (Array.isArray(errorValue) && errorValue.length > 0) {
  //           formErrors[errorKey] = errorValue[0];
  //         }
  //       });

  //       setErrors(formErrors);
  //     }
  //   }
  // }
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
        h={{ base: "30%", md: "100%", sm: "20%" }}
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
        h={{ base: "70%", md: "100%", sm: "80%" }}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="center"
        p={{ base: "2rem", md: 0 }}
        flexDir={"column"}
      >
        <Heading color={"white"}>Registrate</Heading>

        <Stack
          display="flex"
          flexDir={"column"}
          justify="center"
          align={"center"}
          w={"100%"}
          padding={"3rem"}
          overflowY={"auto"}
        >
          {FormSteps[currentPage]}

          <Text fontSize="1xl" color="white" as="b">
            *Podrás pasar a la siguiente página hasta completar esta sección
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
