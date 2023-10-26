"use client";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  IconButton,
  Th,
  Thead,
  Tr,
  ButtonGroup,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import ModalProspecto from "./ModalProspecto";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SecretariaPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalAction, setModalAction] = useState<"remove" | "edit">("remove");

  const handleModal = (action: "remove" | "edit") => {
    setModalAction(action);
    onOpen();
  };

  return (
    <Grid
      templateColumns={{ base: "1fr" }}
      templateRows={{ base: "repeat(10, 1fr)" }}
      w={"100%"}
      height={"100%"}
      gap={"6"}
    >
      <GridItem
        display={"flex"}
        justifyContent="flex-end"
        rowSpan={1}
        colSpan={2}
      >
        <HStack w="50%">
          <Select w={"30%"} borderRadius={"2xl"}>
            <option value="option1">Todos</option>
            <option value="option2">Pendientes</option>
            <option value="option3">Atrasados</option>
          </Select>
          <InputGroup w={"70%"}>
            <Input placeholder="Buscar" borderRadius={"2xl"} />
            <InputRightElement children={<Icon as={BiSearch} />} />
          </InputGroup>
        </HStack>
      </GridItem>
      <GridItem
        rowSpan={8}
        display={"flex"}
        flexDir={"column"}
        id="aspirantesContainer"
      >
        <TableContainer
          w={"100%"}
          h="100%"
          border={"2px"}
          borderColor={"structure.borders"}
          borderRadius={"2xl"}
        >
          <Table size={"lg"}>
            <Thead>
              <Tr>
                <Th>Matricula</Th>
                <Th>Nombre</Th>
                <Th isNumeric>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TableItem
                matricula={"AAAAAA-AAAAA"}
                nombre={"Nombre"}
                modalEvent={handleModal}
              />
              <TableItem
                matricula={"AAAAAA-AAAAA"}
                nombre={"Nombre"}
                modalEvent={handleModal}
              />
              <TableItem
                matricula={"AAAAAA-AAAAA"}
                nombre={"Nombre"}
                modalEvent={handleModal}
              />
            </Tbody>
          </Table>
        </TableContainer>
        <Flex align={"center"} justify={"flex-end"} w="100%" h="10%" px={2}>
          <Button bgColor={"primary.base"} color="white">
            Agregar aspirante
          </Button>
        </Flex>
      </GridItem>
      <ModalProspecto
        isOpen={isOpen}
        onClose={onClose}
        matricula={"AAAAAA-AAAAA"}
        action={modalAction}
      />
    </Grid>
  );
};

interface ITableItems {
  matricula: string;
  nombre: string;
  modalEvent: (arg0: "remove" | "edit") => void;
}

const TableItem = ({ matricula, nombre, modalEvent }: ITableItems) => {
  const router = useRouter();

  return (
    <Tr _hover={{ bgColor: "#f2f2f2" }}>
      <Td fontWeight={"bold"}>{matricula}</Td>
      <Td>{nombre}</Td>
      <Td isNumeric>
        <ButtonGroup>
          <Tooltip label="Ver expediente">
            <IconButton
              variant="ghost"
              aria-label="Ver expediente"
              fontSize={"2xl"}
              icon={<ImProfile />}
              onClick={() => router.push(`/prospecto/${matricula}`)}
            />
          </Tooltip>
          <Tooltip label="Dar de baja prospecto">
            <IconButton
              variant="ghost"
              aria-label="Baja Prospecto"
              fontSize="2xl "
              icon={<BsFillTrashFill />}
              onClick={() => modalEvent("remove")}
            />
          </Tooltip>
          <Tooltip label="Editar la informacion">
            <IconButton
              variant="ghost"
              aria-label="Editar Prospecto"
              fontSize={"2xl"}
              icon={<AiFillEdit />}
              onClick={() => modalEvent("edit")}
            />
          </Tooltip>
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
