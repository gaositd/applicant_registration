import React from "react";

interface props {
  text: string;
  size?: sizeType;
  type?: buttontype;
  loading?: boolean;
}

type sizeType = "md" | "lg" | "xl" | "wrap";

const sizes = {
  md: "w-24",
  lg: "w-32",
  xl: "w-64",
  wrap: "",
};

type buttontype = "primary" | "success" | "warning" | "danger";

const buttonType = {
  primary: "bg-buttons-primary",
  success: "bg-buttons-success",
  warning: "bg-buttons-warning",
  danger: "bg-buttons-danger",
};

const CustomButton: React.FC<props> = ({
  text,
  size = "wrap",
  type = "primary",
  loading = false,
}) => {
  return (
    <button
      className={`${buttonType[type]} rounded-tl-xl rounded-br-xl p-2 text-md text-white drop-shadow-xl font-semibold hover:${buttonType[type]}-hover ${sizes[size]}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
