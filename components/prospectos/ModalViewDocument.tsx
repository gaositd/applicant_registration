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

interface IModalViewDocumentProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  documentName: string;
}

export const ModalViewDocument: React.FC<IModalViewDocumentProps> = ({
  isOpen,
  onClose,
  documentUrl,
  documentName,
}) => {
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
          <object height={"100%"}>
            <embed
              src={documentUrl}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </object>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
