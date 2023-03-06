import React, {useState} from 'react'

export const ProductCard = ({name, description, image, handleSubmit}) => {

    const [quantity, setQuantity] = useState(0)

    const increment = () => {
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        if (quantity > 0)
        setQuantity(quantity - 1)
    }

    const submitPurchase = () => {
        handleSubmit(name, description, image, quantity)
    }
  return (
    <div className="card">

        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="card-description">
            <div className="card-title">{name}</div>
            <div className="card-details">{description}</div>
            <div className="card-nav">
                <button onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
                <button onClick={submitPurchase}>Add</button>
            </div>
        </div>
    </div>
  )
}
