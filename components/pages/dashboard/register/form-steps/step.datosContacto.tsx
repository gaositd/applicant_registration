import { Button, ButtonGroup, Input, Textarea } from "@chakra-ui/react";
import { BiEnvelope } from "react-icons/bi";
import { DatosContactoValidationSchema } from "../validation.schema";
import { FormControlComponent } from "./FormControlComponent";
import { StepsRequiredProps } from "./step.datosPersonales";
import { handleOnStepBack, handleOnStepChange } from "./utils";

export const StepDatosContactoForm: React.FC<StepsRequiredProps> = ({
  currentData,
  setCurrentData,
  errors,
  setErrors,
  setCurrentPage,
}) => {
  return (
    <>
      <FormControlComponent
        label="Correo Electrónico"
        name="email"
        icon={BiEnvelope}
        isInvalid={!!errors["email"] && errors["email"].length > 0}
        errorMessage={errors["email"]}
      >
        <Input
          type="email"
          id="email"
          name="email"
          bgColor={"white"}
          placeholder={"Correo Electrónico"}
          value={currentData.email}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosContactoValidationSchema,
                currentData,
                setCurrentPage,
                setErrors
              );
            }
          }}
        />
      </FormControlComponent>
      <FormControlComponent
        label="Teléfono"
        name="telefono"
        icon={BiEnvelope}
        isInvalid={!!errors["telefono"] && errors["telefono"].length > 0}
        errorMessage={errors["telefono"]}
      >
        <Input
          type="tel"
          id="telefono"
          name="telefono"
          bgColor={"white"}
          placeholder={"Teléfono"}
          value={currentData.telefono}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosContactoValidationSchema,
                currentData,
                setCurrentPage,
                setErrors
              );
            }
          }}
        />
      </FormControlComponent>
      <FormControlComponent
        label="Celular"
        name="celular"
        icon={BiEnvelope}
        isInvalid={!!errors["celular"] && errors["celular"].length > 0}
        errorMessage={errors["celular"]}
      >
        <Input
          type="tel"
          id="celular"
          name="celular"
          bgColor={"white"}
          placeholder={"Celular"}
          value={currentData.celular}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleOnStepChange(
                DatosContactoValidationSchema,
                currentData,
                setCurrentPage,
                setErrors
              );
            }
          }}
        />
      </FormControlComponent>
      <FormControlComponent
        label="Dirección"
        name="direccion"
        icon={BiEnvelope}
        isInvalid={!!errors["direccion"] && errors["direccion"].length > 0}
        errorMessage={errors["direccion"]}
        rightAddon={false}
      >
        <Textarea
          id="direccion"
          name="direccion"
          bgColor={"white"}
          placeholder={"Dirección"}
          value={currentData.direccion}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </FormControlComponent>
      <ButtonGroup>
        <Button
          mt={4}
          alignItems={"center"}
          color="black"
          bgColor="white"
          onClick={() => handleOnStepBack(setCurrentPage)}
        >
          Atrás
        </Button>

        <Button
          mt={4}
          alignItems={"center"}
          color="black"
          bgColor={"white"}
          onClick={() =>
            handleOnStepChange(
              DatosContactoValidationSchema,
              currentData,
              setCurrentPage,
              setErrors
            )
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </>
  );
};
