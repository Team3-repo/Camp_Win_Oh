
import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/CampingStore/SearchBar";
import ProductCategories from "@/components/ProductCategories";
import ProductFilter from "@/components/CampingStore/ProductFilter";
import ProductGrid from "@/components/CampingStore/ProductGrid";
import Pagination from "@/components/CampingStore/Pagination";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function CampingStore() {
// const CampingStore = () => {
  return (
    <>
    <div className="camping-store">
      <Header />
      <main>
        <SearchBar />
        <ProductCategories />
        <div className="content-wrapper">
          <ProductFilter />
          <div className="product-section">
            {/* <ProductGrid products={products} /> */}
            <Pagination />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
    </>
  );
// };
}



import React from 'react';

const IconCart = () => {
  return (
    <>
      <div className="icon-cart">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46543e9f7d766761ebb66c0b9008e704f5c38b7496f07fc057817df0923ffaea?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="" className="cart-image" />
        <div className="dot-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/349a739bf48ed0c11abee8c7b84b46282b2d965cf0b4fae26e6f8fc655251efb?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="" className="dot" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41588783d29f97cc1ccf8c43c149688280f203f82c34712adbf94e7646f9d27f?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="" className="dot" />
        </div>
      </div>
      <style jsx>{`
        .icon-cart {
          background-color: #a9a859;
          display: flex;
          max-width: 26px;
          flex-direction: column;
          overflow: hidden;
        }
        .cart-image {
          aspect-ratio: 1.63;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .dot-container {
          align-self: flex-start;
          display: flex;
          gap: 8px;
        }
        .dot {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 4px;
        }
      `}</style>
    </>
  );
};

export default IconCart;



import React from 'react';

const CircleImageComponent = () => {
  return (
    <>
      <div className="circle-container">
        <div className="image-wrapper">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d138a2e-c459-4f08-937c-d750431f921d?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="" className="background-image" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46543e9f7d766761ebb66c0b9008e704f5c38b7496f07fc057817df0923ffaea?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" alt="" className="foreground-image" />
        </div>
      </div>
      <style jsx>{`
        .circle-container {
          background-color: rgba(169, 168, 89, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          padding: 0 13px;
        }
        .image-wrapper {
          display: flex;
          flex-direction: column;
          background-color: rgba(169, 168, 89, 1);
          position: relative;
          aspect-ratio: 1.182;
          width: 100%;
          padding-bottom: 6px;
          overflow: hidden;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .foreground-image {
          aspect-ratio: 1.63;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CircleImageComponent;





import React from "react";

const CircleImageComponent = () => {
  return (
    <>
      <section className="circle-container">
        <div className="image-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e48c26-72dc-4e5b-94a7-b001b988cfc6?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            alt=""
            className="background-image"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46543e9f7d766761ebb66c0b9008e704f5c38b7496f07fc057817df0923ffaea?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            alt=""
            className="foreground-image"
          />
        </div>
      </section>
      <style jsx>{`
        .circle-container {
          background-color: rgba(169, 168, 89, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          padding: 0 13px;
        }
        .image-wrapper {
          display: flex;
          flex-direction: column;
          background-color: rgba(169, 168, 89, 1);
          position: relative;
          aspect-ratio: 1.182;
          width: 100%;
          padding-bottom: 6px;
          overflow: hidden;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .foreground-image {
          aspect-ratio: 1.63;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default CircleImageComponent;