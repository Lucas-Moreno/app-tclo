import Typography from "@mui/material/Typography";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

interface Props {
  label?: string;
  variant?: TypographyVariant;
  color?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

export default function TypographyMui({
  label,
  variant,
  color,
  mt,
  ml,
  mr,
  mb,
}: Props) {
  return (
    <Typography
      variant={variant}
      color={color}
      style={{
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt,
      }}
    >
      {label}
    </Typography>
  );
}
