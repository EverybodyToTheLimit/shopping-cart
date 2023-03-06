import React from 'react'
import { CartCard } from './CartCard';

export const Cart = ({cart, handleDelete}) => {

  const deleteitems = (name) => {
    handleDelete(name)
  }

  const listNames = cart.map((el, index) => 
    <CartCard key={index} name={el.name} image={el.image} quantity={el.quantity} handleDelete={deleteitems}/>
  );


  return (
    <div className="cart">
    <h1>Shopping Cart</h1>
    {cart.length > 0 ? (
      <div className="cart-container-div">
        <ul className='cart-list'>
          {listNames}
        </ul>
        <button id="checkout-button">Checkout</button>
      </div>
    
    ) : (
      <p>Your cart is empty.</p>
    )}
    </div>
  )
}
