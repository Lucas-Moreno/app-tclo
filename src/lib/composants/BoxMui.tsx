import Box from "@mui/material/Box";

type FlexDirection = "column" | "row";

interface Props {
  children?: React.ReactNode;
  width?: string;
  fullWidth?: boolean;
  display?: string;
  flexDirection?: FlexDirection;
  alignItems?: string;
  justifyContent?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

export default function BoxMui({
  children,
  width,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  height,
  backgroundColor,
  borderRadius,
  mt,
  ml,
  mr,
  mb,
}: Props) {
  return (
    <Box
      display={display}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt,
      }}
    >
      {children}
    </Box>
  );
}
