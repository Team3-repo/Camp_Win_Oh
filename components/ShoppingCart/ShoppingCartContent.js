import React from 'react'
import CartItem from './CartItem'
import CouponSection from './CouponSection'
import TotalSection from './TotalSection'
import OrderSummary from '../ProductDetails/OrderSummary' // 引入 OrderSummary
import { useCart } from '@/context/CartContext' // 引入 useCart
import { CartContext } from '@/context/CartContext' // 確保引入正確的上下文
import { useContext } from 'react' // 導入 React 和 useContext

function ShoppingCartContent() {
  const { cartItems, setCartItems } = useCart() // 使用 cartItems 和 setCartItems

  // 刪除單一商品
  const removeItem = (productId) => {
    setCartItems((prevItems) => 
        prevItems.filter((item) => item.product_id !== productId)
    );
};
  

  

  // 計算總金額
  const totalAmount = (cartItems || []).reduce((total, item) => {
    const price = parseFloat(item.price) || 0 // 確保 price 是有效的數字
    const quantity = parseInt(item.quantity, 10) || 0 // 確保 quantity 是有效的整數
    return total + price * quantity // 計算總金額
  }, 0)

  const { clearCart } = useContext(CartContext) // 使用上下文中的 cartItems 和 clearCart 函數

  const handleClearCart = () => {
    clearCart() // 清空購物車
    console.log('購物車已清空!')
  }

  return (
    <main className="content">
      <div className="justuseit">
        <h1 className="pageTitle">商品</h1>
        <button className="cleanButton" onClick={handleClearCart}>
          清空購物車
        </button>{' '}
        {/* 清空購物車按鈕 */}
      </div>
      <div className="divider" />
      {cartItems.map((item) => (
        <CartItem
          key={item.id} // 確保使用唯一的 key
          item={item}
          removeItem={removeItem} // 新增：傳遞 removeItem 函數給 CartItem
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
      <div className="divider" />
      {/* <CouponSection /> */}
      {/* 傳遞 totalAmount 到 OrderSummary */}
      {/* <OrderSummary subtotal={totalAmount} /> 新增的 OrderSummary */}
      <TotalSection totalAmount={totalAmount} />
      <style jsx>{`
        .content {
          display: flex;
          margin-top: 80px;
          width: 90%;
          flex-direction: column;
          padding: 0 44px;
        }
        .pageTitle {
          align-self: start;
          margin-left: 78px;
          color: var(--black, #000);
          font: 400 24px Inter, sans-serif;
          margin-bottom: -10px;
        }
        .divider {
          margin-top: 20px;
          width: 1440px;
          max-width: 100%;
          height: 1px;
          border: 1px solid #9c9c9c;
        }
        .justuseit {
          display: flex;
          justify-content: space-between;
          margin-right: 25px;
        }
        .cleanButton {
          font: 50px;
          padding: 7px 7px;
          font: 15px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .content {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
          .pageTitle {
            margin-left: 10px;
          }
        }
      `}</style>
    </main>
  )
}

export default ShoppingCartContent
