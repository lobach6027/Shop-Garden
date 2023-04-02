import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";
export default function Header() {
  const isActive =({isActive}) => (isActive?s.active:'')
  return (
    <header className={s.header}>
      <div className={s.catalog_container}>
        <div><img src="/images/logo.png" alt="logo" /></div>
        <button><Link>Catalog</Link></button>
      </div>
      <nav className={s.nav}>
        <NavLink to = '/' className={isActive}>Main Page</NavLink>
        <NavLink to = '/products/all' className={isActive}>All products</NavLink>
        <NavLink to = '/products/sale' className={isActive}>All sales</NavLink>
      </nav>
      <div className={s.basket}>
        <button >
          <img src="/images/basket-icon.png" alt="basket" />
        </button>
      </div>
    </header>
  );
}
