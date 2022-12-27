import React from "react";

interface props {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const Container: React.FC<props> = ({ children, className, center }) => {
  return (
    <section
      className={`${
        center ? "mx-auto" : ""
      } ${className} rounded-lg shadow-lg p-4 outline outline-1 outline-gray-400/30`}
    >
      {children}
    </section>
  );
};

export default Container;
