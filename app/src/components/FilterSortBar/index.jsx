import React from "react";
import s from "./style.module.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function FilterSortBar() {
  return (
    <form className={s.filter_bar}>
      <div className={s.sort}>
        <p>Price</p>
        <input
          className={s.input}
          type="number"
          name="priceFrom"
          placeholder="from"
        />
        <input
          className={s.input}
          type="number"
          name="priceTo"
          placeholder="to"
        />
      </div>
      <div className={s.sort}>
        <p>Discounted items</p>
        <input className={s.input} type="checkbox" name="sortByPrice" />
      </div>
      <div className={s.sort}>
        <p>Sorted</p>
        <select>
          <option className={s.input} value="discount">
            discount
          </option>
          <option className={s.input} value="title">
            title
          </option>
          <option className={s.input} value="price">
            price
          </option>
        </select>
      </div>
      <div>
        <form className={s.search_container}>
          <input className={s.input} value="search" type="text" />
          <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
    </form>
  );
}
