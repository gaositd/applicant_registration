"use client";
import React from "react";
import Navbar from "../../components/Navbar";

interface props {
  children: React.ReactNode;
}

const page: React.FC<props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default page;
