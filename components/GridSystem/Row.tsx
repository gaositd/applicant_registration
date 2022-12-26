import React from "react";

interface props {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<props> = ({ children, className }) => {
  return (
    <div
      className={`grid w-full lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-1 gap-2 ${className} `}
    >
      {children}
    </div>
  );
};

export default Row;
