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
  Spacer,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";

const LoginForm: React.FC = () => {
  return (
    <Flex as={"main"} color="#6C6C6C" h={"100dvh"}>
      <Flex
        as={"article"}
        w="60%"
        h={"100%"}
        bg="white"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent="space-around"
      >
        <Image
          src="/logo.svg"
          boxSize={"45%"}
          flexGrow={"1"}
          minHeight="max-content"
        />
        <Box
          as="footer"
          alignItems={"flex-end"}
          marginTop="auto"
          position={"absolute"}
          bottom={"0"}
        >
          <Text textAlign={"center"} fontSize="md">
            <Text fontWeight={"bold"}>
              Universidad Juárez del Estado de Durango
            </Text>
            Constitución 404 Sur. Zona Centro. C.P. 34000. Durango, Dgo. México.
            <br />
            Tel: 618 827 1200.
          </Text>
        </Box>
      </Flex>
      <Flex
        as={"aside"}
        bg="primary.base"
        w="40%"
        alignItems={"center"}
        justifyContent="center"
      >
        <Formik
          initialValues={{ name: "Sasuke" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form style={{ width: "100%" }}>
              <Stack
                gap={3}
                display="flex"
                flexDir={"column"}
                justify="center"
                align={"center"}
                w={"100%"}
                padding={"3rem"}
              >
                <Field name="matricula">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel></FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          placeholder="Matrícula"
                          color={"black"}
                          _placeholder={{ color: "#6A6A6A" }}
                          bgColor="white"
                        />
                        <InputRightAddon
                          bg="#E7E7E7"
                          w={"4.5rem"}
                          display="flex"
                          justifyContent={"center"}
                        >
                          <Icon
                            as={BiSolidUserCircle}
                            color="#6A6A6A"
                            fontSize={{ base: "1rem", md: "1.5rem" }}
                          />
                        </InputRightAddon>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="contraseña">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel></FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          placeholder="Contraseña"
                          _placeholder={{ color: "#6A6A6A" }}
                          bgColor="white"
                        />
                        <InputRightAddon
                          w={"4.5rem"}
                          display="flex"
                          justifyContent={"center"}
                          children={
                            <Icon
                              as={FaLock}
                              color="#6A6A6A"
                              fontSize={{ base: "1rem", md: "1.5rem" }}
                            />
                          }
                          bg="#E7E7E7"
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  w={"60%"}
                  alignItems={"center"}
                  color="black"
                  bgColor="white"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Iniciar sesión
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
