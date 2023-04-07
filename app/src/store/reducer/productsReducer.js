const defaultState = [
  {
    id: 1,
    title: "One",
    images: "/images/1.png",
    price: 120,
    newprice: 100,
    category: "One",
    description:"ghjdlhkshg;ldfkjh kfdgjlsg'l jkfjdskjlk jksfdjlkgjkfjd jkfjljkgksd' jfkljgfjk jfkjglj  gjfkdjksgj jfkjljskj gjkjslkjklj  kfjksjlk  jkfjlskjl"
  },
  { id: 2, title: "Two", images: "/images/1.png", price: 150, category: "One" },
  {
    id: 3,
    title: "three",
    images: "/images/1.png",
    price: 110,
    newprice: 100,
    category: "Two",
    description:"ghjdlhkshg;ldfkjh kfdgjlsg'l jkfjdskjlk jksfdjlkgjkfjd jkfjljkgksd' jfkljgfjk jfkjglj  gjfkdjksgj jfkjljskj gjkjslkjklj  kfjksjlk  jkfjlskjl"
  },
  {
    id: 4,
    title: "four",
    images: "/images/1.png",
    price: 190,
    newprice: 160,
    category: "Two",
    description:"ghjdlhkshg;ldfkjh kfdgjlsg'l jkfjdskjlk jksfdjlkgjkfjd jkfjljkgksd' jfkljgfjk jfkjglj  gjfkdjksgj jfkjljskj gjkjslkjklj  kfjksjlk  jkfjlskjl"
  },
  {
    id: 5,
    title: "four",
    images: "/images/1.png",
    price: 130,
    category: "three",
    description:"ghjdlhkshg;ldfkjh kfdgjlsg'l jkfjdskjlk jksfdjlkgjkfjd jkfjljkgksd' jfkljgfjk jfkjglj  gjfkdjksgj jfkjljskj gjkjslkjklj  kfjksjlk  jkfjlskjl"
  },
  {
    id: 6,
    title: "four",
    images: "/images/1.png",
    price: 160,
    newprice: 100,
    category: "three",
    description:"ghjdlhkshg;ldfkjh kfdgjlsg'l jkfjdskjlk jksfdjlkgjkfjd jkfjljkgksd' jfkljgfjk jfkjglj  gjfkdjksgj jfkjljskj gjkjslkjklj  kfjksjlk  jkfjlskjl"
  },
];
const PRODUCTS_LOAD = "PRODUCTS_LOAD";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsReducer = (state = defaultState, action) => {
  if (action.type === PRODUCTS_LOAD) {
    return action.payload;
  } else {
    return state;
  }
};
