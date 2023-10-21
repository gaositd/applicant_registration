import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { SessionProvider } from "../hooks/SessionContext";

interface props {
  children: React.ReactNode;
}

const Providers: React.FC<props> = ({ children }) => {
  const extendedTheme = extendTheme({
    colors: {
      primary: {
        base: "#1E40AF",
        hover: "#1D4ED8",
      },
    },
  });

  return (
    <ChakraProvider theme={extendedTheme}>
      <SessionProvider>{children}</SessionProvider>
    </ChakraProvider>
  );
};

export default Providers;
