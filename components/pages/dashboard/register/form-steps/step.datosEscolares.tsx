import { Button, ButtonGroup, Input, Select, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { useMutation } from "react-query";
import { ZodError } from "zod";
import { RegisterUserType } from "../RegisterForm";
import { EscuelasUJEDEnum, EstadoEnum } from "../register.consts";
import { DatosEscuelaProcedenciaValidationSchema } from "../validation.schema";
import { FormControlComponent } from "./FormControlComponent";
import { StepsRequiredProps } from "./step.datosPersonales";
import { handleOnStepBack } from "./utils";

export const StepDatosEscolaresForm: React.FC<
  StepsRequiredProps & { handleSubmit: () => void }
> = ({ currentData, setCurrentData, errors, setCurrentPage, setErrors }) => {
  const [isExternal, setIsExternal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const { mutate } = useMutation<RegisterUserType>(
    "register",
    async () => {
      setIsDisabled(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        currentData
      );
      return data;
    },
    {
      onSuccess: (data) => {
        setIsDisabled(false);
        toast({
          title: "Usuario registrado",
          description: `Tu matrícula es ${data.matricula} y tu contraseña es ${data.password}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/dashboard");
      },
      onError: (error) => {
        setIsDisabled(false);

        if (error instanceof Error) {
          toast({
            title: "Error al registrar",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
    }
  );

  const handleSubmitForm = () => {
    try {
      DatosEscuelaProcedenciaValidationSchema.parse(currentData);
      mutate();
    } catch (error) {
      if (error instanceof ZodError) {
        const formErrors: Record<string, string> = {};

        const flatErrors = error.flatten().fieldErrors;
        Object.keys(flatErrors).forEach((errorKey) => {
          const errorValue = flatErrors[errorKey];
          if (Array.isArray(errorValue) && errorValue.length > 0) {
            formErrors[errorKey] = errorValue[0];
          }
        });

        setErrors(formErrors);
      }
    }
  };
  return (
    <>
      <FormControlComponent
        label="Escuela de Procedencia"
        name="escuelaProcedencia"
        icon={BiEnvelope}
        isInvalid={
          !!errors.escuelaProcedencia && errors.escuelaProcedencia.length > 0
        }
        errorMessage={errors.escuelaProcedencia}
      >
        <Select
          isDisabled={isDisabled}
          id="escuelaProcedencia"
          name="escuelaProcedencia"
          bgColor="white"
          placeholder="Escuela de Procedencia"
          value={isExternal ? "otro" : currentData.escuelaProcedencia}
          onChange={(e) => {
            if (e.target.value === "otro") {
              setCurrentData((prev) => ({
                ...prev,
                [e.target.name]: "",
                tipoEscuelaProcedencia: "",
                estadoEscuela: "",
                municipioEscuela: "",
              }));
              setIsExternal(true);
            } else {
              setCurrentData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
                tipoEscuelaProcedencia: "publica",
                estadoEscuela: "Durango",
                municipioEscuela: "Durango",
              }));
              setIsExternal(false);
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmitForm();
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
              !!errors.escuelaProcedencia &&
              errors.escuelaProcedencia.length > 0
            }
            errorMessage={errors.escuelaProcedencia}
          >
            <Input
              isDisabled={isDisabled}
              id="escuelaProcedencia"
              name="escuelaProcedencia"
              bgColor="white"
              placeholder="Nombre de la Escuela"
              value={currentData.escuelaProcedencia}
              onChange={(e) => {
                setCurrentData({
                  ...currentData,
                  [e.target.name]: e.target.value,
                });
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSubmitForm();
                }
              }}
            />
          </FormControlComponent>
          <FormControlComponent
            label="Tipo de Escuela"
            name="tipoEscuelaProcedencia"
            icon={BiEnvelope}
            isInvalid={
              !!errors.tipoEscuelaProcedencia &&
              errors.tipoEscuelaProcedencia.length > 0
            }
            errorMessage={errors.tipoEscuelaProcedencia}
          >
            <Select
              isDisabled={isDisabled}
              id="tipoEscuelaProcedencia"
              name="tipoEscuelaProcedencia"
              bgColor="white"
              placeholder="Tipo de Escuela"
              value={currentData.tipoEscuelaProcedencia}
              onChange={(e) => {
                setCurrentData({
                  ...currentData,
                  [e.target.name]: e.target.value,
                });
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSubmitForm();
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
              !!errors.estadoEscuela && errors.estadoEscuela.length > 0
            }
            errorMessage={errors.estadoEscuela}
          >
            <Select
              isDisabled={isDisabled}
              id="estadoEscuela"
              name="estadoEscuela"
              bgColor="white"
              placeholder="Estado de la Escuela"
              value={currentData.estadoEscuela}
              onChange={(e) => {
                setCurrentData({
                  ...currentData,
                  [e.target.name]: e.target.value,
                });
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSubmitForm();
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
              !!errors.municipioEscuela && errors.municipioEscuela.length > 0
            }
            errorMessage={errors.municipioEscuela}
          >
            <Input
              isDisabled={isDisabled}
              id="municipioEscuela"
              type="text"
              name="municipioEscuela"
              bgColor="white"
              placeholder="Municipio de la Escuela"
              value={currentData.municipioEscuela}
              onChange={(e) => {
                setCurrentData({
                  ...currentData,
                  [e.target.name]: e.target.value,
                });
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSubmitForm();
                }
              }}
            />
          </FormControlComponent>
        </>
      )}
      <FormControlComponent
        label="Promedio Escuela de Procedencia"
        name="promedioBachillerato"
        icon={BiEnvelope}
        isInvalid={
          !!errors.promedioBachillerato &&
          errors.promedioBachillerato.length > 0
        }
        errorMessage={errors.promedioBachillerato}
      >
        <Input
          isDisabled={isDisabled}
          id="promedioBachillerato"
          type="number"
          name="promedioBachillerato"
          bgColor="white"
          placeholder="Promedio Escuela de Procedencia"
          value={currentData.promedioBachillerato}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: parseFloat(e.target.value),
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmitForm();
            }
          }}
        />
      </FormControlComponent>
      <FormControlComponent
        label="Carrera"
        name="carrera"
        icon={BiEnvelope}
        isInvalid={!!errors.carrera && errors.carrera.length > 0}
        errorMessage={errors.carrera}
      >
        <Select
          isDisabled={isDisabled}
          id="carrera"
          name="carrera"
          bgColor="white"
          placeholder="Carrera"
          value={currentData.carrera}
          onChange={(e) => {
            setCurrentData({
              ...currentData,
              [e.target.name]: e.target.value,
            });
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmitForm();
            }
          }}
        >
          <option value="LM">Licenciatura en Matemáticas</option>
          <option value="LCC">
            Licenciatura en Ciencias de la Computación
          </option>
        </Select>
      </FormControlComponent>
      <ButtonGroup>
        <Button
          isLoading={isDisabled}
          mt={4}
          alignItems="center"
          color="black"
          bgColor="white"
          onClick={() => handleOnStepBack(setCurrentPage)}
        >
          Atrás
        </Button>

        <Button
          isLoading={isDisabled}
          mt={4}
          alignItems="center"
          color="white"
          bgColor="green"
          onClick={handleSubmitForm}
        >
          Registrarse
        </Button>
      </ButtonGroup>
    </>
  );
};
