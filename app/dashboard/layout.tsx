import { redirect } from "next/navigation";
import React from "react";
import Navbar from "../../components/Navbar";
import { useSession } from "../../hooks/useSession";

interface props {
  children: React.ReactNode;
}

const page = async ({ children }: props) => {
  const user = await useSession();

  if (!user) return redirect("/login");
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar isAdmin={user.role === "admin"} />
      <main className="p-4" style={{ width: "100%", height: "100%" }}>
        {children}
      </main>
    </div>
  );
};

export default page;
