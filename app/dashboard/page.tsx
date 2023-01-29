import React from "react";
import UserPage from "../../components/pages/dashboard/UserPage";

interface props {}

const page: React.FC<props> = () => {
  const isAdmin = true;
  return isAdmin ? (
    <>
      <UserPage />
    </>
  ) : (
    <>
      <h1>Este es un alumno</h1>
    </>
  );
};

export default page;
