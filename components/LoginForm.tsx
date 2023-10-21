"use client";

import { Flex, Text } from "@chakra-ui/react";

const LoginForm: React.FC = () => {
  return (
    <Flex as={"main"} color="white" h={"100dvh"}>
      <Flex as={"article"} w="60%" bg="primary.base">
        <Text>Box 1</Text>
      </Flex>
      <Flex as={"aside"} bg="blue.500" w="40%">
        <Text>Box 2</Text>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
