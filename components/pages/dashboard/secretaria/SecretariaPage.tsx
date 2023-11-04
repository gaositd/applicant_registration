"use client";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { useQuery } from "react-query";
import { UserType } from "../../../../types/userType";
import ModalProspecto from "./ModalProspecto";

export const SecretariaPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalAction, setModalAction] = useState<{
    action: "remove" | "edit" | "add";
    matricula: string;
  }>({
    action: "remove",
    matricula: "",
  });
  const [status, setStatus] = useState("all");

  const fetchProspectos = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/prospectos?status=${status}`,
      { withCredentials: true }
    );
    return data;
  };

  const { isLoading, error, data } = useQuery<UserType[]>(
    ["prospectosTable", status],
    fetchProspectos
  );

  const handleModal = (data: {
    action: "remove" | "edit" | "add";
    matricula: string;
  }) => {
    setModalAction(data);
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
          <Select
            w={"30%"}
            borderRadius={"2xl"}
            onChange={(val) => setStatus(val.target.value)}
          >
            <option value="all">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="dueued">Atrasados</option>
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
              {isLoading ? (
                <Tr>
                  <Td colSpan={3}>Cargando...</Td>
                </Tr>
              ) : error ? (
                <Tr>
                  <Td colSpan={3}>{showErrorMessage(error)}</Td>
                </Tr>
              ) : (
                data?.map((prospecto) => (
                  <TableItem
                    key={prospecto.matricula}
                    matricula={prospecto.matricula}
                    nombre={`${prospecto.nombre}`}
                    modalEvent={handleModal}
                  />
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex align={"center"} justify={"flex-end"} w="100%" h="10%" px={2}>
          <Button
            bgColor={"primary.base"}
            color="white"
            onClick={() =>
              handleModal({
                action: "add",
                matricula: "",
              })
            }
          >
            Agregar aspirante
          </Button>
        </Flex>
      </GridItem>
      <ModalProspecto
        isOpen={isOpen}
        onClose={onClose}
        matricula={modalAction.matricula}
        action={modalAction.action}
      />
    </Grid>
  );
};

interface ITableItems {
  matricula: string;
  nombre: string;
  modalEvent: (arg0: { action: "remove" | "edit"; matricula: string }) => void;
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
              onClick={() =>
                modalEvent({
                  action: "remove",
                  matricula: matricula,
                })
              }
            />
          </Tooltip>
          <Tooltip label="Editar la informacion">
            <IconButton
              variant="ghost"
              aria-label="Editar Prospecto"
              fontSize={"2xl"}
              icon={<AiFillEdit />}
              onClick={() =>
                modalEvent({
                  action: "edit",
                  matricula: matricula,
                })
              }
            />
          </Tooltip>
        </ButtonGroup>
      </Td>
    </Tr>
  );
};

const showErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 404) {
      return "No se encontraron prospectos";
    } else {
      return "Error al cargar la información";
    }
  }
};
