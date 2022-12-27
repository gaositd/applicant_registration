import React from "react";
import Dropzone from "../../Dropzone";
import Column from "../../GridSystem/Column";
import Container from "../../GridSystem/Container";

interface props {}

const UserPage: React.FC<props> = () => {
  return (
    <Column>
      <Container className="w-4/6 mx-auto">
        <h1 className="text-xl mb-5">Tiene un 45% terminado</h1>
        <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[45%]"></div>
        </div>
      </Container>
      <Container className="flex justify-around">
        <section>
          <h3 className="font-bold text-xl">Documento 1</h3>
          <h4 className="font-serif font-light">Status: Sin enviar</h4>
        </section>
        <Dropzone />
      </Container>
    </Column>
  );
};

export default UserPage;
