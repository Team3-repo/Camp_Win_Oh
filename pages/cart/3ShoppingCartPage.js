import React from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import ShoppingCartContent from "@/components/ShoppingCart/ShoppingCartContent";
import Footer from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'

function ShoppingCartPage() {
  return (
    <>
      <Navbar />
      <div className="shoppingCartBody">
        {/* <Header /> */}
        <ShoppingCartContent />
        <style jsx>{`
          .shoppingCartBody {
            background-color: #cfe9c6;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            position: relative; /* 父層容器要設為 relative */
            min-height: 89vh; /* 讓內容至少佔滿整個視窗高度 */
          }
          .put-end {
            position: absolute;
            bottom: 0; /* 固定在底部 */
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
