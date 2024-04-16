"use client";
import { useSearchParams } from "next/navigation";
import { PasswordResetForm } from "../../components/password-reset/PasswordResetForm";

const PasswordResetPage = () => {
  const searchParms = useSearchParams();
  return <PasswordResetForm token={searchParms.get("token")} />;
};

export default PasswordResetPage;
