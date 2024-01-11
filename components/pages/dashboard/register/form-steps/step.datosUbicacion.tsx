import { BiEnvelope } from "react-icons/bi";
import { FormControlComponent } from "./FormControlComponent";
import { StepsRequiredProps } from "./step.datosPersonales";
import { Input, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { EstadoEnum } from "../register.consts";

export const StepDatosUbicacionForm: React.FC<StepsRequiredProps> = ({
  currentData,
  setCurrentData,
  errors,
  onStepChange,
}) => {
  return (
    <>
      <FormControlComponent
        label="Estado Natal"
        name="estadoNacimiento"
        icon={BiEnvelope}
        isInvalid={
          !!errors["estadoNacimiento"] && errors["estadoNacimiento"].length > 0
        }
        errorMessage={errors["estadoNacimiento"]}
      >
        <Select
          id="estadoNacimiento"
          name="estadoNacimiento"
          bgColor={"white"}
          placeholder={"Estado Natal"}
          value={currentData.estadoNacimiento}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onStepChange("next");
            }
          }}
        >
          {Object.keys(EstadoEnum).map((key) => (
            <option
              key={key}
              value={EstadoEnum[key as keyof typeof EstadoEnum]}
            >
              {EstadoEnum[key as keyof typeof EstadoEnum]}
            </option>
          ))}
        </Select>
      </FormControlComponent>
      <FormControlComponent
        label="Municipio Natal"
        name="municipioNacimiento"
        icon={BiEnvelope}
        isInvalid={
          !!errors["municipioNacimiento"] &&
          errors["municipioNacimiento"].length > 0
        }
        errorMessage={errors["municipioNacimiento"]}
      >
        <Input
          id="municipioNacimiento"
          name="municipioNacimiento"
          bgColor={"white"}
          placeholder={"Municipio Natal"}
          value={currentData.municipioNacimiento}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onStepChange("next");
            }
          }}
        />
      </FormControlComponent>
      <FormControlComponent
        label="¿Trabajas?"
        name="trabaja"
        icon={BiEnvelope}
        isInvalid={!!errors["trabaja"] && errors["trabaja"].length > 0}
        errorMessage={errors["trabaja"]}
        rightAddon={false}
      >
        <RadioGroup
          value={currentData.trabaja ? "true" : "false"}
          color={"white"}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              trabaja: e === "true" ? true : false,
            });
          }}
        >
          <Stack direction="row" spacing={5}>
            <Radio value="true">Si</Radio>
            <Radio value="false">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControlComponent>
    </>
  );
};
