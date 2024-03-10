import { headers } from 'next/headers'
import React from 'react'
import UserFilesInformation, {
  UsersDocumentType
} from './UserFilesInformation'
import axios from 'axios'

async function fetchUserDocuments (): Promise<{
  documentos: UsersDocumentType[];
  expedienteBlocked: boolean;
}> {
  const nextHeaders = headers()

  const Cookie = nextHeaders.get('Cookie') ?? ''

  try {
    const { data } = await axios.get<{
      documentos: UsersDocumentType[];
      isExpedienteBlocked: boolean;
    }>(`${process.env.NEXT_PUBLIC_API_URL}/docs`, {
      withCredentials: true,
      headers: {
        Cookie,
        'Content-Type': 'application/json'
      }
    })

    return {
      documentos: data.documentos,
      expedienteBlocked: data.isExpedienteBlocked
    }
  } catch (error) {
    console.log(error)
    return {
      documentos: [],
      expedienteBlocked: false
    }
  }
}

const UserPage = async () => {
  const userDocuments = await fetchUserDocuments()

  return (
    <UserFilesInformation
      documentsArray={userDocuments.documentos}
      isExpedienteBlocked={userDocuments.expedienteBlocked}
    />
  )
}

export default UserPage
