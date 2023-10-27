"use client";
import {
  ButtonGroup,
  Grid,
  GridItem,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiDownload } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { ModalViewDocument } from "../../../components/prospectos/ModalViewDocument";

export default function ProspectoPage({ params }: { params: { id: string } }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Grid templateRows={"repeat(10,1fr)"} w="100%" h={"100%"}>
      <GridItem w="100%" rowSpan={1} display="flex" alignItems={"center"}>
        <Text fontSize={"2xl"}>Aqui va el nombre: {params.id}</Text>
      </GridItem>
      <GridItem rowSpan={9}>
        <TableContainer
          w={"100%"}
          h="100%"
          border={"2px"}
          borderColor={"structure.borders"}
          borderRadius={"2xl"}
        >
          <Table variant="simple">
            <Thead borderBottom={"2px"} borderColor="structure.borders">
              <Tr>
                <Th w={"40%"}>Documento</Th>
                <Th w="30%">Acciones</Th>
                <Th isNumeric>Acciones del archivo</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Acta de nacimiento</Td>
                <Td>
                  <ButtonGroup gap={10}>
                    <Tooltip label="Ver documento">
                      <IconButton
                        aria-label="See document"
                        variant={"ghost"}
                        fontSize="2xl"
                        icon={<GrView />}
                        onClick={onOpen}
                      />
                    </Tooltip>
                    <Tooltip label="Descargar documento">
                      <IconButton
                        aria-label="Download document"
                        variant={"ghost"}
                        fontSize="2xl"
                        icon={<BiDownload />}
                      />
                    </Tooltip>
                  </ButtonGroup>
                </Td>
                <Td isNumeric>
                  <ButtonGroup gap={10}>
                    <Tooltip label="Aceptar documento">
                      <IconButton
                        aria-label="Accept document"
                        variant={"ghost"}
                        fontSize="2xl"
                        icon={<FaCheck />}
                      />
                    </Tooltip>
                    <Tooltip label="Denegar documento">
                      <IconButton
                        aria-label="Deny document"
                        variant={"ghost"}
                        fontSize="2xl"
                        icon={<ImCross />}
                      />
                    </Tooltip>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <ModalViewDocument
        isOpen={isOpen}
        onClose={onClose}
        documentId={"1"}
        documentName={"Acta de nacimiento"}
      />
    </Grid>
  );
}
