import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface props {}

const Navbar: React.FC<props> = () => {
  return (
    <div className="bg-pallete-primary w-full h-24 flex p-6 justify-between">
      <div>
        <img src="/logo.png" alt="logo" className="h-full object-cover" />
      </div>
      <div>{/* <CustomButton text="test" colorType="success" /> */}</div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<AiFillCaretDown />}
          transition="all 0.2s"
          borderRadius={10}
          colorScheme={"white"}
        >
          John Doe
        </MenuButton>
        <MenuList>
          <MenuItem>Perfil</MenuItem>
          <MenuDivider />
          <MenuItem>Cerrar sesion</MenuItem>
        </MenuList>
      </Menu>
      {/* <h2 className="font-bold text-white">John Doe</h2>
      <AiFillCaretDown className="text-white" /> */}
    </div>
  );
};

export default Navbar;
