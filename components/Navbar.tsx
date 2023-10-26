"use client";

import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
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
    fetch("http://localhost:4242/auth/logout", {
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
    <div className="bg-pallete-primary w-full h-24 flex p-6 justify-between">
      <div>
        <img src="/logo.png" alt="logo" className="h-full object-cover" />
      </div>

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
    </div>
  );
};

export default Navbar;
