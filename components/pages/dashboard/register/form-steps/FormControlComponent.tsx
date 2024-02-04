import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightAddon,
  Icon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type FormControlComponentProps = {
  children?: React.ReactNode;
  label: string;
  isInvalid: boolean;
  name: string;
  errorMessage?: string;
  icon: IconType;
  rightAddon?: boolean;
};

export const FormControlComponent: React.FC<FormControlComponentProps> = ({
  children,
  isInvalid,
  label,
  name,
  icon,
  errorMessage,
  rightAddon = true,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={name} color={"whiteAlpha.900"} fontWeight={"bold"}>
        {label}
      </FormLabel>
      <InputGroup>
        {children}
        {rightAddon && <InputRightAddon children={<Icon as={icon} />} />}
      </InputGroup>
      <FormErrorMessage color={"whiteAlpha.900"} fontWeight={"bold"}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
