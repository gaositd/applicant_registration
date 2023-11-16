"use client";
import {
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FILETYPES, FILE_STATUSES } from "../constants";
import Dropzone from "./Dropzone";

interface props {
  nombredDocumento: string;
  status: string;
  observaciones: {
    observacion: string;
  }[];
}

const DocumentContainer: React.FC<props> = ({
  nombredDocumento,
  status,
  observaciones,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex
      border={"2px"}
      borderColor={"structure.borders"}
      borderRadius={"lg"}
      p={3}
      justify={"space-between"}
      align={"center"}
      as={"section"}
      flexDir={{ base: "column", md: "row" }}
      overflowY={"auto"}
    >
      <Flex as={"article"} flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          {FILETYPES[nombredDocumento as keyof typeof FILETYPES]}
        </Text>
        <Text>
          Status:{" "}
          <Text as={"em"} fontWeight={"semibold"}>
            {FILE_STATUSES[status as keyof typeof FILE_STATUSES]}
          </Text>
        </Text>
        {status === "rejected" && observaciones.length > 0 && (
          <Flex flexDir={"column"} mt={3} gap={2}>
            <Text color={"red"}> Tienes observaciones pendientes</Text>
            <Button onClick={onOpen} colorScheme="teal">
              Ver
            </Button>
          </Flex>
        )}
      </Flex>
      <Dropzone status={status} tipoDocumento={nombredDocumento} />

      {/* Este modal solo se abrira cuando haya observaciones */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Listado de observaciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              {observaciones?.map((obs, index) => (
                <ListItem key={index}>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  {obs.observacion}
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DocumentContainer;
