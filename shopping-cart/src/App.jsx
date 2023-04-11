import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './Components/ProductList'
import CartContainer from './Components/CartContainer'
import './App.css'

function App() {

  const products = [
    {id:1, name: 'Product 1', price: 10},
    {id:1, name: 'Product 1', price: 20},
    {id:1, name: 'Product 1', price: 30},

  ];

  

  return (
    <>
    <ProductList />
    <CartContainer/>
    </>
      
  )
}

export default App
