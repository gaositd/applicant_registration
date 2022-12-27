"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomButton from "./CustomButton";

interface props {}

const Dropzone: React.FC<props> = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDropAccepted = useCallback((acceptedFile: File[]) => {
    setFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDropAccepted,
      maxFiles: 1,
    });

  if (file)
    return (
      <section className="flex">
        <div className="h-40 w-48">
          <img
            src={URL.createObjectURL(file)}
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="flex flex-col h-full w-24 gap-5 absolute z-10">
          <CustomButton text="Enviar" size="sm" />
          <CustomButton text="Cancelar" colorType="danger" />
        </div>
      </section>
    );

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 w-1/2 h-32 rounded flex justify-center items-center"
    >
      <img src="/upload.svg" alt="upload image" className="h-8 mr-2"></img>
      <input {...getInputProps()} className="border" />
      {isDragActive ? (
        <p>Suelta tu archivo aqui</p>
      ) : acceptedFiles.length <= 0 ? (
        <p>Arrastra tu archivo aqui</p>
      ) : null}
    </div>
  );
};

export default Dropzone;
