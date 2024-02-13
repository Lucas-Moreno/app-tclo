import { Container } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  backgroundColor?: string;
  alignItems?: string;
  display?: string;
  justifyContent?: string;
}
export default function ContainerMui({
  maxWidth,
  children,
  backgroundColor,
  alignItems,
  display,
  justifyContent,
}: Props) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        height: "100vh",
        backgroundColor,
        display,
        alignItems,
        justifyContent,
      }}
    >
      {children}
    </Container>
  );
}
