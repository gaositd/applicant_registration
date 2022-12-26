import React from "react";

interface props {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const Container: React.FC<props> = ({ children, className, center }) => {
  return (
    <div
      className={`${
        center ? "mx-auto" : ""
      } ${className} rounded-md shadow-lg outline-gray-400 p-4`}
    >
      {children}
    </div>
  );
};

export default Container;
