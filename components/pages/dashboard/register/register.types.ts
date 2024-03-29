import { InputProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export type TInput =
  | {
      type: 'text' | 'email' | 'password' | 'mail' | 'date' | 'number';
      placeholder: string;
      icon: IconType;
      additonalProps?: InputProps;
      label: string;
    }
  | {
      type: 'select';
      label: string;
      placeholder: string;
      icon: IconType;
      boolean?: boolean;
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
