import { categoriesLoadAction } from "../reducer/categoriesReducer";

export const asyncLoadCategoriesAction = async (dispatch) =>{
const response = await fetch('link');
const data = await response.json()
console.log(data)

dispatch(categoriesLoadAction(data))
}