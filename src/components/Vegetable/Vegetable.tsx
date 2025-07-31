import { ActionIcon, Button } from "@mantine/core";
import style from "./style.module.scss";
import Add from "../../assets/add.svg?react";
import Subtract from "../../assets/subtract.svg?react";
import Cart from "../../assets/greencart.svg?react";
import { useAmount } from "../../hooks/useAmount";
import { useContext } from "react";
import { CartList } from "../../context/CartList";

interface VegetableProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const Vegetable = ({ id, name, price, image }: VegetableProps) => {
  const [amount, setAmount] = useAmount(1);
  const { cartList, setCartList } = useContext(CartList);
  return (
    <div key={id} className={style.card}>
      <img src={image} width={276} height={276} alt={name} />
      <div className={style.info}>
        <div className={style.name}>
          <p className={style.title}>{name.slice(0, name.indexOf("-") - 1)}</p>
          <p className={style.weight}>{name.slice(name.indexOf("-") + 2)}</p>
        </div>
        <div className={style.amount}>
          <ActionIcon
            variant="filled"
            aria-label="Subtract"
            size={30}
            color="#dee2e6"
            onClick={() => setAmount(Number(amount) - 1)}
          >
            <Subtract width={12} height={12} />
          </ActionIcon>
          <input
            type="number"
            value={`${amount}`}
            className={style.input}
            onChange={(e) => setAmount(e.target.value)}
          />
          <ActionIcon
            variant="filled"
            aria-label="Add"
            size={30}
            color="#dee2e6"
            onClick={() => setAmount(Number(amount) + 1)}
          >
            <Add width={12} height={12} />
          </ActionIcon>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.price}>{`$ ${price * Number(amount)}`}</p>
        <Button
          variant="filled"
          color="#e7faeb"
          rightSection={<Cart width={20} height={20} />}
          radius="md"
          classNames={{
            root: style.root,
          }}
          className={style.button}
          onClick={() => {
            if (
              setCartList &&
              cartList &&
              !cartList.find((item) => item.id === id)
            ) {
              setCartList((prev) => {
                return [
                  ...prev,
                  {
                    id: id,
                    name: name,
                    count: Number(amount),
                    price: price,
                    image: image,
                  },
                ];
              });
            }
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
