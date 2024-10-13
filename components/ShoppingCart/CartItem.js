import React from "react";

function CartItem({ item, cartItems, setCartItems ,removeItem }) {
  // 確保 price 是有效的數字
  const price = parseFloat(item.price) || 0; 
  const quantity = item.quantity || 1; // 確保 quantity 有預設值

  const increaseQuantity = () => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.product_id === item.product_id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    // 只有在數量變化時才更新狀態
    if (updatedItems !== cartItems) {
      setCartItems(updatedItems);
    }
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.product_id === item.product_id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      // 只有在數量變化時才更新狀態
      if (updatedItems !== cartItems) {
        setCartItems(updatedItems);
      }
    }
  };

  // const removeItem = () => {
  //   const updatedItems = cartItems.filter(cartItem => cartItem.product_id !== item.product_id);
  //   setCartItems(updatedItems); // 更新狀態
  // };

  // 計算此商品的總價
  const totalPrice = price * quantity;

  return (
    <div className="cartItem">
      <div className="itemDetails">
      <button className="removeButton" onClick={() => removeItem(item.product_id)} aria-label="Remove item">x</button>
      <img
          loading="lazy"
          src={`/uploads/${item.product_pic}`} // 使用 item.product_pic 作為圖片來源
          alt={item.name} // 使用商品名稱作為 alt
          className="itemImage"
        />
        <div className="itemName">{item.name}</div>
      </div>
      <div className="itemPrice">NT${price}</div> {/* 顯示總價 */}
      <div className="quantityControl">
        <button className="quantityButton" onClick={decreaseQuantity} aria-label="Decrease quantity">－</button>
        <div className="quantity">{quantity}</div>
        <button className="quantityButton" onClick={increaseQuantity} aria-label="Increase quantity">＋</button>
      </div>
      <style jsx>{`
        .cartItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 25px;
          width: 100%;
          max-width: 759px;
        }
        .itemDetails {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .removeButton {
          background-color: rgba(217, 217, 217, 0.95);
          border-radius: 50%;
          width: 28px;
          height: 28px;
          border: none;
          cursor: pointer;
        }
        .itemImage {
          aspect-ratio: 0.94;
          object-fit: contain;
          width: 131px;
        }
        .itemName {
          color: var(--black, #000);
          font: 400 24px Inter, sans-serif;
        }
        .itemPrice {
          color: var(--black, #000);
          font: 400 24px Inter, sans-serif;
        }
        .quantityControl {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .quantityButton {
          font-size: 28px;
          font-weight: 700;
          width: 39px;
          height: 39px;
          cursor: pointer;
          border: 1px solid #626262;
          background-color: #fc9a84;
        }
        .quantity {
          font-size: 24px;
          font-weight: 400;
          padding: 5px 27px;
        }
        @media (max-width: 991px) {
          .cartItem {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .quantityControl {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
}

export default CartItem;
