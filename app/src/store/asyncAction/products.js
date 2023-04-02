import { productsLoadAction } from "../reducer/productsReducer"

export const asyncLoadProducltsAction = async (dipatch) =>{
    const response = await fetch('link')
    const data = await response.json()
    dipatch(productsLoadAction(data))
}