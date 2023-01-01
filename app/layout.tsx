"use client";

import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
