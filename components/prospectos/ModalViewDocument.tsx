import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface IModalViewDocumentProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string;
  documentName: string;
}

export const ModalViewDocument: React.FC<IModalViewDocumentProps> = ({
  isOpen,
  onClose,
  documentId,
  documentName,
}) => {
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const fetchDocument = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/docs/file/${documentId}`,
          { withCredentials: true, responseType: "blob" }
        );
        setFile(URL.createObjectURL(data));
      };

      fetchDocument();
    }
  }, [documentId]);

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={"6xl"}
      orientation="vertical"
    >
      <ModalOverlay />
      <ModalContent h={"70%"}>
        <ModalHeader>{documentName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody h={"100%"}>
          {file && (
            <object height={"100%"}>
              <embed
                src={file}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </object>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
