import React from 'react'
import { ProductCard } from './ProductCard'
import powertools from './ProductList.json'

export const Products = ({handleCart}) => {

    const data = powertools.powertools

    const handleSubmit = (name, description, image, quantity) => {
        console.log(name, quantity)
        handleCart({"name": name, "description": description, "image": image, "quantity": quantity})
    }


  return (
    <div className="cards">
        {data.map(item => (
        <ProductCard key={item.name} name={item.name} description={item.description} handleSubmit={handleSubmit} image={item.image}/>
      ))}
    </div>
  )
}
