import { Vegetable } from "../../components/Vegetable/Vegetable";
import style from "./style.module.scss";

export const VegetablesList = () => {
  const vegs = [
    {
      id: 1,
      name: "Brocollu - 1 Kg",
      price: 120,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables",
    },
    {
      id: 2,
      name: "Brocollu - 1 Kg",
      price: 120,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables",
    },
    {
      id: 3,
      name: "Brocollu - 1 Kg",
      price: 120,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables",
    },
    {
      id: 4,
      name: "Brocollu - 1 Kg",
      price: 120,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables",
    },
    {
      id: 5,
      name: "Brocollu - 1 Kg",
      price: 120,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables",
    },
  ];
  return (
    <section className={style.container}>
      <h2 className={style.title}>Catalog</h2>
      <div className={style.list}>
        {vegs.map((item) => {
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
