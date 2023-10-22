"use client";
import {
  Text,
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  VStack,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export const SecretariaPage = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" w={"100%"} height={"100%"} gap={"6"}>
      <Flex flexDir={"column"}>
        <Flex
          w="100%"
          h="90%"
          border={"2px solid"}
          boxShadow={"lg"}
          borderRadius={"lg"}
          borderColor={"structure.borders"}
          flexDir={"column"}
        >
          <Flex
            borderBottom={"1px solid"}
            borderColor={"structure.borders"}
            w={"100%"}
            h={"10%"}
            p={2}
            align={"center"}
          >
            <Flex w={"100%"} gap={"20"} justify={"space-between"}>
              <Flex w={"50%"}>
                <Heading size={"md"} w={"50%"}>
                  Matricula
                </Heading>
                <Heading size={"md"} w={"50%"}>
                  Nombre
                </Heading>
              </Flex>
              <HStack w="50%">
                <Select w={"30%"} borderRadius={"2xl"}>
                  <option value="option1">Todos</option>
                  <option value="option2">Pendientes</option>
                  <option value="option3">Atrasados</option>
                </Select>
                <InputGroup w={"70%"}>
                  <Input placeholder="Buscar" borderRadius={"2xl"} />
                  <InputRightElement children={<Icon as={BiSearch} />} />
                </InputGroup>
              </HStack>
            </Flex>
          </Flex>
          {/* Body de la tabla */}
          <VStack
            w={"100%"}
            h={"100%"}
            overflowY={"auto"}
            style={{
              scrollbarWidth: "thin",
            }}
            py={4}
          >
            <TableItem matricula="123" nombre="John Doe"></TableItem>
            <TableItem matricula="123" nombre="John Doe"></TableItem>
          </VStack>
        </Flex>
        <Flex align={"center"} justify={"flex-end"} w="100%" h="10%" px={2}>
          <Button bgColor={"primary.base"} color="white">
            Agregar aspirante
          </Button>
        </Flex>
      </Flex>
      <Flex bgColor={"blue"}>documentos</Flex>
    </Grid>
  );
};

interface ITableItems {
  matricula: string;
  nombre: string;
  selected?: boolean;
}

const TableItem: React.FC<ITableItems> = ({ matricula, nombre, selected }) => {
  return (
    <Flex
      w="100%"
      h={"auto"}
      p={2}
      color={selected ? "white" : "black"}
      gap={20}
      justify={"space-between"}
      bgColor={selected ? "primary.base" : ""}
      borderRadius={"md"}
      _hover={selected ? { bgColor: "#841224" } : { bgColor: "gray.100" }}
    >
      <Flex w={"50%"} fontSize={"xl"}>
        <Text w={"50%"}>{matricula}</Text>
        <Text w="50%">{nombre}</Text>
      </Flex>
      <Flex w="50%">
        <Flex w={"50%"}>{/* Area reservada para botones */}</Flex>
      </Flex>
    </Flex>
  );
};
