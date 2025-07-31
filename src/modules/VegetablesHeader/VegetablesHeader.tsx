import Logo from "../../assets/logo.svg?react";
import Cart from "../../assets/cart.svg?react";
import { Button } from "@mantine/core";
import style from "./style.module.scss";
import { CartModal } from "../../components/CartModal/CartModal";
import { useContext, useState } from "react";
import { CartList } from "../../context/CartList";

export const VegetablesHeader = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cartList } = useContext(CartList);
  return (
    <header className={style.header}>
      <Logo width={209} height={33} />
      <Button
        variant="filled"
        color="#54b46a"
        leftSection={
          cartList &&
          cartList.length > 0 && (
            <div className={style.count}>{cartList.length}</div>
          )
        }
        rightSection={<Cart width={20} height={20} />}
        radius="md"
        classNames={{
          root: style.root,
        }}
        className={style.button}
        onClick={() => setShowModal(!showModal)}
      >
        Cart
      </Button>
      {showModal && <CartModal />}
    </header>
  );
};
