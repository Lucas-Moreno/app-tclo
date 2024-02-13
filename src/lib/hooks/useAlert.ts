import { AlertColor } from "@mui/material";
import { useState } from "react";

export const useAlert = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const triggerAlert = (severity: AlertColor, message: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setOpenAlert(true);
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };

  return { triggerAlert, closeAlert, alertSeverity, alertMessage, openAlert };
};
