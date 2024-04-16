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

type PasswordResetFormProps = {
  token: string | null;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  token,
}) => {
  return (
    <Flex width="100dvw" height="100dvh" justify={"center"} align={"center"}>
      <Flex
        width="70%"
        h="50%"
        p={4}
        borderRadius={8}
        border="1px solid"
        flexDir={"column"}
        gap={8}
      >
        <Heading size={"md"}>Recupera tu contrasena</Heading>

        {token ? <FormWithToken /> : <FormWithouToken />}
      </Flex>
    </Flex>
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
        },
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
    <Flex
      flexDir={"column"}
      width="100%"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      h="100%"
    >
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" onClick={handelSubmit}>
        Solcitar cambio
      </Button>
    </Flex>
  );
};

const FormWithToken = () => {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="password">Nueva Clave</FormLabel>
        <Input type="password" id="password" placeholder="********" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Confirmar Clave</FormLabel>
        <Input type="password" id="password" placeholder="********" />
      </FormControl>
      <Button type="submit">Cambiar Clave</Button>
    </form>
  );
};
