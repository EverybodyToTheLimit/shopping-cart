import React from 'react'

export const Cart = ({cart}) => {
  return (
    <aside>
    <h2>Shopping Cart</h2>
    {cart.length > 0 ? (
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    ) : (
      <p>Your cart is empty.</p>
    )}
  </aside>
  )
}
