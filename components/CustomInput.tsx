import React from "react";

interface props extends React.HTMLProps<HTMLInputElement> {
  inputSize?: sizeType;
  label?: string;
}

type sizeType = "md" | "lg" | "xl" | "full";

const sizeValues = {
  md: "w-64",
  lg: "w-80",
  xl: "w-96",
  full: "w-full",
};

const CustomInput: React.FC<props> = ({
  inputSize = "md",
  label,
  ...props
}) => {
  return (
    <div className={`${sizeValues[inputSize]}`}>
      {label && (
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
      )}
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      ></input>
    </div>
  );
};

export default CustomInput;
