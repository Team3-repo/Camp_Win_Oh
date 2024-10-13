import React, { createContext, useReducer, useEffect } from 'react'

// 初始化購物車狀態
const initialState = {
  bookCart: [],
  BookTotal: 0,
  BookAdult: 0,
  BookChild: 0,
  BookDate: '',
}

// 定義 reducer 函數
const BookCartReducer = (state, action) => {
  let newBookCart
  let BookExistingItem
  let BookTotal
  let BookAdult
  let BookChild
  let BookDate = state.BookDate; // 確保 BookDate 被正確初始化

  switch (action.type) {
    case 'ADD_TO_CART':
      BookExistingItem = state.bookCart.find(
        (item) => item.id === action.payload.id
      )
      if (BookExistingItem) {
        newBookCart = state.bookCart.map((item) =>
          item.id === BookExistingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                adult: item.adult + 1,
                child: item.child + 1,
                totalPrice: item.price,
                username: '',
                bookEmail: '',
                phone: '',
                InOutDate:BookDate
              }
            : item
        )
      } else {
        newBookCart = [
          ...state.bookCart,
          {
            ...action.payload,
            quantity: 1,
            adult: 1,
            child: 0,
            totalPrice: 0,
            username: '',
            bookEmail: '',
            phone: '',
            InOutDate:BookDate
          },
        ]
      }
      BookTotal = newBookCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      // 儲存購物車和日期到 localStorage
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))

      return { ...state, bookCart: newBookCart, BookTotal, BookDate }

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
      return { ...state, bookCart: [], BookTotal: 0,BookDate: state.BookDate}

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
            return newQuantity >= 0 ? { ...item, quantity: newQuantity } : null
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

    case 'INCREASE_ADULT':
      newBookCart = state.bookCart.map((item) =>
        item.id === action.payload.id
          ? { ...item, adult: (item.adult || 0) + 1 } // 確保 adult 初始值為 0
          : item
      )
      BookAdult = newBookCart.reduce((sum, item) => sum + item.adult, 0)
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookAdult }

    case 'DECREASE_ADULT':
      newBookCart = state.bookCart
        .map((item) => {
          if (item.id === action.payload.id) {
            const newAdult = (item.adult || 0) - 1
            return newAdult > 0 ? { ...item, adult: newAdult } : null
          }
          return item
        })
        .filter((item) => item !== null)
      BookAdult = newBookCart.reduce((sum, item) => sum + item.adult, 0)
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookAdult }

    case 'INCREASE_CHILD':
      newBookCart = state.bookCart.map((item) =>
        item.id === action.payload.id
          ? { ...item, child: (item.child || 0) + 1 }
          : item
      )
      BookChild = newBookCart.reduce((sum, item) => sum + item.child, 0)
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookChild }

    case 'DECREASE_CHILD':
      newBookCart = state.bookCart
        .map((item) => {
          if (item.id === action.payload.id) {
            const newChild = (item.child || 0) - 1
            return newChild > 0 ? { ...item, child: newChild } : null
          }
          return item
        })
        .filter((item) => item !== null)
      BookChild = newBookCart.reduce((sum, item) => sum + item.child, 0)
      localStorage.setItem('bookCart', JSON.stringify(newBookCart))
      return { ...state, bookCart: newBookCart, BookChild }

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
  const [state, dispatch] = useReducer(BookCartReducer, {
    ...initialState,
    // 檢查 localStorage 中是否存在日期
    BookDate: localStorage.getItem('BookDate') || '',
  })

  useEffect(() => {
    const storedBookCart = JSON.parse(localStorage.getItem('bookCart')) || []
    storedBookCart.forEach((item) => {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    })
  }, [])

  return (
    <BookCartContext.Provider
      value={{ bookCart: state.bookCart, BookTotal: state.BookTotal,  BookDate: state.BookDate,dispatch }}
    >
      {children}
    </BookCartContext.Provider>
  )
}
