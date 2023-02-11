import { headers } from "next/headers";
import React from "react";
import UserFilesInformation, {
  UsersDocumentType,
} from "./UserFilesInformation";

async function fetchUserDocuments<T>(): Promise<T[]> {
  const nextHeaders = headers();

  const Cookie = nextHeaders.get("Cookie") ?? "";

  const response = await fetch("http://localhost:4242/users/docs", {
    method: "GET",
    headers: {
      Cookie,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data.documentos;
}

const UserPage = async () => {
  const userDocuments = await fetchUserDocuments<UsersDocumentType>();

  console.log(userDocuments);

  return <UserFilesInformation documentsArray={userDocuments} />;
};

export default UserPage;
