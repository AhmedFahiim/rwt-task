import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

interface Props extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}

export function Button({ children, className, variant = "solid" }: Props) {
  return (
    <ChakraButton variant={variant} className={className}>
      {children}
    </ChakraButton>
  );
}
