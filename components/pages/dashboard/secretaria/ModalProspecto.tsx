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
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import axios from 'axios'
import {
  Field,
  Form,
  Formik,
  FormikProps,
  FormikValues,
  useFormikContext
} from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { isEqual } from 'lodash'

interface IModalProspectoProps {
  isOpen: boolean;
  onClose: () => void;
  matricula: string;
  action: 'remove' | 'edit' | 'add';
}

type User = {
  nombre: string;
  mail: string;
  password: string;
  matricula: string;
}
const ModalProspecto: React.FC<IModalProspectoProps> = ({
  isOpen,
  onClose,
  action,
  matricula
}) => {
  return (
    <Modal blockScrollOnMount isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {action === 'remove'
            ? 'Dar de baja'
            : action === 'edit'
              ? 'Editar'
              : 'Agregar'}
        </ModalHeader>
        {action === 'remove'
          ? (
            <ModalProspectoRemove matricula={matricula} onClose={onClose} />
            )
          : action === 'edit'
            ? (
              <ModalProspectoEdit matricula={matricula} onClose={onClose} />
              )
            : (
              <ModalProspectoAdd onClose={onClose} />
              )}
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  )
}

interface IModalProspectoEditProps {
  matricula: string;
  onClose: () => void;
}

const ModalProspectoEdit: React.FC<IModalProspectoEditProps> = ({
  matricula,
  onClose
}) => {
  const [iscontentChanged, setIsContentChanged] = useState(false)
  const [formState, setFormState] = useState<{
    isLoading: boolean
    isDone: boolean
  }>({
    isLoading: false,
    isDone: false
  })

  const toast = useToast()

  const queryClient = useQueryClient()

  const fetchProspectoInfo = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${matricula}`,
      {
        withCredentials: true
      }
    )
    return data
  }

  const { mutate } = useMutation(
    'editProspectoMutation',
    async (values: User) => {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${matricula}`,
        values,
        {
          withCredentials: true
        }
      )
      return data
    },
    {
      onSuccess: () => {
        setFormState({
          isLoading: false,
          isDone: true
        })

        toast({
          title: 'Prospecto editado',
          description: 'El prospecto ha sido editado',
          status: 'success',
          duration: 3000,
          isClosable: true,
          onCloseComplete: () => {
            queryClient.invalidateQueries('prospectosTable')
            onClose()
          }
        })
      },
      onError: () => {
        setFormState({
          isLoading: false,
          isDone: false
        })
        toast({
          title: 'Error al editar el prospecto',
          description:
            'Hubo un error al editar el prospecto, intenta de nuevo más tarde',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
      }
    }
  )

  const { isError, data, isLoading } = useQuery(
    'prospectoEdit',
    fetchProspectoInfo
  )

  return (
    <>
      <ModalBody>
        {isLoading
          ? (
            <Text>Cargando...</Text>
            )
          : isError
            ? (
              <Text>Hubo un error al cargar la información</Text>
              )
            : (
              <Formik
                initialValues={data}
                onSubmit={(values: User) => {
                  mutate(values)
                }}
              >
                {() => (
                  <Form>
                    <FormObserver
                      initialData={data}
                      setIsContentChanged={setIsContentChanged}
                      isContentChanged={iscontentChanged}
                    />
                    <Field name='matricula'>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                        form.errors.matricula && form.touched.matricula
                      }
                        >
                          <FormLabel>Matricula</FormLabel>
                          <Input
                            {...field}
                            placeholder='matricula'
                            isDisabled
                          />
                          <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='nombre'>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel>Nombre</FormLabel>
                          <Input {...field} placeholder='Nombre' />
                          <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='mail'>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.mail && form.touched.mail}
                        >
                          <FormLabel>Correo electronico</FormLabel>
                          <Input {...field} placeholder='Correo electronico' />
                          <FormErrorMessage>{form.errors.mail}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                )}
              </Formik>
              )}
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button
            colorScheme='green'
            color='white'
            isDisabled={!iscontentChanged}
          >
            Guarda información
          </Button>
          <Button
            colorScheme='red'
            mr={3}
            onClick={onClose}
            isDisabled={formState.isDone || formState.isLoading}
          >
            Close
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  )
}

interface IFormObserver {
  setIsContentChanged: (value: boolean) => void;
  isContentChanged?: boolean
  initialData: {
    matricula: string;
    nombre: string;
    mail: string;
  }
}

const FormObserver: React.FC<IFormObserver> = ({
  setIsContentChanged,
  initialData,
  isContentChanged
}) => {
  const { values } = useFormikContext()
  useEffect(() => {
    if (!isEqual(values, initialData)) {
      setIsContentChanged(true)
    } else if (isContentChanged === true && isEqual(values, initialData)) {
      setIsContentChanged(false)
    }
  }, [values])
  return null
}

interface IModalProspectoRemoveProps {
  matricula: string;
  onClose: () => void;
}

const ModalProspectoRemove: React.FC<IModalProspectoRemoveProps> = ({
  matricula,
  onClose
}) => {
  const toast = useToast()

  const queryClient = useQueryClient()

  const deleteProspecto = async () => {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${matricula}`,
      {
        withCredentials: true
      }
    )

    return data
  }

  const { mutate } = useMutation('deleteProspecto', deleteProspecto, {
    onSuccess: () => {
      toast({
        title: 'Prospecto eliminado',
        description: 'El prospecto ha sido eliminado',
        status: 'success',
        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          queryClient.invalidateQueries('prospectosTable')
          onClose()
        }
      })
    },
    onError: () => {
      toast({
        title: 'Error al eliminar el prospecto',
        description:
          'Hubo un error al eliminar el prospecto, intenta de nuevo más tarde',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  })

  return (
    <>
      <ModalBody>
        <Text fontWeight='bold' mb='1rem'>
          ¿Estás seguro de dar de baja a este prospecto?
        </Text>
        <Text>Matricula: {matricula}</Text>
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button
            bgColor='primary.base'
            color='white'
            onClick={() => {
              mutate()
            }}
          >
            Guarda información
          </Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  )
}

interface IModalProspectoAddProps {
  onClose: () => void;
}
// type User = {
//   nombre: string;
//   mail: string;
//   password: string;
//   matricula: string;
// }

const ModalProspectoAdd: React.FC<IModalProspectoAddProps> = ({ onClose }) => {
  const formRef = useRef<FormikProps<FormikValues>>(null)

  const toast = useToast()

  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    'addProspectoMutation',
    async (values: { nombre: string; mail: string }) => {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        values,
        {
          withCredentials: true
        }
      )
      return data
    },
    {
      onSuccess (data: User) {
        onClose()
        toast({
          title: 'Prospecto agregado',
          description:
            'Se ha enviado un correo al prospecto con la informacion, su contraseña es: ' +
            data.password +
            ' y su matricula es: ' +
            data.matricula +
            '',
          status: 'success',
          isClosable: true,
          duration: null,
          onCloseComplete: () => {
            queryClient.invalidateQueries('prospectosTable')
          }
        })
      },
      onError (error) {
        console.error(error)
        toast({
          title: 'Error al agregar el prospecto',
          description:
            'Hubo un error al agregar el prospecto, intenta de nuevo más tarde',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
      }
    }
  )

  return (
    <>
      <ModalBody>
        <Formik
          innerRef={formRef}
          initialValues={{
            nombre: '',
            mail: ''
          }}
          onSubmit={(value) => {
            mutate(value as { nombre: string; mail: string })
          }}
          validate={(values) => {
            const errors: any = {}

            if (!values.nombre) {
              errors.nombre = 'El nombre es requerido'
            }

            if (!values.mail) {
              errors.mail = 'El correo electronico es requerido'
            }

            // validate that email field is actually an email
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
              errors.mail = 'El correo electronico no es valido'
            }

            return errors
          }}
        >
          {() => (
            <Form>
              <Field name='nombre'>
                {({ field, form }:any) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Nombre</FormLabel>
                    <Input {...field} placeholder='Nombre' />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='mail'>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.mail && form.touched.mail}
                  >
                    <FormLabel>Correo electronico</FormLabel>
                    <Input {...field} placeholder='Correo electronico' />
                    <FormErrorMessage>{form.errors.mail}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <Button
            bgColor='primary.base'
            color='white'
            onClick={() => {
              if (formRef.current) {
                formRef.current.submitForm()
              }
            }}
          >
            Guarda información
          </Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  )
}

export default ModalProspecto
