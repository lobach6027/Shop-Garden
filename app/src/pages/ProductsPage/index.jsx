import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";
import FilterSortBar from "../../components/FilterSortBar";

export default function ProductsPage() {
  const { id } = useParams();

  const products = useSelector(({ products }) => {
    if (id === undefined) {
      return products;
    } else {
      return products.filter((item) => item.categoryId === +id);
    }
  });
  const category = useSelector(({ categories }) =>
    categories.find((item) => +id === item.id)
  );
  console.log(category);
  return (
    <>
      <div className={s.wrapper}>
        <h2 className={s.products_title}>
          {category === undefined ? "All Products" : category.title}
        </h2>
        <FilterSortBar />
        <div className={s.container}>
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
