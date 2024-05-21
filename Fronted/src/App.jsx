import './App.css'
import {  Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePages';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Addproduct' element={<AddProduct/>}/>
        <Route path='/ProductDetail/:id' element={<ProductDetails/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
        
    </>
  )
}

export default App
