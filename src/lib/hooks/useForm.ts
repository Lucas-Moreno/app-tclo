import { useState, ChangeEvent } from "react";

export function useForm<T>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email") {
      const emailValid = /\S+@\S+\.\S+/.test(value);
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !emailValid,
      }));
    } else if (name === "password" || name === "confirmPassword") {
      const passwordValid = value.length >= 8;
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !passwordValid,
      }));
    } else {
      const nameValid = value.length >= 1;
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !nameValid,
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = !Object.values(fieldErrors).some((error) => error);

  return { formData, handleChange, fieldErrors, isFormValid };
}
