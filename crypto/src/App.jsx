import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const ProductList=lazy(()=> import ("./components/ProductList"));
const Home=lazy(()=> import ("./components/Home"));
const ProductDetails=lazy(()=> import ("./components/ProductDetails"));
const Mynav=lazy(()=> import ("./components/Mynav"));
const Footer=lazy(()=> import ("./components/Footer"));
const App = () => {
  return (
    <>
    <Suspense fallback={<h4>Loading...</h4>}>
      <Router>
      <Mynav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<ProductList/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
      </Suspense>
    </>
  )
}

export default App
