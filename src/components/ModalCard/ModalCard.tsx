import { ActionIcon } from "@mantine/core";
import Subtract from "../../assets/subtract.svg?react";
import Add from "../../assets/add.svg?react";
import style from "./style.module.scss";
import { useAmount } from "../../hooks/useAmount";
import type { CartItem } from "../../context/CartList";
import { useEffect } from "react";

interface ModalProps {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
  setCartList?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const ModalCard = ({
  id,
  name,
  price,
  count,
  image,
  setCartList,
}: ModalProps) => {
  const [amount, setAmount] = useAmount(count);
  useEffect(() => {
    setAmount(count);
  }, [count, setAmount]);
  return (
    <div key={id} className={style.item}>
      <div className={style.info}>
        <img
          className={style.image}
          src={image}
          alt={name}
          width={64}
          height={64}
        />
        <div className={style.column}>
          <div className={style.title}>
            <p className={style.name}>{name.slice(0, name.indexOf("-") - 1)}</p>
            <p className={style.weight}>{name.slice(name.indexOf("-") + 2)}</p>
          </div>
          <p className={style.price}>{`$ ${price * Number(amount)}`}</p>
        </div>
      </div>
      <div className={style.amount}>
        <ActionIcon
          variant="filled"
          aria-label="Subtract"
          size={30}
          color="#dee2e6"
          onClick={() => {
            setAmount(Number(amount) - 1);
            if (setCartList && Number(amount) - 1 < 1) {
              setCartList((prev) => prev.filter((item) => item.id !== id));
            }
            if (setCartList) {
              setCartList((prev) => {
                const arr = [...prev];
                for (let i = 0; i < arr.length; i++) {
                  if (arr[i].id === id) {
                    arr[i].count = Number(amount) - 1;
                  }
                }
                return arr;
              });
            }
          }}
        >
          <Subtract width={12} height={12} />
        </ActionIcon>
        <input
          type="number"
          value={`${amount}`}
          className={style.input}
          onChange={(e) => {
            setAmount(e.target.value);
            if (setCartList) {
              setCartList((prev) => {
                const arr = [...prev];
                for (let i = 0; i < arr.length; i++) {
                  if (arr[i].id === id) {
                    arr[i].count = Number(e.target.value);
                  }
                }
                return arr;
              });
            }
          }}
        />
        <ActionIcon
          variant="filled"
          aria-label="Add"
          size={30}
          color="#dee2e6"
          onClick={() => {
            setAmount(Number(amount) + 1);
            if (setCartList) {
              setCartList((prev) => {
                const arr = [...prev];
                for (let i = 0; i < arr.length; i++) {
                  if (arr[i].id === id) {
                    arr[i].count = Number(amount) + 1;
                  }
                }
                return arr;
              });
            }
          }}
        >
          <Add width={12} height={12} />
        </ActionIcon>
      </div>
    </div>
  );
};
