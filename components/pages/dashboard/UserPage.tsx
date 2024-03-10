import { headers } from "next/headers";
import React from "react";
import UserFilesInformation, {
  UsersDocumentType,
} from "./UserFilesInformation";
import axios, { AxiosError } from "axios";

async function fetchUserDocuments(): Promise<{
  documentos: UsersDocumentType[];
  expedienteBlocked: boolean;
  error?: string;
}> {
  const nextHeaders = headers();

  const Cookie = nextHeaders.get("Cookie") ?? "";

  try {
    const { data } = await axios.get<{
      documentos: UsersDocumentType[];
      isExpedienteBlocked: boolean;
    }>(`${process.env.NEXT_PUBLIC_API_URL}/docs`, {
      withCredentials: true,
      headers: {
        Cookie,
        "Content-Type": "application/json",
      },
    });

    return {
      documentos: data.documentos,
      expedienteBlocked: data.isExpedienteBlocked,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        documentos: [],
        expedienteBlocked: false,
        error: error.response?.data.message,
      };
    } else {
      return {
        documentos: [],
        expedienteBlocked: false,
        error:
          "Error al leer los documentos, intentalo de nuevo. Si el problema persiste contacta a administracion",
      };
    }
  }
}

const UserPage = async () => {
  const userDocuments = await fetchUserDocuments();
  console.log(userDocuments);
  return (
    <UserFilesInformation
      documentsArray={userDocuments.documentos}
      isExpedienteBlocked={userDocuments.expedienteBlocked}
      error={userDocuments.error}
    />
  );
};

export default UserPage;
