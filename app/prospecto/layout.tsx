import { redirect } from "next/navigation";
import Navbar from "../../components/Navbar";
import { useSession } from "../../hooks/useSession";

export default async function LayoutProspecto({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await useSession();

  if (!user) return redirect("/login");
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <main className="p-4" style={{ width: "100%", height: "100%" }}>
        {children}
      </main>
    </div>
  );
}
