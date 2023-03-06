import React from 'react'

export const CartCard = ({name, quantity, image}) => {
  return (
    <div className="cart-card">
        <div className='cart-item-image' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='cart-item-description'>
            <div className="description-text">
                <div id='desc'>Item: {name}</div>
                <div id='quant'>Quantity: {quantity}</div>
            </div>
            <button>Remove</button>
        </div>
    </div>
  )
}
