import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import _ from "lodash";
import { CONFIG_VALUES_DISPLAY_NAMES } from "../../constants";

type AppConfigDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
// {
//   consecutivoFollio: 'folio-consecutivo',
//   cuentabancaria: 'bank-numero-cuenta',
//   clabe: 'bank-clabe',
//   nombreBanco: 'bank-name',
//   cuotaPreferencial: 'cuota-escuela-interna',
//   cuotaGeneral: 'cuota-escuela-general',
//   semestreStatus: 'semestre-status',
// }

// {
//   "id": 11,
//   "createdAt": "2023-12-15T01:40:55.000Z",
//   "updatedAt": "2023-12-15T01:41:47.000Z",
//   "configType": "app_config",
//   "name": "cuota-escuela-general",
//   "value": "1224.50"
// },
type ConfigValues = {
  id: number;
  name: string;
  value: string;
};
const AppConfigDrawer: React.FC<AppConfigDrawerProps> = ({
  onClose,
  isOpen,
}) => {
  const [configValues, setConfigValues] = useState<Array<ConfigValues>>([]);

  const [isDataChanged, setIsDataChanged] = useState(false);

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
        setConfigValues(
          data.filter((config) => config.name !== "semestre-status")
        );
      },
    }
  );

  const verifyDataChanges = (
    initialData: ConfigValues[],
    configValues: ConfigValues[]
  ) => {
    return !_.isEqual(_.xorWith(initialData, configValues, _.isEqual), []);
  };
  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen]);
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
            {initialData && (
              <Stack gap={4}>
                {configValues.map((config) => (
                  <FormControl key={config.id}>
                    <FormLabel>
                      {
                        CONFIG_VALUES_DISPLAY_NAMES[
                          config.name as keyof typeof CONFIG_VALUES_DISPLAY_NAMES
                        ]
                      }
                    </FormLabel>
                    <Input
                      type="text"
                      value={config.value}
                      onChange={handleInputchange}
                    />
                  </FormControl>
                ))}
                <Divider
                  orientation="horizontal"
                  borderColor="gray.300"
                  my={6}
                  w="100%"
                />
                <Heading size="md" mb={4}>
                  Configuración del semestre
                </Heading>
                <FormControl>
                  <Stack direction="row" spacing={4}>
                    <FormLabel>Status del semestre</FormLabel>
                    <Text>
                      {
                        initialData.filter(
                          (data) => data.name === "semestre-status"
                        )[0].value
                      }
                    </Text>
                  </Stack>
                  <Button colorScheme="blue" size="sm">
                    Cambiar status
                  </Button>
                </FormControl>
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} onClick={onClose} colorScheme="red">
              Cancelar
            </Button>
            <Button colorScheme="green" isDisabled={isDataChanged}>
              Guardar cambios
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppConfigDrawer;
