// ProductList.js
import React, { useContext } from 'react'
import { CartContext } from '../../context/book/CartContext.js'

const ProductList = () => {
  const { dispatch } = useContext(CartContext)

  // 模擬商品數據
  const products = [
    { id: 1, name: '商品 1', price: 100 },
    { id: 2, name: '商品 2', price: 200 },
    { id: 3, name: '商品 3', price: 300 },
  ]

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <div>
      <h1>商品列表</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>加入購物車</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
