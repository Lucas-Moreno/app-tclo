import { useState } from "react";

export function useToggle<T extends Record<string, boolean>>(initialState: T) {
  const [state, setState] = useState(initialState);

  const toggle = (key: keyof T) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const isToggled = (key: keyof T) => state[key] || false;

  return { isToggled, toggle };
}
