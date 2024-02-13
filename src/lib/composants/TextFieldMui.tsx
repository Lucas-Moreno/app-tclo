import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { ChangeEventHandler } from "react";
import { InputAdornment } from ".";
import { useToggle } from "../hooks";

interface InputProps {
  endAdornment: React.ReactNode;
}

interface Props {
  label?: string;
  variant?: TextFieldVariants;
  width?: string;
  fullWidth?: boolean;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  required?: boolean;
  name?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  InputProps?: InputProps;
  error?: boolean;
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  account?: boolean;
}

export default function TextFieldMui({
  label,
  variant,
  fullWidth,
  width,
  required,
  name,
  onChange,
  InputProps,
  type,
  mt,
  ml,
  mr,
  mb,
  error,
  email,
  password,
  confirmPassword,
  account,
}: Props) {
  const { isToggled, toggle } = useToggle({
    showPasswordOne: false,
    showPasswordTwo: false,
  });

  const accountProps = account
    ? {
      label: "Nom de compte",
      variant: "outlined" as TextFieldVariants,
      fullWidth: true,
      required: true,
      name: "name",
    }
    : {};

  const emailProps = email
    ? {
      label: "Email",
      variant: "outlined" as TextFieldVariants,
      fullWidth: true,
      required: true,
      name: "email",
    }
    : {};

  const passwordProps = password
    ? {
      label: "Mot de passe",
      variant: "outlined" as TextFieldVariants,
      fullWidth: true,
      required: true,
      name: "password",
      type: isToggled("showPasswordOne") ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() => toggle("showPasswordOne")}
          >
            {isToggled("showPasswordOne") ? (
              <Visibility />
            ) : (
              <VisibilityOff />
            )}
          </InputAdornment>
        ),
        ...InputProps,
      },
    }
    : {};

  const confirmPasswordProps = confirmPassword
    ? {
      label: "Confirmer le mot de passe",
      variant: "outlined" as TextFieldVariants,
      fullWidth: true,
      required: true,
      name: "confirmPassword",
      type: isToggled("showPasswordTwo") ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() => toggle("showPasswordTwo")}
          >
            {isToggled("showPasswordTwo") ? (
              <Visibility />
            ) : (
              <VisibilityOff />
            )}
          </InputAdornment>
        ),
        ...InputProps,
      },
    }
    : {};

  return (
    <TextField
      label={label}
      variant={variant}
      required={required}
      name={name}
      onChange={onChange}
      InputProps={InputProps}
      type={type}
      style={{
        width,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt,
      }}
      fullWidth={fullWidth}
      error={error}
      {...emailProps}
      {...passwordProps}
      {...confirmPasswordProps}
      {...accountProps}
    />
  );
}
