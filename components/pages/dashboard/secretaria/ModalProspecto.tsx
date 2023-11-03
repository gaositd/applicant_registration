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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IModalProspectoProps {
  isOpen: boolean;
  onClose: () => void;
  matricula: string;
  action: "remove" | "edit" | "add";
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
          {action === "remove"
            ? "Dar de baja"
            : action === "edit"
            ? "Editar"
            : "Agregar"}
        </ModalHeader>
        {action === "remove" ? (
          <ModalProspectoRemove matricula={matricula} onClose={onClose} />
        ) : action === "edit" ? (
          <ModalProspectoEdit matricula={matricula} onClose={onClose} />
        ) : (
          <ModalProspectoAdd onClose={onClose} />
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
  const fetchProspectoInfo = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${matricula}`,
      {
        withCredentials: true,
      }
    );
    return data;
  };

  const { isError, data, isLoading } = useQuery(
    "prospectoEdit",
    fetchProspectoInfo
  );

  return (
    <>
      <ModalBody>
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : isError ? (
          <Text>Hubo un error al cargar la información</Text>
        ) : (
          <Formik initialValues={data} onSubmit={() => {}}>
            {() => (
              <form>
                <Text fontWeight="bold" mb="1rem">
                  Información del prospecto
                </Text>
              </form>
            )}
          </Formik>
        )}
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
  const toast = useToast();

  const queryClient = useQueryClient();

  const deleteProspecto = async () => {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users${matricula}`,
      {
        withCredentials: true,
      }
    );

    return data;
  };

  const { mutate } = useMutation("deleteProspecto", deleteProspecto, {
    onSuccess: () => {
      toast({
        title: "Prospecto eliminado",
        description: "El prospecto ha sido eliminado",
        status: "success",
        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          queryClient.invalidateQueries("prospectos");
          onClose();
        },
      });
    },
    onError: () => {
      toast({
        title: "Error al eliminar el prospecto",
        description:
          "Hubo un error al eliminar el prospecto, intenta de nuevo más tarde",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

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
          <Button
            bgColor={"primary.base"}
            color="white"
            onClick={() => {
              mutate();
            }}
          >
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

interface IModalProspectoAddProps {
  onClose: () => void;
}

const ModalProspectoAdd: React.FC<IModalProspectoAddProps> = ({ onClose }) => {
  return (
    <>
      <ModalBody>
        {/* Form to add a user */}
        <Formik initialValues={{}} onSubmit={() => {}}>
          {() => (
            <form>
              <Text fontWeight="bold" mb="1rem">
                Información del prospecto
              </Text>
            </form>
          )}
        </Formik>
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
