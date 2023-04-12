import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './Components/ProductList'
import BasketContainer from './Components/BasketContainer'
import './App.css'

function App() {

  const products = [
    {id:1, name: 'Product 1', price: 10},
    {id:2, name: 'Product 1', price: 20},
    {id:3, name: 'Product 1', price: 30},

  ];

  

  return (
    <>
    <ProductList products={products}/>
    <BasketContainer/>
    </>
      
  )
}

export default App
