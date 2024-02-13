import { Lock as LockIcon } from "@mui/icons-material";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  AlertMessage,
  Box,
  Button,
  Container,
  Icon,
  Link,
  TextField,
  Typography,
} from "../composants";
import { useAlert, useErrorHandling, useForm } from "../hooks";
import { signup } from "../services/authService";
import { colors } from "../theme/VariablesTheme";

export default function Signup() {
  const navigate = useNavigate();

  const { triggerAlert, closeAlert, alertSeverity, alertMessage, openAlert } =
    useAlert();

  const { formData, handleChange, fieldErrors, isFormValid } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      return triggerAlert("error", "You did not write the same password");
    }
    try {
      await signup(formData);
      navigate("/signin");
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
        <Typography variant="h2" label="Inscription" mb="30px" />
        <TextField
          account
          mb="20px"
          error={fieldErrors.name}
          onChange={handleChange}
        />
        <TextField
          email
          mb="30px"
          error={fieldErrors.email}
          onChange={handleChange}
        />
        <TextField
          password
          mb="30px"
          error={fieldErrors.password}
          onChange={handleChange}
        />
        <TextField
          confirmPassword
          mb="30px"
          error={fieldErrors.confirmPassword}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          fullWidth
          label="S'inscrire"
          onClick={handleSignup}
          disabled={!isFormValid}
        />
        <Box display="flex" width="100%" justifyContent="center" mt="30px">
          <Link underline="always" onClick={() => navigate("/signin")}>
            {"Déjà un compte ? Se connecter "}
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
