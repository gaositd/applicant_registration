import { redirect } from "next/navigation";
import React from "react";
import UserPage from "../../components/pages/dashboard/UserPage";
import { useSession } from "../../hooks/useSession";

async function page() {
  const user = await useSession();

  if (!user) {
    redirect("/login");
  }

  return user.role === "prospecto" ? (
    <>
      {/* @ts-expect-error Server Component */}
      <UserPage />
    </>
  ) : (
    <>
      <h1>Bienvenido! {user.nombre}</h1>
    </>
  );
}

export default page;
