"use client";

import {
  Icon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  useToast,
  Link,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import NextLink from "next/link";
import AuthLayout from "./pages/rgister/AuthLayout";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <AuthLayout>
      <Formik
        initialValues={{ matricula: "", password: "" }}
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
              if (res.status > 400) {
                throw new Error("Credenciales incorrectas");
              } else return res.json();
            })
            .then((data) => {
              localStorage.setItem(
                "user",
                JSON.stringify({
                  name: data.nombre,
                  matricula: data.matricula,
                }),
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
          <Form style={{ width: "100%" }}>
            <Stack
              gap={3}
              display="flex"
              flexDir="column"
              justify="center"
              align="center"
              w="100%"
              padding="3rem"
            >
              <Field name="matricula">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    marginBottom={{ base: "1rem", md: 0 }}
                  >
                    <FormLabel />
                    <InputGroup>
                      <Input
                        {...field}
                        placeholder="Matrícula"
                        color="black"
                        _placeholder={{ color: "#6A6A6A" }}
                        bgColor="white"
                        isDisabled={isDisabled}
                      />
                      <InputRightAddon
                        bg="#E7E7E7"
                        w={{ base: "2rem", md: "4.5rem" }}
                        display="flex"
                        justifyContent="center"
                      >
                        <Icon
                          as={BiSolidUserCircle}
                          color="#6A6A6A"
                          fontSize={{ base: "1rem", md: "1.5rem" }}
                        />
                      </InputRightAddon>
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    marginBottom={{ base: "1rem", md: 0 }}
                  >
                    <FormLabel />
                    <InputGroup>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Contraseña"
                        _placeholder={{ color: "#6A6A6A" }}
                        bgColor="white"
                        isDisabled={isDisabled}
                      />
                      {/* <InputRightAddon
                          w={{ base: '2rem', md: '4.5rem' }}
                          display='flex'
                          justifyContent='center'
                          bg='#E7E7E7'
                          children={
                            <Icon
                              as={FaLock}
                              color='#6A6A6A'
                              fontSize={{ base: '1rem', md: '1.5rem' }}
                            />
                          }
                        /> */}
                      <InputRightAddon
                        w={{ base: "2rem", md: "4.5rem" }}
                        display="flex"
                        justifyContent="center"
                        bg="#E7E7E7"
                      >
                        <Icon
                          as={FaLock}
                          color="#6A6A6A"
                          fontSize={{ base: "1rem", md: "1.5rem" }}
                        />
                      </InputRightAddon>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                w="60%"
                alignItems="center"
                color="black"
                bgColor="white"
                isLoading={props.isSubmitting}
                type="submit"
                isDisabled={isDisabled}
              >
                Iniciar sesión
              </Button>
              <Text color="white">
                ¿Eres de nuevo ingreso?&nbsp;
                <Link as={NextLink} href="/register" fontWeight="bold">
                  Registrate aquí
                </Link>
              </Text>
            </Stack>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default LoginForm;
