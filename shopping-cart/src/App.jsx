import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductList from "./Components/ProductList";
import BasketContainer from "./Components/BasketContainer";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Product 1", qty: 1, price: 10 },
    { id: 2, name: "Product 1", qty: 1, price: 20 },
    { id: 3, name: "Product 1", qty: 1, price: 30 },
  ];

  // const [resourceType, setResourceType]= useState('user')

  const [Basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    // setBasket((prevBasket) => [...prevBasket, item]);
    setBasket((prevBasket) => {
      const itemIdex = prevBasket.findIndex((i) => i.id === item.id);

      if (itemIdex !== -1) {
        const newItem = [...prevBasket];
        newItem[itemIdex] = {
          ...newItem[itemIdex],
          qty: newItem[itemIdex].qty + 1,
        };
        return newItem;
      } else {
        return [...prevBasket, { ...item, qty: 1 }];
      }
    });
    // check if id already exists

    // get the existing record that matches the id
  };

  const clearItems = () => { 
    setBasket([])
  }

  const removeItem = (id) => { 
    // setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id))
    setBasket((prevBasket) =>
      prevBasket.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qty > 1) {
            acc.push({ ...item, qty: item.qty - 1 });
          }
        }
        else {
          acc.push(item)
        }
        return acc;
      }, [])
    );
  }



  return (
    <>
      <BasketContainer basket={Basket} clearItems={clearItems} removeItem={removeItem} />
      <hr />
      <ProductList products={products} addToBasket={(item) => addToBasket(item)} />

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
