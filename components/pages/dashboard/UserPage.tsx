"use client";
import React, { useEffect, useState } from "react";
import DocumentContainer from "../../DocumentContainer";
import Column from "../../GridSystem/Column";
import Container from "../../GridSystem/Container";

interface props {}

const documentsArray = [
  {
    nombre: "Acta de nacimiento",
    status: "PENDIENTE",
    observaciones: null,
  },
  {
    nombre: "CURP",
    status: "REACHAZADO",
    observaciones: ["El docuento es illegible", "Documento invalido"],
  },
  {
    nombre: "Certificado de Bachillerato",
    status: "ACEPTADO",
    observaciones: null,
  },
];

const UserPage: React.FC<props> = () => {
  const [percentage, setPercentage] = useState(0);
  const [documentos] = useState(documentsArray);

  useEffect(() => {
    const aceptados = documentsArray.reduce(
      (acc, docuento) => (docuento.status === "ACEPTADO" ? (acc += 1) : acc),
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
          key={document.nombre}
          nombredDocumento={document.nombre}
          status={document.status}
          observaciones={document.observaciones}
        />
      ))}
    </Column>
  );
};

export default UserPage;
