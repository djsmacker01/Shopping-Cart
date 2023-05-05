import React from 'react'

export default function BasketContainer({basket, clearItems, removeItem}) {
  return (
    <div>
      <h1>Cart</h1>
      {
        basket.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p></p>
            <button onClick={()=> removeItem(item.id)}>Remove Item</button>
          </div>
        ))
      }
      <button onClick={()=> clearItems()}>Clear All</button>
    </div>
  )
}
