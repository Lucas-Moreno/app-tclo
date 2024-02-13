import Checkbox from "@mui/material/Checkbox";
import { ChangeEventHandler } from "react";

type ColorCheckbox =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | "default";

interface Props {
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  color?: ColorCheckbox;
}

export default function CheckboxMui({ checked, onChange, name, color }: Props) {
  return (
    <Checkbox checked={checked} onChange={onChange} name={name} color={color} />
  );
}
