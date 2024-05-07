import { As, Text as Typo } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  as?: As;
}

export function Text({
  children,
  className,
  fontSize = "md",
  fontWeight = "400",
  color = "#000",
  as = "span",
}: Props) {
  return (
    <Typo
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      className={className}
    >
      {children}
    </Typo>
  );
}
