import Logo from "../../assets/logo.svg?react";
import Cart from "../../assets/cart.svg?react";
import { Button } from "@mantine/core";
import style from "./style.module.scss";

export const VegetablesHeader = () => {
  return (
    <header className={style.header}>
      <Logo width={209} height={33} />
      <Button
        variant="filled"
        color="#54b46a"
        rightSection={<Cart width={20} height={20} />}
        radius="md"
        className={style.button}
      >
        Cart
      </Button>
    </header>
  );
};
