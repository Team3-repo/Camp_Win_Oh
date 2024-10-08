import React from "react";

function CartItem({ item, cartItems, setCartItems }) {
  const increaseQuantity = () => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };
  
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedItems);
    }
  };

  // 新增刪除項目的函數
  const removeItem = () => {
    const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedItems); // 更新狀態
  };

  return (
    <div className="cartItem">
      <div className="itemDetails">
      <button className="removeButton" onClick={removeItem} aria-label="Remove item">x</button>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="Camping Tent" className="itemImage" />
        <div className="itemName">{item.name}</div>
      </div>
      <div className="itemPrice">NT${item.price}</div>
      <div className="quantityControl">
        <button className="quantityButton" onClick={decreaseQuantity} aria-label="Decrease quantity">－</button>
        <div className="quantity">{item.quantity}</div>
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
