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
import { useState } from "react";

import { useMutation } from "react-query";
import { ZodError, date } from "zod";
import FormInputs from "./register.input";
import { TInput } from "./register.types";
import RegisterSchema from "./validation.schema";
import axios from "axios";
import { UserType } from "../../../../types/userType";

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

type RegisterUserType = UserType & {
  password: string;
};

const parseValueToString = (value: unknown, isDate?: boolean) => {
  if (typeof value === "number") {
    return value.toString();
  } else if (typeof value === "boolean") {
    return value ? "si" : "no";
  } else if (
    typeof value === "string" &&
    isDate &&
    value.split("-").length === 3
  ) {
    //get date string in aaa/mm/dd format
    const date = new Date(value).toISOString().split("T")[0];
    return date;
  } else return String(value);
};

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState<
    Record<string, string | boolean | number>
  >(getInputObject());
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleSubmit = () => {
    mutate();
  };

  const getInputHTML = (input: TInput, key: string) => {
    if (input.type === "select") {
      return (
        <Select
          bgColor={"white"}
          value={parseValueToString(formData[key])}
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
              [key]: input.boolean ? e.target.value === "si" : e.target.value,
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
    } else
      return (
        <Input
          value={parseValueToString(formData[key], input.type === "date")}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [key]:
                input.type === "number"
                  ? Number(e.target.value)
                  : input.type === "date"
                  ? new Date(e.target.value).toISOString()
                  : e.target.value,
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
    setErrors({});
    try {
      RegisterSchema[currentPage].parse(formData);
      if (action === "next" && currentPage === FormInputs.length - 1) {
        handleSubmit();
      } else if (action === "next" && currentPage !== FormInputs.length - 1) {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage((prev) => prev - 1);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
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
              bgColor={currentPage < FormInputs.length - 1 ? "white" : "green"}
              colorScheme={currentPage === FormInputs.length - 1 ? "green" : ""}
              isDisabled={isDisabled}
              onClick={() => handleOnStepChange("next")}
            >
              {currentPage === FormInputs.length - 1
                ? "Registrarse"
                : "Siguiente"}
            </Button>
          </ButtonGroup>
          <Text fontSize="1xl" color="white" as="b">
            *Podrás pasar a la siguiente página hasta completar esta sección
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default RegisterForm;
