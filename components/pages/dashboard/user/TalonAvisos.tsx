import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type TTalonAvisos = {
  data: string;
  required: boolean;
  addressed: boolean;
  type: "text" | "resource";
};

export const TalonAvisos: React.FC = () => {
  const { isLoading, isError, data } = useQuery<TTalonAvisos[]>(
    "talonAvisos",
    async () => {
      const response = await axios.get<TTalonAvisos[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/notifications`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    }
  );

  return (
    <Flex
      border={"2px"}
      borderColor={"structure.borders"}
      borderRadius={"2xl"}
      w={{ base: "100%", md: "40%" }}
      flexDir={"column"}
      p={3}
      align={"center"}
    >
      <Heading fontSize="lg">Talon de avisos</Heading>
      <Stack spacing={3} mt={3} w={"full"}>
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : isError ? (
          <Text>Ocurrió un error al cargar los avisos</Text>
        ) : (
          data?.map((aviso) => <Notificacion {...aviso} />)
        )}
      </Stack>
    </Flex>
  );
};

const Notificacion: React.FC<TTalonAvisos> = ({
  data,
  required,
  addressed,
  type,
}) => {
  console.log(data, type);
  return type === "text" ? (
    <Text as={required && addressed ? "s" : undefined}>
      {data}
      {required ? (
        <>
          {" "}
          -{" "}
          <Text as={"span"} color={"red"}>
            Requerido
          </Text>{" "}
        </>
      ) : null}
    </Text>
  ) : (
    <Text as={required && addressed ? "s" : undefined}>
      Recuerda revisar el siguente recurso:
      <Link href={data} color={"blue"}>
        {" "}
        Haz click aqui
        <ExternalLinkIcon mx="2px" />
      </Link>
      {required ? (
        <>
          {" "}
          -{" "}
          <Text as={"span"} color={"red"}>
            Requerido
          </Text>{" "}
        </>
      ) : null}
    </Text>
  );
};
