import { useState } from "react";
import { VegetablesHeader } from "../../modules/VegetablesHeader";
import { VegetablesList } from "../../modules/VegetablesList";
import { CartList } from "../../context/CartList";

interface List {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

export const Vegetables = () => {
  const [cartList, setCartList] = useState<List[]>([]);
  return (
    <CartList value={{ cartList, setCartList }}>
      <VegetablesHeader />
      <VegetablesList />
    </CartList>
  );
};
