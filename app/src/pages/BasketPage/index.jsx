import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem'
export default function BasketPage() {
    const {basket,products}  = useSelector((state) =>state)
const data = basket.map((item)=>{
const product = products.find((elem)=>elem.id ===item.id)
return {...item, ...product}
})


    console.log(basket)
  return (
    <div>{
      data.map((item)=><BasketItem key={item.id} {...item}/>)}</div>
  )
}
