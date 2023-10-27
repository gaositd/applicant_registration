import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";

interface IModalProspectoProps {
  isOpen: boolean;
  onClose: () => void;
  matricula: string;
  action: "remove" | "edit";
}

const ModalProspecto: React.FC<IModalProspectoProps> = ({
  isOpen,
  onClose,
  action,
  matricula,
}) => {
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {action === "remove" ? "Dar de baja" : "Modificar la información"}
        </ModalHeader>
        {action === "remove" ? (
          <ModalProspectoRemove matricula={matricula} onClose={onClose} />
        ) : (
          <ModalProspectoEdit matricula={matricula} onClose={onClose} />
        )}
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

interface IModalProspectoEditProps {
  matricula: string;
  onClose: () => void;
}

const ModalProspectoEdit: React.FC<IModalProspectoEditProps> = ({
  matricula,
  onClose,
}) => {
  return (
    <>
      <ModalBody>
        <Text fontWeight="bold" mb="1rem">
          Información del prospecto
        </Text>
        <Text>Matricula: {matricula}</Text>
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button bgColor={"primary.base"} color="white">
            Guarda información
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};

interface IModalProspectoRemoveProps {
  matricula: string;
  onClose: () => void;
}

const ModalProspectoRemove: React.FC<IModalProspectoRemoveProps> = ({
  matricula,
  onClose,
}) => {
  return (
    <>
      <ModalBody>
        <Text fontWeight="bold" mb="1rem">
          ¿Estás seguro de dar de baja a este prospecto?
        </Text>
        <Text>Matricula: {matricula}</Text>
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button bgColor={"primary.base"} color="white">
            Guarda información
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};

export default ModalProspecto;
