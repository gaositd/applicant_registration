import { Box, Flex, Image, Text } from "@chakra-ui/react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Flex
      as="main"
      color="#6C6C6C"
      h="100vh"
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex
        as="article"
        w={{ base: "100%", md: "60%" }}
        h={{ base: "30%", md: "100%" }}
        bg="white"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          boxSize={{ base: "70%", md: "45%" }}
          maxW="100%"
          minHeight="max-content"
          alt="  "
        />
        <Box
          as="footer"
          alignItems="flex-end"
          marginTop="auto"
          position="absolute"
          bottom="0"
          display={{ base: "none", md: "block" }}
          textAlign={{ base: "center", md: "center" }}
        >
          <Text fontWeight="bold">
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
        as="aside"
        bg="primary.base"
        w={{ base: "100%", md: "40%" }}
        h={{ base: "70%", md: "100%" }}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="center"
        p={{ base: "2rem", md: 0 }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
