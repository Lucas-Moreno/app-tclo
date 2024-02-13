import { UserType } from "../lib/types/types";
import { AlertMessage, Button, Typography } from "../lib/composants";
import { getUser } from "../lib/services/userService";
import { useEffect, useState } from "react";
import { useAlert, useErrorHandling } from "../lib/hooks";
import { AxiosError } from "axios";
import { logout } from "../lib/services/authService";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState<UserType>();
  const navigate = useNavigate();
  const { triggerAlert, closeAlert, alertSeverity, alertMessage, openAlert } =
    useAlert();

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      if (error instanceof AxiosError) {
        useErrorHandling(error, triggerAlert);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUser(data.user);
      } catch (error) {
        if (error instanceof AxiosError) {
          useErrorHandling(error, triggerAlert);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography label="Home" variant="h1" />
      <Typography label="Email :" />
      <Typography label={user?.email} />
      <AlertMessage
        open={openAlert}
        onClose={closeAlert}
        message={alertMessage}
        severity={alertSeverity}
      />
      <Button
        variant="contained"
        fullWidth
        label="Se déconnecter"
        width="200px"
        onClick={handleLogout}
      />
    </div>
  );
}
