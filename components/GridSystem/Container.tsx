import React from "react";

interface props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<props> = ({ children, className }) => {
  return <div className={`w-full mx-auto ${className}  p-4`}>{children}</div>;
};

export default Container;
