import { Lock as LockIcon } from "@mui/icons-material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  AlertMessage,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Icon,
  Link,
  TextField,
  Typography,
} from "../composants";
import { useAlert, useErrorHandling, useForm } from "../hooks";
import { useAuth } from "../middlewares/AuthContext";
import { signin } from "../services/authService";
import { colors } from "../theme/VariablesTheme";

export default function Connection() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();

  const { formData, handleChange, fieldErrors, isFormValid } = useForm({
    email: "",
    password: "",
  });

  const { triggerAlert, closeAlert, alertSeverity, alertMessage, openAlert } =
    useAlert();

  const handleSignin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signin(formData);
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        useErrorHandling(error, triggerAlert);
      }
    }
  };

  return (
    <Container display="flex" alignItems="center" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="500px"
      >
        <Box
          width="50px"
          borderRadius="50px"
          backgroundColor={colors.blue}
          display="flex"
          justifyContent="center"
        >
          <Icon src={<LockIcon />} mb="50px" color={colors.white} />
        </Box>
        <Typography variant="h2" label="Connexion" mb="30px" />
        <TextField
          email
          mb="30px"
          onChange={handleChange}
          error={fieldErrors.email}
        />
        <TextField
          password
          mb="30px"
          onChange={handleChange}
          error={fieldErrors.password}
        />
        <Box width="100%">
          <FormControlLabel
            control={
              <Checkbox
                checked={state.rememberMe}
                onChange={(e) =>
                  dispatch({ type: "REMEMBER_ME", payload: e.target.checked })
                }
                name="checked"
                color="primary"
              />
            }
            label="Se souvenir de moi"
            mb="20px"
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          label="se connecter"
          disabled={!isFormValid}
          onClick={handleSignin}
        />
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          mt="30px"
        >
          <Link underline="always">{"Mot de passe oublié ?"}</Link>
          <Link underline="always" onClick={() => navigate("/signup")}>
            {"Pas de compte ? S'inscrire"}
          </Link>
        </Box>
      </Box>
      <AlertMessage
        open={openAlert}
        onClose={closeAlert}
        message={alertMessage}
        severity={alertSeverity}
      />
    </Container>
  );
}
