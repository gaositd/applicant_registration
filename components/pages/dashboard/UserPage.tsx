import React from "react";
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
  return (
    <Column>
      <Container className="w-4/6 mx-auto">
        <h1 className="text-xl mb-5">Tiene un 45% terminado</h1>
        <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[45%]"></div>
        </div>
      </Container>
      {documentsArray.map((document) => (
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
