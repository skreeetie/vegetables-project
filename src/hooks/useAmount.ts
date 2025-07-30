import { useState } from "react";

export const useAmount = (initialValue: number) => {
  const [amount, setDefaultAmount] = useState<number | string>(initialValue);
  const setAmount = (value: number | string) => {
    if (Number(value) >= 1 || value === "") {
      setDefaultAmount(value);
    }
  };

  return [amount, setAmount] as const;
};
