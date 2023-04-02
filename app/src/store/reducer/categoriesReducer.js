const defaultState = [
  { id: 1, title: "One", images: "/images/1.png" },
  { id: 2, title: "Two", images: "/images/1.png" },
  { id: 3, title: "three", images: "/images/1.png" },
  { id: 4, title: "four", images: "/images/1.png" },
  { id: 5, title: "four", images: "/images/1.png" },
  { id: 6, title: "four", images: "/images/1.png" },
];

const CATEGORIES_LOAD = "CATEGORIES_LOAD";
export const categoriesLoadAction = (payload)=>({ type:CATEGORIES_LOAD, payload})

export const categoriesReducer = (state = defaultState, action) => {
  if (action.type === CATEGORIES_LOAD) {
    return action.payload
  } else {
    return state;
  }
};
