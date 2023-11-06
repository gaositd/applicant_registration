"use client";
import React from "react";
import { FILETYPES, FILE_STATUSES } from "../constants";
import Dropzone from "./Dropzone";
import Container from "./GridSystem/Container";

interface props {
  nombredDocumento: string;
  status: string;
  observaciones?: string[] | null;
}

const DocumentContainer: React.FC<props> = ({
  nombredDocumento,
  status,
  observaciones,
}) => {
  return (
    <Container className="flex justify-around">
      <section>
        <h3 className="font-bold text-xl">
          {FILETYPES[nombredDocumento as keyof typeof FILETYPES]}
        </h3>
        <h4 className="font-serif font-light">
          Status: {FILE_STATUSES[status as keyof typeof FILE_STATUSES]}
        </h4>
        {observaciones && (
          <ul className="list-disc text-red-500">
            {observaciones.map((obs) => (
              <li key={obs}>{obs}</li>
            ))}
          </ul>
        )}
      </section>
      <Dropzone status={status} tipoDocumento={nombredDocumento} />
    </Container>
  );
};

export default DocumentContainer;
