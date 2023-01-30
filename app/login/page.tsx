import { redirect } from "next/navigation";
import LoginForm from "../../components/LoginForm";
import { useSession } from "../../hooks/useSession";

async function page() {
  const user = await useSession();

  if (user) redirect("/dashboard");

  return <LoginForm />;
}

export default page;
