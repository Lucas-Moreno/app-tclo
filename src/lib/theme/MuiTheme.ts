import { createTheme } from "@mui/material/styles";
import { colors, fontSize } from "./VariablesTheme";

const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.blue,
          color: colors.white,
          fontSize: fontSize.p,
        },
      },
    },
  },
});

export default customTheme;
