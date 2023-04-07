const defaultState = [
  { id: 1, count: 7 },
  { id: 2, count: 2 },
];
const ICREMENT_BASKET = "ICREMENT_BASKET";
const DEREMENT_BASKET = "DEREMENT_BASKET";
const DELETE_BASKET_ITEM = 'DELETE_BASKET_ITEM'
export const basketDeleteItemAction = (payload)=>({type:DELETE_BASKET_ITEM,payload})
export const basketIncrementAction = (payload) => ({ type: ICREMENT_BASKET,payload,});
export const basketDecrementAction = (payload) => ({ type: DEREMENT_BASKET, payload,});

export const basketReducer = (state = defaultState, action) => {
  if (action.type === ICREMENT_BASKET) {
    const product = state.find((item) => item.id === action.payload);
    product.count++;
    return [...state];
  } else if (action.type === DEREMENT_BASKET) {
    const product = state.find((item) => item.id === action.payload);
    console.log(product)
    product.count--;
    if (product.count === 0) {
      return state.filter((item) => item !== product);
    }
    return [...state]
  }else if(action.type === DELETE_BASKET_ITEM){
   const basket =  state.filter((item)=>item.id!==action.payload)
return [...basket]
  } else {
    return state;
  }
};
