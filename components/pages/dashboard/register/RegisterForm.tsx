'use client'

import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { UserType } from '../../../../types/userType'
import { StepDatosContactoForm } from './form-steps/step.datosContacto'
import { StepDatosEscolaresForm } from './form-steps/step.datosEscolares'
import {
  StepDatosPersonalesForm,
  StepDatosPersonalesIIForm
} from './form-steps/step.datosPersonales'
import { StepDatosUbicacionForm } from './form-steps/step.datosUbicacion'

export type RegisterUserType = UserType & {
  password: string;
};

export type RegisterFormValues = {
  apellidoMaterno: string;
  apellidoPaterno: string;
  celular: string;
  curp: string;
  dialecto: boolean;
  direccion: string;
  email: string;
  escuelaProcedencia: string;
  estadoCivil: string;
  estadoEscuela: string;
  estadoNacimiento: string;
  fechaNacimiento: string;
  municipioEscuela: string;
  municipioNacimiento: string;
  nombre: string;
  promedioBachillerato: number;
  sexo: string;
  telefono: string;
  tipoEscuelaProcedencia: string;
  trabaja: boolean;
};

const RegisterForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formData, setFormData] = useState<RegisterFormValues>({
    apellidoMaterno: '',
    apellidoPaterno: '',
    celular: '',
    curp: '',
    dialecto: false,
    direccion: '',
    email: '',
    escuelaProcedencia: '',
    estadoCivil: '',
    estadoEscuela: '',
    estadoNacimiento: '',
    fechaNacimiento: '',
    municipioEscuela: '',
    municipioNacimiento: '',
    nombre: '',
    promedioBachillerato: 0,
    sexo: '',
    telefono: '',
    tipoEscuelaProcedencia: '',
    trabaja: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const FormSteps = [
    <StepDatosPersonalesForm
      key={`${formData.curp}_Personales`}
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosPersonalesIIForm
      key={`${formData.curp}_IIForm`}
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosContactoForm
      key={`${formData.curp}_Contacto`}
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosUbicacionForm
      key={`${formData.curp}_Ubicacion`}
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
    />,
    <StepDatosEscolaresForm
      key={`${formData.curp}_Escolares`}
      currentData={formData}
      setCurrentData={setFormData}
      errors={errors}
      setCurrentPage={setCurrentPage}
      setErrors={setErrors}
      handleSubmit={handleSubmit}
    />
  ]

  function handleSubmit () {}
  return (
    <Flex
      as='main'
      color='#6C6C6C'
      h='100vh'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex
        as='article'
        w={{ base: '100%', md: '60%' }}
        h={{ base: '30%', md: '100%', sm: '20%' }}
        bg='white'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src='/logo.svg'
          boxSize={{ base: '70%', md: '45%' }}
          maxW='100%'
          minHeight='max-content'
        />
        <Box
          as='footer'
          alignItems='flex-end'
          marginTop='auto'
          position='absolute'
          bottom='0'
          display={{ base: 'none', md: 'block' }}
          textAlign={{ base: 'center', md: 'center' }}
        >
          <Text fontWeight='bold'>
            Universidad Juárez del Estado de Durango
          </Text>
          <Text fontSize='md'>
            Constitución 404 Sur. Zona Centro. C.P. 34000. Durango, Dgo. México.
            <br />
            Tel: 618 827 1200.
          </Text>
        </Box>
      </Flex>
      <Flex
        as='aside'
        bg='primary.base'
        w={{ base: '100%', md: '40%' }}
        h={{ base: '70%', md: '100%', sm: '80%' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent='center'
        p={{ base: '2rem', md: 0 }}
        flexDir='column'
      >
        <Stack
          as='form'
          direction='column'
          w='100%'
          padding='3rem'
          spacing={4}
          overflowY='auto'
        >
          <Heading color='white'>Registrate</Heading>
          {FormSteps[currentPage]}

          <Text fontSize='1xl' color='white' as='b'>
            *Podrás pasar a la siguiente página hasta completar esta sección
          </Text>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default RegisterForm
