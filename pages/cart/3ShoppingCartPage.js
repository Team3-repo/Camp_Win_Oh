/**
 **
 */
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoppingCartContent from "@/components/ShoppingCart/ShoppingCartContent";

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
          align-items: center;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ShoppingCartPage;
