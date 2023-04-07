import React from 'react'
import { useDispatch } from 'react-redux'
import { basketDecrementAction, basketDeleteItemAction, basketIncrementAction } from '../../store/reducer/basketReducer'

export default function BasketItem({id,images,price,newprice,count,title}) {
    const dispatch = useDispatch()
  return (
    <div>

        <div><img src={images} alt={title} /></div>
        <div>
            <p>{title}</p>
            <div>
                <span>{newprice}</span>
                <span>{price}</span>
            </div>
            <div>
                <button onClick={()=>dispatch(basketDecrementAction(id))}>-</button>
                <div>{count}</div>
                <button onClick={()=>dispatch(basketIncrementAction(id))}>+</button>
            </div>
        </div>
        <button onClick={()=>dispatch(basketDeleteItemAction(id))}>x</button>
        <img src="/images/long-line.png" alt="line" />
    </div>
  )
}
