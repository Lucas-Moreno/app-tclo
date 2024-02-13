import { AxiosError } from "axios";

export function ApiErrors(error: AxiosError): {
  message: string;
} {
  if (
    error.response &&
    error.response.data !== null &&
    typeof error.response.data === "object" &&
    "message" in error.response.data
  ) {
    const message = error.response.data.message as string;
    return { message };
  } else {
    return { message: "Une erreur s'est produite." };
  }
}
