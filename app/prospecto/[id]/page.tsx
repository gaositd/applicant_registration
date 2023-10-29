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
  useToast,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiDownload } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { ModalViewDocument } from "../../../components/prospectos/ModalViewDocument";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { FileNames } from "../../../types/types";

export interface DocumentSelector {
  documentId: string;
  documentName: string;
}

interface ApiDocuments {
  id: string;
  fileType: string;
  ruta: string;
  status: string;
  observaciones: string[];
}

interface ApiUsersDocumentsResponse {
  name: string;
  documentos: ApiDocuments[];
}

export default function ProspectoPage({ params }: { params: { id: string } }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedDocument, setSelectedDocument] = useState<DocumentSelector>({
    documentId: "",
    documentName: "",
  });

  const fetchUserDocuments = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/docs/${params.id}`,
      { withCredentials: true }
    );
    return data;
  };

  const { data, error, isLoading } = useQuery<ApiUsersDocumentsResponse>(
    "userDocuments",
    fetchUserDocuments
  );

  const handleDocumentClick = (documentData: DocumentSelector) => {
    setSelectedDocument(documentData);
    onOpen();
  };

  if (!isLoading && !error) console.log("data", data);

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
              {isLoading ? (
                <Tr>
                  <Td colSpan={3}>Cargando...</Td>
                </Tr>
              ) : error ? (
                <Tr>
                  <Td colSpan={3}>Error al cargar los documentos</Td>
                </Tr>
              ) : data?.documentos && data.documentos.length <= 0 ? (
                <Tr>
                  <Td colSpan={3}>No hay documentos</Td>
                </Tr>
              ) : (
                data?.documentos.map((document: ApiDocuments) => (
                  <TableItem
                    key={document.id}
                    documentName={FileNames.get(document.fileType) || ""}
                    documentId={document.id}
                    handleClick={handleDocumentClick}
                    status={document.status}
                  />
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <ModalViewDocument
        isOpen={isOpen}
        onClose={onClose}
        documentId={selectedDocument.documentId}
        documentName={selectedDocument.documentName}
      />
    </Grid>
  );
}

interface TableItemProps {
  documentName: string;
  documentId: string;
  documentUrl?: string;
  handleClick: (arg0: DocumentSelector) => void;
  status: string;
}

const TableItem: React.FC<TableItemProps> = ({
  documentName,
  documentId,
  handleClick,
  status,
}) => {
  const toast = useToast();

  const handleDownload = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/docs/file/${documentId}` || "", {
        responseType: "blob",
        withCredentials: true,
      })
      .then((response) => {
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", documentName);
        document.body.appendChild(link);
        link.click();

        link.parentNode?.removeChild(link);
      })
      .catch((error) => {
        toast({
          title: "Error al descargar el documento",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Tr>
      <Td>{documentName}</Td>
      <Td>
        <ButtonGroup gap={10}>
          <Tooltip
            label={`${
              status === "open-to-upload"
                ? "El archivo no ha sido recibido"
                : "Ver el documento"
            }`}
          >
            <IconButton
              aria-label="See document"
              variant={"ghost"}
              fontSize="2xl"
              isDisabled={status === "open-to-upload"}
              icon={<GrView />}
              onClick={() =>
                handleClick({
                  documentId,
                  documentName,
                })
              }
            />
          </Tooltip>
          <Tooltip
            label={`${
              status === "open-to-upload"
                ? "El archivo no ha sido recibido"
                : "Descargar el documento"
            }`}
          >
            <IconButton
              aria-label="Download document"
              variant={"ghost"}
              fontSize="2xl"
              icon={<BiDownload />}
              onClick={handleDownload}
              isDisabled={status === "open-to-upload"}
            />
          </Tooltip>
        </ButtonGroup>
      </Td>
      <Td isNumeric>
        <ButtonGroup gap={10}>
          <Tooltip
            label={`${
              status === "open-to-upload"
                ? "El archivo no ha sido recibido"
                : "Aceptar el documento"
            }`}
          >
            <IconButton
              aria-label="Accept document"
              variant={"ghost"}
              fontSize="2xl"
              icon={<FaCheck />}
              isDisabled={status === "open-to-upload"}
            />
          </Tooltip>
          <Tooltip
            label={`${
              status === "open-to-upload"
                ? "El archivo no ha sido recibido"
                : "Denegar el documento"
            }`}
          >
            <IconButton
              aria-label="Deny document"
              variant={"ghost"}
              fontSize="2xl"
              icon={<ImCross />}
              isDisabled={status === "open-to-upload"}
            />
          </Tooltip>
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
