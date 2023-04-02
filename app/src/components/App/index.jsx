import { useEffect } from "react";
import AllProductsPage from "../../pages/AllProductsPage";
import CategoriesPage from "../../pages/CategoriesPage";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";
import SaleProductPage from "../../pages/SaleProductsPage";
import Footer from "../Footer";
import Header from "../Header";
import {Route, Routes} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProducltsAction } from "../../store/asyncAction/products";

function App() {
  const dispatch = useDispatch()
useEffect(()=>{
dispatch(asyncLoadCategoriesAction);
dispatch(asyncLoadProducltsAction);

},[])

  return (
    <div>
    <Header/>
<Routes>
<Route element = {<CategoriesPage/>} path="/categories/all"/>
<Route element = {<AllProductsPage/>} path="/products/all"/>
<Route element = {<SaleProductPage/>} path="/products/sale"/>
<Route element = {<MainPage/>} path="/"/>
<Route element = {<NotFoundPage/>} path="/*"/>
</Routes>

    <Footer/>
    </div>
  );
}

export default App;
