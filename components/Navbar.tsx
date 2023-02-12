"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { SessionContext } from "../hooks/SessionContext";

interface props {}

const Navbar: React.FC<props> = () => {
  const [user, setUser] = useContext(SessionContext);

  const router = useRouter();

  const toast = useToast();

  const handleLogout = () => {
    fetch("http://localhost:4242/auth/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        setUser(undefined);
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
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          transition="all 0.2s"
          borderRadius={10}
          colorScheme={"white"}
        >
          {user?.nombre}
        </MenuButton>
        <MenuList>
          <MenuItem>Perfil</MenuItem>
          <MenuDivider />
          <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
        </MenuList>
      </Menu>
      {/* <h2 className="font-bold text-white">John Doe</h2>
      <AiFillCaretDown className="text-white" /> */}
    </div>
  );
};

export default Navbar;
