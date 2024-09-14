/**
 **
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ShoppingCartContent from "./ShoppingCartContent";

function ShoppingCartPage() {
  return (
    <div className="shoppingCartBody">
      <Header />
      <ShoppingCartContent />
      <Footer />
      <style jsx>{`
        .shoppingCartBody {
          background-color: #cfe9c6;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ShoppingCartPage;
