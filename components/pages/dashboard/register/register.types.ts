import { IconType } from "react-icons";
import { InputProps } from "@chakra-ui/react";

export type TInput =
  | {
      type: "text" | "email" | "password";
      placeholder: string;
      icon: IconType;
      additonalProps?: InputProps;
    }
  | {
      type: "select";
      placeholder: string;
      icon: IconType;
      options: {
        value: string;
        label: string;
      }[];

      additonalProps?: InputProps;
    };

export type TFormInputs = {
  [key: string]: TInput;
};

export type TFormInputsSections = {
  name: string;
  inputs: TFormInputs;
};
