import { ReactElement, cloneElement } from "react";
import { Box, Typography } from "@mui/material";

interface IconMuiProps {
  src: ReactElement;
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  color?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

export default function IconMui({
  src,
  label,
  labelPosition,
  color,
  mt,
  ml,
  mr,
  mb,
}: IconMuiProps) {
  let iconStyle = {};
  if (color) {
    iconStyle = { color: color };
  }

  let content = (
    <Box display="flex" alignItems="center">
      {cloneElement(src, { style: iconStyle })}{" "}
      <Typography
        variant="body1"
        style={{
          marginLeft: ml,
          marginRight: mr,
          marginBottom: mb,
          marginTop: mt,
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  if (labelPosition === "top") {
    content = (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1">{label}</Typography>
        {cloneElement(src, { style: iconStyle })}
      </Box>
    );
  } else if (labelPosition === "bottom") {
    content = (
      <Box display="flex" flexDirection="column" alignItems="center">
        {cloneElement(src, { style: iconStyle })}
        <Typography variant="body1">{label}</Typography>
      </Box>
    );
  } else if (labelPosition === "left") {
    content = (
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          {label}
        </Typography>
        {cloneElement(src, { style: iconStyle })}
      </Box>
    );
  } else if (labelPosition === "right") {
    content = (
      <Box display="flex" alignItems="center">
        {cloneElement(src, { style: iconStyle })}
        <Typography variant="body1" sx={{ marginLeft: 1 }}>
          {label}
        </Typography>
      </Box>
    );
  }

  return content;
}
