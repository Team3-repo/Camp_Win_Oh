// pages/checkout.js
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Checkout = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // 從 localStorage 中獲取購物車資料
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(storedCart)

    // 計算總金額
    const totalAmount = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    setTotal(totalAmount)
  }, [])

  return (
    <div>
      <h2>結帳頁面</h2>
      {cartItems.length === 0 ? (
        <p>購物車是空的</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>總金額: ${total}</h3>
          <Link href="/payment">
            <button>前往付款</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
