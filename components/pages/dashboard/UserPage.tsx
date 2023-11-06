import { headers } from "next/headers";
import React from "react";
import UserFilesInformation, {
  UsersDocumentType,
} from "./UserFilesInformation";
import axios from "axios";

async function fetchUserDocuments<T>(): Promise<T[]> {
  const nextHeaders = headers();

  const Cookie = nextHeaders.get("Cookie") ?? "";

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/docs`,
      {
        withCredentials: true,
        headers: {
          Cookie,
          "Content-Type": "application/json",
        },
      }
    );

    return data.documentos;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const UserPage = async () => {
  const userDocuments = await fetchUserDocuments<UsersDocumentType>();

  return <UserFilesInformation documentsArray={userDocuments} />;
};

export default UserPage;
