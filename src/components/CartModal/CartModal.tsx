import { useContext } from "react";
import { ModalCard } from "../ModalCard/ModalCard";
import style from "./style.module.scss";
import { CartList } from "../../context/CartList";

export const CartModal = () => {
  const { cartList, setCartList } = useContext(CartList);
  return (
    <div className={style.modal}>
      {cartList &&
        cartList.map((item) => {
          return (
            <ModalCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              count={item.count}
              image={item.image}
              setCartList={setCartList}
            />
          );
        })}
      {cartList && cartList.length >= 1 ? (
        <div className={style.total}>
          <p className={style.text}>Total</p>
          <p className={style.text}>{`$ ${cartList.reduce(
            (sum, item) => sum + item.price * item.count,
            0
          )}`}</p>
        </div>
      ) : (
        <p>Something's missing</p>
      )}
    </div>
  );
};
