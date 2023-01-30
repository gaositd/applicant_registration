"use client";

import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

interface props {}

const LoginForm: React.FC<props> = () => {
  const router = useRouter();
  const toast = useToast();

  const [inputs, setInputs] = useState<{ matricula: string; password: string }>(
    {
      matricula: "",
      password: "",
    }
  );

  const handleSubmit = () => {
    fetch("http://localhost:4242/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.statusCode > 400) {
          toast({
            title: "Error",
            description: "Credenciales incorrectas",
            status: "error",
            duration: 3500,
          });
          return;
        }
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description:
            "Ha ocurrido un error, si el error persiste comunicate a las oficinas de la UJED",
          status: "error",
          duration: 3500,
        });
      });
  };

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="bg-pallete-primary h-full w-1/2 fixed z-0 -translate-x-1/2"></div>
      <div className="h-3/4 w-3/4  shadow-2xl z-10 flex ">
        <div className="flex items-center justify-center w-1/2">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex w-1/2 justify-center items-center flex-col">
          <div className="mb-6">
            <CustomInput
              label="Matricula"
              value={inputs.matricula}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputs((prev) => ({
                  ...prev,
                  matricula: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-6">
            <CustomInput
              label="Contraseña"
              type="password"
              value={inputs.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputs((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <CustomButton
            text="Iniciar sesión"
            size="lg"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
