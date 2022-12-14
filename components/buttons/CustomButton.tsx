import React from "react";

interface props {}

const CustomButton: React.FC<props> = (props) => {
  return (
    <button className="bg-buttons-primary rounded-tl-xl rounded-br-xl p-2 text-md text-white">
      Test button
    </button>
  );
};

export default CustomButton;
