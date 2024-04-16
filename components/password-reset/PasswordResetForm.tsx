"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";

type PasswordResetFormProps = {
  token: string | null;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  token,
}) => {
  return (
    <Flex
      as='main'
      color='#6C6C6C'
      h='100vh'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex
        as='article'
        w={{ base: '100%', md: '60%' }}
        h={{ base: '30%', md: '100%' }}
        bg='white'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src='/logo.svg'
          boxSize={{ base: '70%', md: '45%' }}
          maxW='100%'
          minHeight='max-content'
          alt='  '
        />
        <Box
          as='footer'
          alignItems='flex-end'
          marginTop='auto'
          position='absolute'
          bottom='0'
          display={{ base: 'none', md: 'block' }}
          textAlign={{ base: 'center', md: 'center' }}
        >
          <Text fontWeight='bold'>
            Universidad Juárez del Estado de Durango
          </Text>
          <Text fontSize='md'>
            Constitución 404 Sur. Zona Centro. C.P. 34000. Durango, Dgo. México.
            <br />
            Tel: 618 827 1200.
          </Text>
        </Box>
        </Flex>
        <Flex
          as='aside'
          bg='primary.base'
          w={{ base: '100%', md: '40%' }}
          h={{ base: '70%', md: '100%' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          justifyContent='center'
          p={{ base: '2rem', md: 0 }}
        >
          <Box
            as='header'
            alignItems='center'
            display={{ base: 'none', md: 'block' }}
            textAlign='center'
            width="70%"
          >
            <Heading size={"md"} color='white'>Recupera tu contraseña</Heading>

        {token ? <FormWithToken /> : <FormWithouToken />}
          </Box>
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
            "Si el correo electrónico coincide con un usuario registrado, se le enviara un correo para recuperar su contraseña",
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
        <FormLabel htmlFor="email" color='white'>Email</FormLabel>
        <Input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <Button
        mt={4}
        w='60%'
        alignItems='center'
        color='black'
        bgColor='white'
        onClick={handelSubmit}
      >
        Solicitar cambio
      </Button>
    </Flex>
  );
};

const FormWithToken = () => {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="password">Nueva Contraseña</FormLabel>
        <Input type="password" id="password" placeholder="********" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Confirmar Contraseña</FormLabel>
        <Input type="password" id="password" placeholder="********" />
      </FormControl>
      <Button type="submit">Cambiar Contraseña</Button>
    </form>
  );
};
