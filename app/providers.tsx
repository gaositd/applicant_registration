import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

interface props {
  children: React.ReactNode;
}

const Providers: React.FC<props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
