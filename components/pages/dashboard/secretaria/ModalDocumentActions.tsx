import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

interface ModalDocumentActionsProps {
  isOpen: boolean
  onClose: () => void
  documentId: string
  documentName: string
  action: 'approve' | 'reject'
}

export const ModalDocumentActions: React.FC<ModalDocumentActionsProps> = ({
  documentId,
  documentName,
  isOpen,
  onClose,
  action
}) => {
  const queryClient = useQueryClient()
  const [observaciones, setObservaciones] = useState<string>('')
  const toast = useToast()
  const { mutate } = useMutation(
    'updateDocumentStatus',
    async (data: { observaciones?: Array<string> }) => {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/docs/${documentId}?operation=${action}`,
        data,
        { withCredentials: true }
      )

      return response.data
    },
    {
      onSuccess: () => {
        onClose()
        toast({
          title: 'Documento actualizado',
          description: `El documento ${documentName.toUpperCase()} ha sido actualizado`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          onCloseComplete: () => {
            queryClient.invalidateQueries('userDocuments')
          }
        })
      },
      onError: (error) => {
        console.log(error)
        onClose()
        toast({
          title: 'Error al actualizar el documento',
          description:
            'Ha habido un error al actualizar el documento, intenta de nuevo más tarde',
          status: 'error',
          duration: 4000,
          onCloseComplete: () => {
            onClose()
            queryClient.invalidateQueries('userDocuments')
          },
          isClosable: true
        })
      }
    }
  )

  const handleDocumentAction = () => {
    if (action === 'approve') {
      mutate({})
    } else {
      const observacionesArray = observaciones.split('\n')
      mutate({ observaciones: observacionesArray })
    }
  }

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      orientation='vertical'
      size={action === 'reject' ? '4xl' : 'md'}
    >
      <ModalOverlay />
      <ModalContent h={action === 'reject' ? '40%' : ''}>
        <ModalHeader>Acción requerida</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {(action === 'approve' && (
            <Text>
              ¿Estás seguro que deseas aceptar el documento:{' '}
              <strong>{documentName.toUpperCase()}</strong>?
            </Text>
          )) ||
            (action === 'reject' && (
              <>
                <Textarea
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  placeholder='Razones de por que se niega el archivo. Cada linea se tomara como comentario separado'
                  h='100%'
                />
              </>
            ))}
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              colorScheme={action === 'approve' ? 'green' : 'red'}
              onClick={handleDocumentAction}
            >
              {action === 'approve' ? 'Aceptar' : 'Denegar'}
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
