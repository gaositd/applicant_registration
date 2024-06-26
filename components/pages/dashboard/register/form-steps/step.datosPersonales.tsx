import React from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import { BiCalendar, BiSolidUserCircle } from "react-icons/bi";
import { RegisterFormValues } from "../RegisterForm";
import {
  DatosPersonalesIIValidationSchema,
  DatosPersonalesValidationSchema,
} from "../validation.schema";
import { FormControlComponent } from "./FormControlComponent";
import { handleOnStepBack, handleOnStepChange } from "./utils";

export interface StepsRequiredProps {
  currentData: RegisterFormValues;
  setCurrentData: React.Dispatch<React.SetStateAction<RegisterFormValues>>;
  errors: Record<string, string>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export const StepDatosPersonalesForm: React.FC<StepsRequiredProps> = ({
  currentData,
  setCurrentData,
  errors,
  setCurrentPage,
  setErrors,
}) => {
  const handleOnChange = (e: any) => {
    setCurrentData({
      ...currentData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <FormControl isInvalid={!!errors.nombre && errors.nombre.length > 0}>
        <FormLabel htmlFor="nombre" color="whiteAlpha.900" fontWeight="bold">
          Nombre
        </FormLabel>
        <InputGroup>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            bgColor="white"
            placeholder="Nombre"
            value={currentData.nombre}
            onChange={handleOnChange}
            pattern="[A-Za-z]+"
          />

          {/* <InputRightAddon children={<Icon as={BiSolidUserCircle} />} /> */}
          <InputRightAddon>
            <Icon as={BiSolidUserCircle} />
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage color="whiteAlpha.900" fontWeight="bold">
          {errors.nombre}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.apellidoPaterno && errors.apellidoPaterno.length > 0
        }
      >
        <FormLabel
          htmlFor="apellidoPaterno"
          color="whiteAlpha.900"
          fontWeight="bold"
        >
          Apellido Paterno
        </FormLabel>
        <InputGroup>
          <Input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            bgColor="white"
            placeholder="Apellido Paterno"
            value={currentData.apellidoPaterno}
            onChange={handleOnChange}
            pattern="[A-Za-z]+"
          />

          {/* <InputRightAddon children={<Icon as={BiSolidUserCircle} />} /> */}
          <InputRightAddon>
            <Icon as={BiSolidUserCircle} />
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage color="whiteAlpha.900" fontWeight="bold">
          {errors.apellidoPaterno}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.apellidoMaterno && errors.apellidoMaterno.length > 0
        }
      >
        <FormLabel
          htmlFor="apellidoMaterno"
          color="whiteAlpha.900"
          fontWeight="bold"
        >
          Apellido Materno
        </FormLabel>
        <InputGroup>
          <Input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            bgColor="white"
            placeholder="Apellido Materno"
            value={currentData.apellidoMaterno}
            onChange={handleOnChange}
            pattern="[A-Za-z]+"
          />

          {/* <InputRightAddon children={<Icon as={BiSolidUserCircle} />} /> */}
          <InputRightAddon>
            <Icon as={BiSolidUserCircle} />
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage color="whiteAlpha.900" fontWeight="bold">
          {errors.apellidoMaterno}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.sexo && errors.sexo.length > 0}>
        <FormLabel htmlFor="sexo" color="whiteAlpha.900" fontWeight="bold">
          Sexo
        </FormLabel>
        <InputGroup>
          <Select
            bgColor="white"
            value={currentData.sexo}
            placeholder="Sexo"
            name="sexo"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleOnStepChange(
                  DatosPersonalesValidationSchema,
                  currentData,
                  setCurrentPage,
                  setErrors,
                );
              }
            }}
            onChange={handleOnChange}
          >
            <option value="femenino">Mujer</option>
            <option value="masculino">Hombre</option>
            <option value="otro">Prefiero no responder</option>
          </Select>

          {/* <InputRightAddon children={<Icon as={BiSolidUserCircle} />} /> */}
          <InputRightAddon>
            <Icon as={BiSolidUserCircle} />
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage color="whiteAlpha.900" fontWeight="bold">
          {errors.sexo}
        </FormErrorMessage>
      </FormControl>
      <ButtonGroup>
        <Button
          mt={4}
          alignItems="center"
          color="black"
          bgColor="white"
          onClick={() =>
            handleOnStepChange(
              DatosPersonalesValidationSchema,
              currentData,
              setCurrentPage,
              setErrors,
            )
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </>
  );
};

export const StepDatosPersonalesIIForm: React.FC<StepsRequiredProps> = ({
  currentData,
  setCurrentData,
  errors,
  setErrors,
  setCurrentPage,
}) => {
  const handleOnChange = (e: any) => {
    setCurrentData({
      ...currentData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <FormControlComponent
        label="Fecha de Nacimiento"
        name="fechaNacimiento"
        icon={BiCalendar}
        isInvalid={
          !!errors.fechaNacimiento && errors.fechaNacimiento.length > 0
        }
        errorMessage={errors.fechaNacimiento}
      >
        <Input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          bgColor="white"
          placeholder="fecha de nacimiento"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosPersonalesIIValidationSchema,
                currentData,
                setCurrentPage,
                setErrors,
              );
            }
          }}
          value={
            currentData.fechaNacimiento
              ? currentData.fechaNacimiento.split("T")[0]
              : ""
          }
          onChange={(e) => {
            // set the data as iso string
            setCurrentData({
              ...currentData,
              [e.target.name]: new Date(e.target.value).toISOString(),
            });
          }}
          pattern="[A-Za-z]+"
        />
      </FormControlComponent>
      <FormControlComponent
        label="CURP"
        name="curp"
        icon={BiSolidUserCircle}
        isInvalid={!!errors.curp && errors.curp.length > 0}
        errorMessage={errors.curp}
      >
        <Input
          type="text"
          id="curp"
          name="curp"
          bgColor="white"
          autoFocus
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosPersonalesIIValidationSchema,
                currentData,
                setCurrentPage,
                setErrors,
              );
            }
          }}
          placeholder="CURP"
          value={currentData.curp}
          onChange={(e: any) => {
            setCurrentData((prev) => ({
              ...prev,
              curp: e.target.value.toUpperCase(),
            }));
          }}
          pattern="[A-Za-z]+"
        />
      </FormControlComponent>
      <FormControlComponent
        label="Estado Civil"
        name="estadoCivil"
        icon={BiCalendar}
        isInvalid={!!errors.estadoCivil && errors.estadoCivil.length > 0}
        errorMessage={errors.estadoCivil}
      >
        <Select
          id="estadoCivil"
          name="estadoCivil"
          bgColor="white"
          placeholder="Estado Civil"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosPersonalesIIValidationSchema,
                currentData,
                setCurrentPage,
                setErrors,
              );
            }
          }}
          value={currentData.estadoCivil}
          onChange={handleOnChange}
        >
          <option value="soltero">Soltero</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viudo">Viudo</option>
        </Select>
      </FormControlComponent>
      <FormControlComponent
        label="¿Hablas algún dialecto?"
        name="dialecto"
        icon={BiSolidUserCircle}
        isInvalid={!!errors.dialecto && errors.dialecto.length > 0}
        errorMessage={errors.dialecto}
        rightAddon={false}
      >
        <RadioGroup
          name="dialecto"
          color="whiteAlpha.900"
          defaultValue="false"
          value={currentData.dialecto ? "true" : "false"}
          onChange={(e: any) => {
            setCurrentData({
              ...currentData,
              dialecto: e === "true",
            });
          }}
        >
          <Stack spacing={5} direction="row">
            <Radio value="true">Si</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControlComponent>
      <ButtonGroup>
        <Button
          mt={4}
          alignItems="center"
          color="black"
          bgColor="white"
          onClick={() => handleOnStepBack(setCurrentPage)}
        >
          Atrás
        </Button>

        <Button
          mt={4}
          alignItems="center"
          color="black"
          bgColor="white"
          onClick={() =>
            handleOnStepChange(
              DatosPersonalesIIValidationSchema,
              currentData,
              setCurrentPage,
              setErrors,
            )
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </>
  );
};
