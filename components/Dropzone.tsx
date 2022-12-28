"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCheck2, BsTrash } from "react-icons/bs";
interface props {
  status: string;
}

const Dropzone: React.FC<props> = ({ status }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDropAccepted = useCallback((acceptedFile: File[]) => {
    setFile(acceptedFile[0]);
  }, []);

  const uploadFile = () => {
    console.log("Animo, algun dia subira!");
  };

  const deleteFile = () => {
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
        <div className="flex flex-col h-full w-24 gap-5 z-10">
          <button
            type="button"
            className="text-white font-bold bg-buttons-success/50 w-8 h-8 flex justify-center items-center ml-3 p-1.5 rounded-lg"
            onClick={uploadFile}
          >
            <BsCheck2 className="h-full w-full" />
            <span className="sr-only">Subir archivo</span>
          </button>
          <button
            type="button"
            className="text-white font-bold bg-buttons-danger/50 w-8 h-8 flex justify-center items-center ml-3 p-1.5 rounded-lg"
            onClick={deleteFile}
          >
            <BsTrash className="h-full w-full" />
            <span className="sr-only">Cancelar archivo</span>
          </button>
        </div>
      </section>
    );

  return status !== "ACEPTADO" ? (
    <div
      {...getRootProps()}
      className="border-dashed border-2 w-1/2 h-32 rounded flex justify-center items-center"
    >
      <img src="/upload.svg" alt="upload image" className="h-8 mr-2"></img>
      <input {...getInputProps()} className="border" />
      {isDragActive ? (
        <p>Suelta tu archivo aqui</p>
      ) : !file ? (
        <p>Arrastra tu archivo aqui</p>
      ) : null}
    </div>
  ) : null;
};

export default Dropzone;
