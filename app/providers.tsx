import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { SessionProvider } from "../hooks/SessionContext";

interface props {
  children: React.ReactNode;
}

const Providers: React.FC<props> = ({ children }) => {
  return (
    <ChakraProvider>
      <SessionProvider>{children}</SessionProvider>
    </ChakraProvider>
  );
};

export default Providers;
