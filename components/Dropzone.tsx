"use client";

import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { BsCheck2, BsTrash } from "react-icons/bs";
interface props {
  status: string;
  tipoDocumento: string;
}

const Dropzone: React.FC<props> = ({ status, tipoDocumento }) => {
  const [file, setFile] = useState<File>();
  const [isUploading, setUploading] = useState<boolean>(false);
  const toast = useToast();

  const onDropAccepted = useCallback((acceptedFile: File[]) => {
    setFile(acceptedFile[0]);
  }, []);

  const uploadFile = () => {
    if (isUploading) {
      toast({
        title: "Aviso",
        description: "Solo se puede subir una imagen a la vez...",
        status: "warning",
      });
      return;
    }

    setUploading(true);
    const formData = new FormData();
    //@ts-ignore
    formData.append("documento", file);

    fetch(`http://localhost:4242/users/upload?fileType=${tipoDocumento}`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUploading(false);
        toast({
          title: "Archivo subido",
          description: data.message,
          status: "success",
        });
      })
      .catch((err) =>
        toast({
          title: "Error al subir el archivo",
          description: err.message,
          status: "error",
        })
      );
  };

  const requiredFileUploadStatus = (localStatus: string) =>
    localStatus === "open-to-upload" || localStatus === "rejected";

  const onDropRejected = (fileRejected: FileRejection[]) => {
    toast({
      title: "Error",
      description: `El archivo que se intenta subir no tiene la extensión soportada: (${fileRejected[0].file.type})`,
      status: "error",
    });
  };

  const deleteFile = () => {
    setFile(undefined);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "application/pdf": [],
    },
    onDropRejected,
  });

  if (file)
    return (
      <section className="flex p-2 w-48">
        <div className="h-40 w-48 p-2">
          {file.type.includes("pdf") ? (
            <img src="/pdf.png" className="w-full h-[80%] object-fill"></img>
          ) : (
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full object-cover"
            ></img>
          )}
          <p className="h-10 text-sm font-light truncate">{file.name}</p>
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

  return requiredFileUploadStatus(status) ? (
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
