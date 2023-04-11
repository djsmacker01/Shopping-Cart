import React from "react";
import Product from './Product'

export default function ProductList({ products }) {
	return(
        <div>
            {products.map((product)=>(
            <product product={product} key={product.id}/>
            ))}
        </div>
    )
}
