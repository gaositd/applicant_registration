"use client";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

interface props {}

const page: React.FC<props> = () => {
  const router = useRouter();
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="bg-pallete-primary h-full w-1/2 fixed z-0 -translate-x-1/2"></div>
      <div className="h-3/4 w-3/4  shadow-2xl z-10 flex ">
        <div className="flex items-center justify-center w-1/2">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex w-1/2 justify-center items-center flex-col">
          <div className="mb-6">
            <CustomInput label="Matricula" />
          </div>
          <div className="mb-6">
            <CustomInput label="Contraseña" type="password" />
          </div>
          <CustomButton
            text="Iniciar sesión"
            size="lg"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
