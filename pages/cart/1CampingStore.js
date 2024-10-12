import React from 'react'
// import Header from '../../components/Header'
import SearchBar from '@/components/CampingStore/SearchBar'
import ProductFilter2 from '@/components/CampingStore/ProductFilter2'
import ProductCategories from '@/components/CampingStore/ProductCategories'
import ProductGrid from '@/components/CampingStore/ProductGrid'
// import Pagi from '@/components/CampingStore/pagi'
import Footer1 from '@/components/event/footer1'
import Navbar from '@/components/event/navbar'
// import Pagination from '@/components/CampingStore/Pagination'
// import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/CampingStore/Navbar2'
// import HotTopics from "@/components/CampingStore/HotTopics";
// import HeroSection from "@/components/CampingStore/Invi";
// import HeroContent from "@/components/CampingStore/PD";
// import ImageComponent from "@/components/CampingStore/BigImage";
// import UncontrolledExample from "@/components/CampingStore/Carousels";
import { useState } from 'react';
import { useEffect } from 'react';


export default function CampingStore() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('所有商品');
  const [currentPage, setCurrentPage] = useState(1);  // 修改 2: 將 currentPage 狀態移到這裡
  const itemsPerPage = 10; // 每頁顯示的產品數量

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // 計算總頁數
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // 確保基於 filteredProducts

  // 計算當前頁面應顯示的產品
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // 根據所選類別篩選產品
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);  // 修改 3: 在這裡重置頁碼為 1

    if (category === '所有商品') {
      setFilteredProducts(products); // 顯示所有商品
    } else {
      const filtered = products.filter(product => {
        switch (category) {
          case '優惠商品':
            return product.product_type.includes('商品A:優惠商品');
          case '推薦商品':
            return product.product_type.includes('商品C:推薦商品');
          case '熱銷商品':
            return product.product_type.includes('商品B:熱銷商品');
          case '出清商品':
            return product.product_type.includes('商品D:出清商品');
          default:
            return true;
        }
      });
      setFilteredProducts(filtered); // 更新篩選後的商品
    }
  };

  // const CampingStore = () => {
  return (
    <div >
      {/* <Header /> */}
      {/* <Navbar2 /> */}
      
        {/* <HeroSection />
      <HeroContent /> */}
        {/* <ImageComponent />
      <UncontrolledExample /> */}
        {/* <HotTopics /> */}
        <Navbar />
        <ProductCategories 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
        // setCurrentPage={setCurrentPage} // 傳遞 setCurrentPage
      />        {/* <SearchBar /> */}
        {/* <ProductFilter2 /> */}
        <main className="camping-store">
        <ProductGrid 
          products={filteredProducts}
          currentPage={currentPage}  // 修改 4: 傳遞 currentPage 給 ProductGrid
          setCurrentPage={setCurrentPage}  // 修改 5: 傳遞 setCurrentPage 給 ProductGrid
          itemsPerPage={itemsPerPage}  // 修改 6: 傳遞 itemsPerPage 給 ProductGrid
        />        </main>
        <div className="store-pagi">
        {/* <Pagi totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} /> */}
        {/* <Pagination /> */}
        </div>
        <Footer1 />
        {/* <Footer2 /> */}
      
      <style jsx>{`
        .camping-store {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          margin-bottom: 50px;
        }
        .store-pagi{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}
