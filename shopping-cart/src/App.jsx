import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductList from "./Components/ProductList";
import BasketContainer from "./Components/BasketContainer";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 1", price: 20 },
    { id: 3, name: "Product 1", price: 30 },
  ];

  // const [resourceType, setResourceType]= useState('user')

  const [Basket, setBasket] = useState([]);

  const addItems = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const clearItems = () => { 
    setBasket([])
  }

  const removeItem = (id) => { 
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id))
  }



  return (
    <>
      <BasketContainer basket={Basket} clearItems={clearItems} removeItem={removeItem} />
      <hr />
      <ProductList products={products} addToBasket={(item) => addItems(item)} />

      {/* <div>
    <Button onClick={()=> setResourceType('Posts')}>Posts</Button>
    <Button onClick={()=> setResourceType('users')}>Users</Button>
    <Button onClick={()=> setResourceType('comments')}>Comments</Button>
    <h3>{resourceType} </h3>
    </div> */}
    </>
  );
}

export default App;
