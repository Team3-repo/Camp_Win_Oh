import React, { createContext, useReducer, useEffect } from 'react'

// 初始化購物車狀態
const initialState = {
  cart: [],
  total: 0,
}

// 定義 reducer 函數
const cartReducer = (state, action) => {
  let newCart
  let existingItem
  let total

  switch (action.type) {
    case 'ADD_TO_CART':
      existingItem = state.cart.find((item) => item.id === action.payload.id)
      if (existingItem) {
        newCart = state.cart.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: 1 }]
      }
      total = newCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return { ...state, cart: newCart, total }

    case 'REMOVE_FROM_CART':
      newCart = state.cart.filter((item) => item.id !== action.payload.id)
      total = newCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return { ...state, cart: newCart, total }

    case 'CLEAR_CART':
      localStorage.removeItem('cart')
      return { ...state, cart: [], total: 0 }

    case 'INCREASE_QUANTITY':
      newCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      total = newCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return { ...state, cart: newCart, total }

    case 'DECREASE_QUANTITY':
      newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            const newQuantity = item.quantity - 1
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter((item) => item !== null)
      total = newCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return { ...state, cart: newCart, total }

    default:
      return state
  }
}

// 創建 Context
export const CartContext = createContext()

// 定義 CartProvider 組件
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    storedCart.forEach((item) => {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    })
  }, [])

  return (
    <CartContext.Provider
      value={{ cart: state.cart, total: state.total, dispatch }}
    >
      {children}
    </CartContext.Provider>
  )
}