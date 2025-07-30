import { ActionIcon } from "@mantine/core";
import style from "./style.module.scss";
import Add from "../../assets/add.svg?react";

interface VegetableProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const Vegetable = ({ id, name, price, image }: VegetableProps) => {
  return (
    <div key={id} className={style.card}>
      <img src={image} width={276} height={276} alt={name} />
      <div className={style.info}>
        <div className={style.name}>
          <p className={style.title}>{name.slice(0, name.indexOf("-") - 1)}</p>
          <p className={style.weight}>{name.slice(name.indexOf("-") + 2)}</p>
        </div>
        <div className={style.amount}>
          <input type="number" value="1" className={style.input} />
          <ActionIcon
            variant="filled"
            aria-label="Add"
            size={30}
            color="#dee2e6"
          >
            <Add width={12} height={12} />
          </ActionIcon>
        </div>
      </div>
      <p>{price}</p>
    </div>
  );
};
