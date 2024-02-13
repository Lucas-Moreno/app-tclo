import FormControlLabel from "@mui/material/FormControlLabel";
import { ReactElement } from "react";

type FlexDirection = "column" | "row";
type Display = "flex" | "inline";

interface Props {
  control: ReactElement;
  label?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  display?: Display;
  flexDirection?: FlexDirection;
  alignItems?: string;
  justifyContent?: string;
}

export default function FormControlLabelMui({
  control,
  label,
  mt,
  ml,
  mr,
  mb,
  display,
  flexDirection,
  alignItems,
  justifyContent,
}: Props) {
  return (
    <FormControlLabel
      control={control}
      label={label}
      style={{
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt,
        display: display,
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    />
  );
}
