import { useEffect, useState } from "react";
import { Vegetable } from "../../components/Vegetable/Vegetable";
import style from "./style.module.scss";
import ky from "ky";

interface Data {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const VegetablesList = () => {
  const [data, setData] = useState<Data[]>([]);
  const loadData = async () => {
    const vegs: Data[] = await ky
      .get(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
      )
      .json();
    setData(vegs);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <section className={style.container}>
      <h2 className={style.title}>Catalog</h2>
      <div className={style.list}>
        {data.map((item) => {
          return (
            <Vegetable
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};
