"use client";

import { Flex, IconButton, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { BsCheck2, BsTrash } from "react-icons/bs";
import { useMutation } from "react-query";
import { Loading } from "./loadingComponent";
interface props {
  status: string;
  tipoDocumento: string;
}

const Dropzone: React.FC<props> = ({ status, tipoDocumento }) => {
  const [file, setFile] = useState<File>();
  const [isUploading, setUploading] = useState<boolean>(false);
  const toast = useToast();

  const updateFiles = async (formData: FormData) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/docs/upload`,
      formData,
      {
        withCredentials: true,
      }
    );
  };

  const { mutate, isLoading } = useMutation("uploadFile", updateFiles);

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

    mutate(formData);

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/docs/upload?fileType=${tipoDocumento}`,
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    )
      .then((resp) => {
        if (resp.status === 201) return resp.json();
        else throw new Error("Error al subir el archivo");
      })
      .then((data) => {
        setUploading(false);
        toast({
          title: "Archivo subido",
          description: data.message,
          status: "success",
        });

        //reload page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        setUploading(false);
        toast({
          title: "Error al subir el archivo",
          description: err.message,
          status: "error",
        });
      });
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
      <Flex
        w={{ base: "full", md: "30%" }}
        justify={"center"}
        mt={{ base: 4, md: 0 }}
      >
        <Flex flexDir={"column"}>
          {isUploading ? (
            <Loading />
          ) : file.type.includes("pdf") ? (
            <Image src="/pdf.png" alt="file-pdf" w={"80%"} h={"80%"} />
          ) : (
            // <img src="/pdf.png" className="w-full h-[80%] object-fill"></img>
            <img
              src="/picture.png"
              className="w-full h-[80%] object-fill"
            ></img>
          )}
          <Text>{file.name}</Text>
        </Flex>
        <Flex
          // className="flex flex-col h-full  gap-5 z-10"
          flexDir={"column"}
          justify={"space-evenly"}
          align={"center"}
          px={3}
        >
          <IconButton
            aria-label="upload-file"
            type="button"
            colorScheme="green"
            onClick={uploadFile}
            disabled={isUploading}
            isLoading={isLoading}
            fontSize={"3xl"}
            size={"sm"}
            icon={<BsCheck2 />}
          ></IconButton>
          <IconButton
            aria-label="delete-file"
            type="button"
            colorScheme="red"
            onClick={deleteFile}
            disabled={isUploading}
            isLoading={isLoading}
            fontSize={"xl"}
            size={"sm"}
            icon={<BsTrash />}
          ></IconButton>
        </Flex>
      </Flex>
    );

  return requiredFileUploadStatus(status) ? (
    <Flex
      {...getRootProps()}
      border={isDragActive ? "2px solid #3182ce" : "2px dashed #e2e8f0"}
      justify={"center"}
      align={"center"}
      cursor={"pointer"}
      w={{ base: "full", md: "50%" }}
      h={"32"}
      rounded={"md"}
      p={3}
      gap={2}
    >
      <img src="/upload.svg" alt="upload image" className="h-8 mr-2"></img>
      <input {...getInputProps()} className="border" />
      {isDragActive ? (
        <p>Suelta tu archivo aqui</p>
      ) : !file ? (
        <p>Arrastra tu archivo aqui o da click para seleccionar</p>
      ) : null}
    </Flex>
  ) : null;
};

export default Dropzone;
