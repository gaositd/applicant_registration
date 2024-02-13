import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

type AppConfigDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ConfigValues = {
  id: number;
  name: string;
  value: string;
};
const AppConfigDrawer: React.FC<AppConfigDrawerProps> = ({
  onClose,
  isOpen,
}) => {
  const [configValues, setConfigValues] = useState<Record<string, string>>();

  const [dataChanges, setDataChanges] = useState<Array<any>>([]);
  const toast = useToast();
  const {
    data: initialData,
    isLoading,
    isError,
    refetch,
  } = useQuery<ConfigValues[]>(
    "configValues",
    async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/settings`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
    {
      onSuccess(data) {
        const configObject: Record<string, string> = {};
        data
          .filter((config) => config.name !== "semestre-status")
          .forEach((config) => {
            configObject[config.name] = config.value;
          });
        setConfigValues(configObject);
      },
    }
  );

  const updateSetting = async (urlString: string) => {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/settings/${urlString}`,
      {},
      {
        withCredentials: true,
      }
    );
    return data;
  };

  const parseDataChanges = (
    initialData: ConfigValues[],
    configValues: Record<string, string>
  ): Array<string> => {
    const ignoredKeys = ["semestre-status", "folio-consecutivo"];
    return initialData.reduce((acc, config) => {
      if (ignoredKeys.includes(config.name)) {
        return acc;
      } else if (configValues[config.name] !== config.value) {
        acc.push(config.name);
      }
      return acc;
    }, [] as Array<string>);
  };

  const handlSaveChanges = async () => {
    if (dataChanges.length <= 0) return;

    if (!configValues) return;
    const responses = await Promise.all(
      dataChanges.map(async (change) => {
        const url = `${change}?value=${configValues[change]}`;
        return updateSetting(url);
      })
    );

    setDataChanges([]);
    console.log(responses);
    if (responses.every((response) => response)) {
      toast({
        title: "Cambios guardados",
        description: "Los cambios se han guardado correctamente",
        status: "success",
        duration: 5000,
        isClosable: true,
        onCloseComplete: () => {
          onClose();
        },
      });
      refetch();
    } else if (responses.some((response) => typeof response === "undefined")) {
      toast({
        title: "Error al guardar cambios",
        description:
          "Algunos cambios no se pudieron guardar, revisa la información e intenta de nuevo.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error al guardar cambios",
        description: "Algo salio mal, intenta de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    setConfigValues({});
    if (isOpen) {
      refetch();
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialData && configValues) {
      setDataChanges(parseDataChanges(initialData, configValues));
    }
  }, [configValues]);

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfigValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Ajustes del Sistema</DrawerHeader>

          <DrawerBody>
            {isLoading && <Text>Cargando...</Text>}
            {isError && <Text>Error al cargar los datos</Text>}
            {configValues && (
              <Stack spacing={4} p={4}>
                <FormControl>
                  <FormLabel>Nombre del banco</FormLabel>
                  <Input
                    name={"bank-name"}
                    value={configValues["bank-name"]}
                    onChange={handleInputchange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Numero de cuenta</FormLabel>
                  <Input
                    name={"bank-numero-cuenta"}
                    value={configValues["bank-numero-cuenta"]}
                    onChange={handleInputchange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Clabe Interbancaria</FormLabel>
                  <Input
                    name={"bank-clabe"}
                    value={configValues["bank-clabe"]}
                    onChange={handleInputchange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Cuota Escuela Interna</FormLabel>
                  <Input
                    name={"cuota-escuela-interna"}
                    value={configValues["cuota-escuela-interna"]}
                    onChange={handleInputchange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Cuota Escuela General</FormLabel>
                  <Input
                    name={"cuota-escuela-general"}
                    value={configValues["cuota-escuela-general"]}
                    onChange={handleInputchange}
                  />
                </FormControl>
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} onClick={onClose} colorScheme="red">
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              isDisabled={dataChanges.length <= 0}
              onClick={handlSaveChanges}
            >
              Guardar cambios
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppConfigDrawer;
