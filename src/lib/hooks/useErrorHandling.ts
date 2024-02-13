import { AxiosError } from "axios";
import { AlertColor } from "@mui/material";

export function useErrorHandling(
  error: AxiosError | undefined,
  triggerAlert: (severity: AlertColor, message: string) => void
) {
  if (error instanceof AxiosError) {
    let errorMessage = "Une erreur s'est produite.";

    if (
      error.response &&
      error.response.data !== null &&
      typeof error.response.data === "object" &&
      "message" in error.response.data
    ) {
      errorMessage = error.response.data.message as string;
    }

    if (triggerAlert) {
      triggerAlert("error", errorMessage);
    }
  }
}
