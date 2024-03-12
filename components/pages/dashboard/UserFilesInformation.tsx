'use client'
import React, { useEffect, useState } from 'react'
import { Stack, Flex, Heading, Progress } from '@chakra-ui/react'
import DocumentContainer from '../../DocumentContainer'
import { TalonAvisos } from './user/TalonAvisos'

export type UsersDocumentType = {
  status: string
  id: string
  fileType: string
  observaciones: {
    observacion: string
  }[]
  updatedAt: string
  createdAt: string
}

interface props {
  documentsArray: UsersDocumentType[]
  isExpedienteBlocked: boolean
  error?: string
}

const UserFilesInformation: React.FC<props> = ({
  documentsArray,
  isExpedienteBlocked,
  error
}) => {
  const [percentage, setPercentage] = useState(0)
  const [documentos] = useState(documentsArray)

  useEffect(() => {
    console.log('Error', error)
    if (!error) {
      const aceptados = documentsArray.reduce(
        (acc, docuento) => (docuento.status === 'approved' ? (acc += 1) : acc),
        0
      )

      setPercentage(Math.floor((aceptados * 100) / documentsArray.length))
    }
  }, [documentsArray])

  return (
    <Flex height='100%' w='100%' id='GridContainer' flexDir='column'>
      <Flex
        w='100%'
        flexDir='column'
        h='15%'
        justify='center'
        align='center'
        gap={4}
      >
        <Heading fontSize='xl'>
          Tienes un {percentage}% del expediente terminado
        </Heading>
        <Progress value={percentage} w='60%' borderRadius='lg' hasStripe />
      </Flex>

      <Flex
        gap={4}
        w='100%'
        h='85%'
        flexDir={{ base: 'column', md: 'row-reverse' }}
      >
        <TalonAvisos ableToDownloadInvoice={percentage === 100} />
        {!isExpedienteBlocked ? (
          !!error ? (
            <Flex w='75%'>
              <Heading fontSize='xl'>{error}</Heading>
            </Flex>
          ) : (
            <Stack w='75%'>
              {documentos.map((document) => (
                <DocumentContainer
                  key={document.id}
                  nombredDocumento={document.fileType}
                  status={document.status}
                  observaciones={document.observaciones}
                />
              ))}
            </Stack>
          )
        ) : (
          <Heading fontSize='xl'>
            No puedes subir documentos hasta que completes los requerimientos en
            el talon de avisos, revisalos o ponte en contacto con tu asesor
          </Heading>
        )}
      </Flex>
    </Flex>
  )
}

export default UserFilesInformation
