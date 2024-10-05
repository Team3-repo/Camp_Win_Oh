// CartDisplay.js
import React, { useContext } from 'react'
import { CartContext } from '../../context/book/CartContext.js'
import Link from 'next/link.js'

const CartDisplay = () => {
  const { cart, total, dispatch } = useContext(CartContext)

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  const handleIncreaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item })
  }

  const handleDecreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item })
  }

  return (
    <div>
      <h2>購物車</h2>
      {cart.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => handleIncreaseQuantity(item)}>增加</button>
              <button onClick={() => handleDecreaseQuantity(item)}>減少</button>
              <button onClick={() => handleRemoveFromCart(item)}>移除</button>
            </li>
          ))}
        </ul>
      )}
      <h3>總金額: ${total}</h3>
      {cart.length > 0 && ( // 當購物車不為空時顯示按鈕
        <Link href="/book/checkout">
          <button>前往付款</button>
        </Link>
      )}
    </div>
  )
}

export default CartDisplay
