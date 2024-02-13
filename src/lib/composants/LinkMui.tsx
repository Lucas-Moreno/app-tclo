import Link from "@mui/material/Link";
import { ReactNode } from "react";

type UnderlineProps = "always" | "none" | "hover" | undefined;

interface Props {
  underline?: UnderlineProps;
  children?: ReactNode;
  onClick?: () => void;
}

export default function LinkMui({ underline, children, onClick }: Props) {
  return (
    <Link underline={underline} onClick={onClick} sx={{ cursor: "pointer" }}>
      {children}
    </Link>
  );
}
