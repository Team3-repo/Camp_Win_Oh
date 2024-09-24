import React from "react";
// import Header from "@/components/Header";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import OrderSummary from "@/components/ProductDetails/OrderSummary";
import Description from "@/components/ProductDetails/Description";
// import Footer from "@/components/Footer";
import Footer from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';

function ProductDetails() {
  return (
    <>
    <Navbar />
      <div className="product-details-body">
        {/* <Header /> */}
        <main className="product-content">
          <div className="product-layout">
            <ProductInfo />
            <OrderSummary />
            
          </div>
          <Description />
        </main>
      </div>
       <Footer />
      <style jsx>{`
        .product-details-body {
          background-color: #cfe9c6;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          margin-bottom:50px;
        }
        .product-content {
          align-self: center;
          margin-top: 57px;
          width: 100%;
          max-width: 1200px;
        }
        .product-layout {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .product-content {
            max-width: 100%;
            margin-top: 40px;
          }
          .product-layout {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
      `}</style>
    </>
  );
}

export default ProductDetails;
