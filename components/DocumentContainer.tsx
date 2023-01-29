"use client";
import React from "react";
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
        <h3 className="font-bold text-xl">{nombredDocumento}</h3>
        <h4 className="font-serif font-light">Status: {status}</h4>
        {observaciones ? (
          <ul className="list-disc text-red-500">
            {observaciones.map((obs) => (
              <li key={obs}>{obs}</li>
            ))}
          </ul>
        ) : null}
      </section>
      <Dropzone status={status} />
    </Container>
  );
};

export default DocumentContainer;
