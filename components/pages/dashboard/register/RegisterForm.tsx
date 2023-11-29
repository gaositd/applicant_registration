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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";

type TFormInputs = {
  [key: string]: {
    placeholder: string;
    icon: IconType;
  };
};

const FormInputs: TFormInputs[] = [
  {
    name: {
      placeholder: "Nombre",
      icon: BiSolidUserCircle,
    },
    apellidoPaterno: {
      placeholder: "Apellido paterno",
      icon: BiSolidUserCircle,
    },
    apellidoMaterno: {
      placeholder: "Apellido materno",
      icon: BiSolidUserCircle,
    },
  },
  {
    matricula: {
      placeholder: "Matrícula",
      icon: BiSolidUserCircle,
    },
    password: {
      placeholder: "Contraseña",
      icon: FaLock,
    },
  },
  {
    carrera: {
      placeholder: "Carrera",
      icon: BiSolidUserCircle,
    },
    semestre: {
      placeholder: "Semestre",
      icon: BiSolidUserCircle,
    },
    grupo: {
      placeholder: "Grupo",
      icon: BiSolidUserCircle,
    },
  },
];

const getInputObject = () => {
  return FormInputs.map((input) => {
    return Object.keys(input).map((key) => {
      return { [key]: "" };
    });
  });
};

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
        <Formik
          initialValues={{ ...getInputObject() }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);

            fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(values),
            })
              .then((res) => {
                if (res.status > 400)
                  throw new Error("Credenciales incorrectas");
                else return res.json();
              })
              .then((data) => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    name: data.nombre,
                    matricula: data.matricula,
                  })
                );
                actions.setSubmitting(false);
                setIsDisabled(true);

                router.replace("/dashboard");
              })
              .catch((err) => {
                console.log(err);

                toast({
                  title: "Error",
                  description: `${err.message}, si el error persiste comunicate a las oficinas de la UJED`,
                  status: "error",
                  duration: 3500,
                });
                actions.setSubmitting(false);
              });
          }}
        >
          {(props) => (
            <Form style={{ width: "100%", height: "60%" }}>
              <Stack
                gap={3}
                display="flex"
                flexDir={"column"}
                justify="center"
                align={"center"}
                w={"100%"}
                padding={"3rem"}
              >
                {FormInputs[currentPage] &&
                  Object.keys(FormInputs[currentPage]).map((key) => (
                    <Field name={key}>
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          marginBottom={{ base: "1rem", md: 0 }}
                        >
                          <FormLabel></FormLabel>
                          <InputGroup>
                            <Input
                              {...field}
                              placeholder={
                                FormInputs[currentPage][key].placeholder
                              }
                              color={"black"}
                              _placeholder={{ color: "#6A6A6A" }}
                              bgColor="white"
                              isDisabled={isDisabled}
                            />
                            <InputRightAddon
                              bg="#E7E7E7"
                              w={{ base: "2rem", md: "4.5rem" }}
                              display="flex"
                              justifyContent={"center"}
                            >
                              <Icon
                                as={FormInputs[currentPage][key].icon}
                                color="#6A6A6A"
                                fontSize={{ base: "1rem", md: "1.5rem" }}
                              />
                            </InputRightAddon>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                  ))}

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
                    isLoading={props.isSubmitting}
                    isDisabled={isDisabled}
                    onClick={() => {
                      if (currentPage === FormInputs.length - 1) {
                        props.submitForm();
                      } else {
                        setCurrentPage((prev) => prev + 1);
                      }
                    }}
                  >
                    {currentPage === FormInputs.length - 1
                      ? "Registrarse"
                      : "Siguiente"}
                  </Button>
                </ButtonGroup>
              </Stack>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
