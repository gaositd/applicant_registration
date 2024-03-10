import { redirect } from "next/navigation";
import React from "react";
import { AdminPage } from "../../components/pages/dashboard/secretaria/AdminPage";
import UserPage from "../../components/pages/dashboard/UserPage";
import { useSession } from "../../hooks/useSession";

async function Page() {
  const user = await useSession();

  console.log(user && "User authenticated: ", {
    user: user?.nombre,
    role: user?.role,
  });
  if (!user) {
    redirect("/login");
  }

  return user.role === "prospecto" ? (
    <>
      <UserPage />
    </>
  ) : (
    <>
      <AdminPage isAdmin={user.role === "admin"} />
    </>
  );
}

export default Page;
