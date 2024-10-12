import React, { useEffect } from "react";
import ShoppingCartContent from "@/components/ShoppingCart/ShoppingCartContent";
import Footer from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';
import { useCart } from '../../context/CartContext'; // 更新路徑

function ShoppingCartPage() {
  const { cartItems, setCartItems } = useCart(); // 獲取 cartItems 和 setCartItems

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems)); // 更新狀態
    }
  }, [setCartItems]);

  return (
    <>
      <Navbar />
      <div className="shoppingCartBody">
        <ShoppingCartContent />
        <style jsx>{`
          .shoppingCartBody {
            background-color: #cfe9c6;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            position: relative;
            min-height: 89vh;
          }
          .put-end {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }
        `}</style>
      </div>
      <div className="put-end">
        <Footer />
      </div>
    </>
  );
}

export default ShoppingCartPage;
