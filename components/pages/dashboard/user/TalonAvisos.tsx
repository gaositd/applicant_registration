import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export const TalonAvisos: React.FC = () => {
  return (
    <Flex
      border={"2px"}
      borderColor={"structure.borders"}
      borderRadius={"2xl"}
      w={"25%"}
      flexDir={"column"}
      p={3}
      align={"center"}
    >
      <Heading fontSize="lg">Talon de avisos</Heading>
      <Stack spacing={3} mt={3} w={"full"}>
        <Text>Se requiere que se vea le contenido adicional</Text>
        <Text>
          Revisa el siguiente{" "}
          <Link href="http://google.com" color={"blue"}>
            enlace
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};
