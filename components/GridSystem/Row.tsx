import React from "react";

interface props {
  children: React.ReactNode;
}

const Row: React.FC<props> = ({ children }) => {
  return (
    <div className=" grid w-full lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-1">
      {children}
    </div>
  );
};

export default Row;
