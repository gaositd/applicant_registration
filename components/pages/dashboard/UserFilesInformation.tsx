"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import DocumentContainer from "../../DocumentContainer";
import Column from "../../GridSystem/Column";

export type UsersDocumentType = {
  status: string;
  id: string;
  fileType: string;
  observaciones: string[];
  updatedAt: string;
  createdAt: string;
};

interface props {
  documentsArray: UsersDocumentType[];
}

const UserFilesInformation: React.FC<props> = ({ documentsArray }) => {
  const [percentage, setPercentage] = useState(0);
  const [documentos] = useState(documentsArray);

  useEffect(() => {
    const aceptados = documentsArray.reduce(
      (acc, docuento) => (docuento.status === "approved" ? (acc += 1) : acc),
      0
    );

    setPercentage(Math.floor((aceptados * 100) / documentsArray.length));
  }, []);

  return (
    <Column>
      <Container className="w-4/6 mx-auto">
        <h1 className="text-xl mb-5">Tiene un {percentage}% terminado</h1>
        <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className={`h-4 bg-blue-600 rounded-full dark:bg-blue-500 `}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </Container>
      {documentos.map((document) => (
        <DocumentContainer
          key={document.id}
          nombredDocumento={document.fileType}
          status={document.status}
          observaciones={document.observaciones}
        />
      ))}
    </Column>
  );
};

export default UserFilesInformation;
