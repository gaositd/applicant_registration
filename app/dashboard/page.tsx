import { redirect } from "next/navigation";
import React from "react";
import UserPage from "../../components/pages/dashboard/UserPage";
import { useSession } from "../../hooks/useSession";

async function page() {
  const user = await useSession();

  if (!user) {
    return redirect("/login");
  }

  return user.role !== "prospecto" ? (
    <>
      <UserPage />
    </>
  ) : (
    <>
      <h1>Bienvenido! {user.nombre}</h1>
    </>
  );
}

export default page;
