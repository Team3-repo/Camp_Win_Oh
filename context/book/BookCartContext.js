import React, { createContext, useReducer, useEffect } from 'react'

// 初始化購物車狀態
const initialState = {
  bookCart: [],
  BookTotal: 0,
}

// 定義 reducer 函數
const BookCartReducer = (state, action) => {
  let newBookCart
  let BookExistingItem
  let BookTotal

  switch (action.type) {
    case 'ADD_TO_CART':
      BookExistingItem = state.bookCart.find(
        (item) => item.id === action.payload.id
      )
      if (BookExistingItem) {
        newBookCart = state.bookCart.map((item) =>
          item.id === BookExistingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newBookCart = [...state.bookCart, { ...action.payload, quantity: 1 }]
      }
      BookTotal = newBookCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookTotal }

    case 'REMOVE_FROM_CART':
      newBookCart = state.bookCart.filter(
        (item) => item.id !== action.payload.id
      )
      BookTotal = newBookCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookTotal }

    case 'CLEAR_CART':
      localStorage.removeItem('bookCart')
      return { ...state, bookCart: [], BookTotal: 0 }

    case 'INCREASE_QUANTITY':
      newBookCart = state.bookCart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      BookTotal = newBookCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookTotal }

    case 'DECREASE_QUANTITY':
      newBookCart = state.bookCart
        .map((item) => {
          if (item.id === action.payload.id) {
            const newQuantity = item.quantity - 1
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter((item) => item !== null)
      BookTotal = newBookCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookTotal }

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

// 創建 Context
export const BookCartContext = createContext()

// 定義 CartProvider 組件
export const BookCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookCartReducer, initialState)

  useEffect(() => {
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []
    storedBookCart.forEach((item) => {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    })
  }, [])

  return (
    <BookCartContext.Provider
      value={{ bookCart: state.bookCart, BookTotal: state.BookTotal, dispatch }}
    >
      {children}
    </BookCartContext.Provider>
  )
}
