"use client";

import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface props {}

const Navbar: React.FC<props> = () => {
  const [user, setUser] = useState<{ name: string; matricula: string } | null>(
    null
  );

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) setUser(JSON.parse(user));
  }, []);

  const router = useRouter();

  const toast = useToast();

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("user");

        router.push("/login");
      } else
        toast({
          description: "No se puede cerrar la sesion",
          status: "error",
          title: "Ha sucedido un error al cerrar la sesion",
        });
    });
  };

  return (
    <Flex
      bgColor={"primary.base"}
      w={"100%"}
      h={"10%"}
      p={6}
      justify={"space-between"}
      align={"center"}
    >
      <Flex>
        <Image src="/logo.png" alt="logo" />
      </Flex>

      <div>
        <Heading color="white" size="md">
          Sistema de preinscripciones
        </Heading>
      </div>
      <Menu>
        <MenuButton
          id="3"
          as={Button}
          rightIcon={<AiFillCaretDown />}
          borderRadius={10}
          colorScheme={"white"}
        >
          {user?.name}
        </MenuButton>

        <MenuList>
          <MenuItem id="1">Perfil</MenuItem>
          <MenuDivider />
          <MenuItem id="2" onClick={handleLogout}>
            Cerrar sesion
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <h2 className="font-bold text-white">John Doe</h2>
      <AiFillCaretDown className="text-white" /> */}
    </Flex>
  );
};

export default Navbar;
