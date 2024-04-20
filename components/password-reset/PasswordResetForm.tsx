"use client";
import {
  Flex,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import AuthLayout from "../pages/rgister/AuthLayout";
import { Loading } from "../loadingComponent";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

type PasswordResetFormProps = {
  token: string | null;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  token,
}) => {
  return (
    <AuthLayout>
      <Flex width="100dvw" height="100dvh" justify={"center"} align={"center"}>
        <Flex
          width="100%"
          h="30%"
          p={4}
          flexDir={"column"}
          gap={8}
          alignItems={"center"}
        >
          <Heading size={"md"} color={"white"}>
            Recupera tu contraseña
          </Heading>
          {token ? <FormWithToken token={token} /> : <FormWithouToken />}
        </Flex>
      </Flex>
    </AuthLayout>
  );
};

const FormWithouToken = () => {
  const [email, setEmail] = useState("");

  const toast = useToast();

  const handelSubmit = async () => {
    if (!email) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/request-password-reset`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast({
          title: "Correo enviado",
          description:
            "Si el correo electronico coincide con un usuario registrado, se le enviara un correo con un token para recuperar su contrasena",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "No se pudo enviar el correo",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el correo",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex flexDir={"column"} width="100%" alignItems={"center"} h="100%">
      <FormControl>
        <FormLabel htmlFor="email" color={"white"}>
          Email
        </FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bgColor="white"
        />
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal" onClick={handelSubmit}>
        Solicitar cambio
      </Button>
    </Flex>
  );
};

type FormWithTokenProps = {
  token: string;
};
const FormWithToken: React.FC<FormWithTokenProps> = ({ token }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useToast();
  const { mutate } = useMutation(
    "reset-passsword",
    async (data: { password: string }) => {
      console.log(data, token);
      return axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/password/${token}`,
        data
      );
    },
    {
      onSuccess: () => {
        toast({
          title: "Clave cambiada",
          description: "Tu clave ha sido cambiada exitosamente",
          status: "success",
          duration: 9000,
          isClosable: true,
          onCloseComplete() {
            window.location.replace("/login");
          },
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "No se pudo cambiar la clave",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );

  const { isLoading } = useQuery(
    "verify-password-reset-token",
    async () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/password-reset-token?token=${token}`
      ),
    {
      onSuccess: () => setValidToken(true),
      onError: () => setValidToken(false),
    }
  );

  const [validToken, setValidToken] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  if (!validToken) {
    return (
      <Flex flexDir={"column"} width="100%" alignItems="center" gap={4}>
        <Heading size={"md"} color={"white"}>
          El token no es valido, solicita un nuevo token
        </Heading>
        <Button
          colorScheme="teal"
          onClick={() => window.location.replace("/password-reset")}
        >
          Solicitar nuevo token
        </Button>
      </Flex>
    );
  }
  const handlePasswordReset = () => {
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    mutate({ password });
  };

  return (
    <Flex flexDir={"column"} width="100%" alignItems="center" gap={4}>
      <FormControl>
        <FormLabel htmlFor="password" color="white">
          Nueva Clave
        </FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="********"
          bgColor="white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" color="white">
          Confirmar Clave
        </FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="********"
          bgColor="white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handlePasswordReset}>
        Cambiar Clave
      </Button>
    </Flex>
  );
};
