import { useEffect, useState } from "react";
import { Vegetable } from "../../components/Vegetable/Vegetable";
import style from "./style.module.scss";
import Loader from "../../assets/loader.svg?react";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadingCards = [1, 2, 3, 4, 5, 6, 7, 8];
  const loadData = async () => {
    setIsLoading(true);
    const vegs: Data[] = await ky
      .get(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
      )
      .json();
    setData(vegs);
    setIsLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <section className={style.container}>
      <h2 className={style.title}>Catalog</h2>
      <div className={style.list}>
        {isLoading
          ? loadingCards.map((item) => {
              return (
                <div key={item} className={style.loader}>
                  <div className={style.icon}>
                    <Loader width={22} height={20} />
                  </div>
                </div>
              );
            })
          : data.map((item) => {
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
