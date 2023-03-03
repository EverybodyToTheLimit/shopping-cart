import React from 'react'
import { ProductCard } from './ProductCard'
import powertools from './ProductList.json'

export const Products = () => {

    const data = powertools.powertools

    const handleSubmit = (name, quantity) => {
        console.log(name, quantity)
    }


  return (
    <div className="cards">
        {data.map(item => (
        <ProductCard key={item.name} name={item.name} description={item.description} handleSubmit={handleSubmit} image={item.image}/>
      ))}
    </div>
  )
}
