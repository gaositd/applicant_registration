import { redirect } from "next/navigation";
import React from "react";
import { AdminPage } from "../../components/pages/dashboard/AdminPage";
import { SecretariaPage } from "../../components/pages/dashboard/SecretariaPage";
import UserPage from "../../components/pages/dashboard/UserPage";
import { useSession } from "../../hooks/useSession";

async function page() {
  const user = await useSession();

  if (!user) {
    redirect("/login");
  }

  return user.role === "prospecto" ? (
    <>
      <UserPage />
    </>
  ) : user.role === "admin" ? (
    <>
      <AdminPage />
    </>
  ) : (
    <>
      <SecretariaPage />
    </>
  );
}

export default page;
