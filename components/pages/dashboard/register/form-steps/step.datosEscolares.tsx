import { BiEnvelope } from "react-icons/bi";
import { FormControlComponent } from "./FormControlComponent";
import { Input, Select } from "@chakra-ui/react";
import { EscuelasUJEDEnum, EstadoEnum } from "../register.consts";
import { StepsRequiredProps } from "./step.datosPersonales";
import { useState } from "react";

export const StepDatosEscolaresForm: React.FC<
  StepsRequiredProps & { handleSubmit: () => void }
> = ({ currentData, setCurrentData, errors, setCurrentPage }) => {
  const [isExternal, setIsExternal] = useState(false);

  return (
    <>
      <FormControlComponent
        label="Escuela de Procedencia"
        name="escuelaProcedencia"
        icon={BiEnvelope}
        isInvalid={
          !!errors["escuelaProcedencia"] &&
          errors["escuelaProcedencia"].length > 0
        }
        errorMessage={errors["escuelaProcedencia"]}
      >
        <Select
          id="escuelaProcedencia"
          name="escuelaProcedencia"
          bgColor={"white"}
          placeholder={"Escuela de Procedencia"}
          value={isExternal ? "otro" : currentData.escuelaProcedencia}
          onChange={(e) => {
            if (e.target.value === "otro") {
              setCurrentData((prev) => ({
                ...prev,
                [e.target.name]: "",
                tipoEscuelaProcedencia: "",
              }));
              setIsExternal(true);
            } else {
              setCurrentData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
                tipoEscuelaProcedencia: "",
              }));
              setIsExternal(false);
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onStepChange("next");
            }
          }}
        >
          {Object.keys(EscuelasUJEDEnum).map((key) => (
            <option
              key={key}
              value={EscuelasUJEDEnum[key as keyof typeof EscuelasUJEDEnum]}
            >
              {EscuelasUJEDEnum[key as keyof typeof EscuelasUJEDEnum]}
            </option>
          ))}
          <option value="otro">Otra escuela</option>
        </Select>
      </FormControlComponent>
      {isExternal && (
        <>
          <FormControlComponent
            label="Nombre de la Escuela"
            name="escuelaProcedencia"
            icon={BiEnvelope}
            isInvalid={
              !!errors["escuelaProcedencia"] &&
              errors["escuelaProcedencia"].length > 0
            }
            errorMessage={errors["escuelaProcedencia"]}
          >
            <Input
              id="escuelaProcedencia"
              name="escuelaProcedencia"
              bgColor={"white"}
              placeholder={"Nombre de la Escuela"}
              value={currentData.escuelaProcedencia}
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
            label="Tipo de Escuela"
            name="tipoEscuelaProcedencia"
            icon={BiEnvelope}
            isInvalid={
              !!errors["tipoEscuelaProcedencia"] &&
              errors["tipoEscuelaProcedencia"].length > 0
            }
            errorMessage={errors["tipoEscuelaProcedencia"]}
          >
            <Select
              id="tipoEscuelaProcedencia"
              name="tipoEscuelaProcedencia"
              bgColor={"white"}
              placeholder={"Tipo de Escuela"}
              value={currentData.tipoEscuelaProcedencia}
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
              <option value="publica">Pública</option>
              <option value="privada">Privada</option>
            </Select>
          </FormControlComponent>
          <FormControlComponent
            label="Estado de la Escuela"
            name="estadoEscuela"
            icon={BiEnvelope}
            isInvalid={
              !!errors["estadoEscuela"] && errors["estadoEscuela"].length > 0
            }
            errorMessage={errors["estadoEscuela"]}
          >
            <Select
              id="estadoEscuela"
              name="estadoEscuela"
              bgColor={"white"}
              placeholder={"Estado de la Escuela"}
              value={currentData.estadoEscuela}
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
            label="Municipio de la Escuela"
            name="municipioEscuela"
            icon={BiEnvelope}
            isInvalid={
              !!errors["municipioEscuela"] &&
              errors["municipioEscuela"].length > 0
            }
            errorMessage={errors["municipioEscuela"]}
          >
            <Input
              id="municipioEscuela"
              type="text"
              name="municipioEscuela"
              bgColor={"white"}
              placeholder={"Municipio de la Escuela"}
              value={currentData.municipioEscuela}
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
        </>
      )}
    </>
  );
};
