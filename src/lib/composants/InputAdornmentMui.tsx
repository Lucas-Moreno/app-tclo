import IconButton from "@mui/material/IconButton/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactNode } from "react";

interface Props {
  position: "end" | "start";
  onClick?: () => void;
  children?: ReactNode;
}

export default function InputAdornmentMui({
  position,
  onClick,
  children,
}: Props) {
  return (
    <InputAdornment position={position}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </InputAdornment>
  );
}
