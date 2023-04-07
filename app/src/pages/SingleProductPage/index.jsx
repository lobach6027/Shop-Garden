import React from "react";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SingleProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((item) => item.id === +id);

  return (
    <div>
      {product === undefined ? (
        <p>Wait</p>
      ) : (
        <div className={s.wrapper}>
          <h3>{product.title}</h3>
          <div className={s.product_container}>
            <div className={s.image_container}>
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
              />
            </div>
            <div className={s.info}>
              <div>
                <span>{product.newprice} $ </span>
                <span>{product.price} $ </span>
                <span>
                  {Math.round(
                    ((product.price - product.newprice) * 100) / product.price
                  )}
                  %
                </span>
              </div>
              <button>To cart</button>
              <img src="/images/line.png" alt="line" />
              <div>
                <p>Description</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
