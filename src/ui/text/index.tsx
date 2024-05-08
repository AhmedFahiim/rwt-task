import { As, TextProps, Text as Typo } from "@chakra-ui/react";
import React from "react";

interface Props extends TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className,
  fontSize = "md",
  fontWeight = "400",
  color = "#000",
  as = "span",
  ...props
}: Props) {
  return (
    <Typo
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </Typo>
  );
}
