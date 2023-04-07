import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function ProductCard({
  id,
  title,
  price,
  image,
  discont_price,
}) {
  const link = `/product/${id}`;
  return (
    <div className={s.wrapper}>
       <button>Add to Cart</button>
      <Link to={link}>
        <div className={s.image_container}>
          <img
            className={s.image}
            src={`http://localhost:3333${image}`}
            alt={title}
          />
        </div>
        <div className={s.info_block} >
          <div className={s.price_block}>
            <span className={s.new_price}>{discont_price||price} $</span>
            <span className={s.old_price}>{discont_price?`${price} $`:''}</span>
            <span className={s.discount}>{discont_price?`${-Math.floor(100 - discont_price*100/price)} %`:''}</span>
          </div>
          <p className={s.title_product}>{title}</p>
        </div>
      </Link>
    </div>
  );
}
