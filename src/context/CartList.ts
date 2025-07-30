import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  count: number;
  price: number;
  image: string;
}

interface Context {
  cartList?: CartItem[];
  setCartList?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartList = createContext<Context>({});
