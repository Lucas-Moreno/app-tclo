import Button from "@mui/material/Button";
import { FormEvent } from "react";

type ButtonVariant = "contained" | "outlined";

interface Props {
  label?: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  width?: string;
  onClick?: (event: FormEvent) => Promise<void>;
  disabled?: any;
}

export default function ButtonMui({
  label,
  variant,
  fullWidth,
  width,
  onClick,
  disabled,
}: Props) {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      style={{ width }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
