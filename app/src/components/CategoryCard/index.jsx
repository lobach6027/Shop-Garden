import React from "react";
import s from "./style.module.css";
export default function CategoryCard({ id, title, images }) {
  return (
    <div className={s.card}>
      <img src={images} alt={title} />
      <p>{title}</p>
    </div>
  );
}
