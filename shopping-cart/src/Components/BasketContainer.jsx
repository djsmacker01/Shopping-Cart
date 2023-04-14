import React from 'react'

export default function BasketContainer({basket}) {
  return (
    <div>
      <h1>Cart</h1>
      {
        basket.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price }</p>
          </div>
        ))
      }
    </div>
  )
}
