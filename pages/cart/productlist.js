import React from "react";
import Footer from "@/components/Footer"

export default function ProductCategories() {
  return (
    <>
      <nav className="product-categories">
        <a href="#discounts" className="category-link category-link-active">
          優惠商品
        </a>
        <a href="#recommended" className="category-link">
          推薦商品
        </a>
        <a href="#bestsellers" className="category-link">
          熱銷商品
        </a>
        <a href="#clearance" className="category-link">
          出清商品
        </a>
      </nav>
      <Footer/>
    </>
  );
}
