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
import { useState, useEffect } from 'react' // 修改：添加 useEffect import

export default function CampingStore() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('所有商品');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // 新增：添加 searchTerm state
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

  useEffect(() => { // 新增：添加 useEffect 來處理篩選
    filterProducts();
  }, [activeCategory, searchTerm, products]);

  const filterProducts = () => { // 新增：添加 filterProducts 函數
    let filtered = products;

    // Filter by category
    if (activeCategory !== '所有商品') {
      filtered = filtered.filter(product => {
        switch (activeCategory) {
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
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (term) => { // 新增：添加 handleSearch 函數
    setSearchTerm(term);
  };

  // const CampingStore = () => {
  return (
    <div className="camping-store-container">
      {/* <Header /> */}
      {/* <Navbar2 /> */}
      {/* <HeroSection />
      <HeroContent /> */}
      {/* <ImageComponent />
      <UncontrolledExample /> */}
      {/* <HotTopics /> */}
      <Navbar />
      <div className="content-wrapper">
      <ProductCategories
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        // setCurrentPage={setCurrentPage} // 傳遞 setCurrentPage
      />
      <SearchBar onSearch={handleSearch} /> {/* 修改：添加 onSearch prop */}
      {/* <ProductFilter2 /> */}
      <main className="camping-store">
        <ProductGrid
          products={filteredProducts}
          currentPage={currentPage} // 修改 4: 傳遞 currentPage 給 ProductGrid
          setCurrentPage={setCurrentPage} // 修改 5: 傳遞 setCurrentPage 給 ProductGrid
          itemsPerPage={itemsPerPage} // 修改 6: 傳遞 itemsPerPage 給 ProductGrid
        />{' '}
      </main>
      </div>
      <div className="store-pagi">
        {/* <Pagi totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} /> */}
        {/* <Pagination /> */}
      </div>
      <Footer1 />
      {/* <Footer2 /> */}
      <style jsx>{`
        .camping-store-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .camping-store {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items: center;
          overflow: hidden;
          margin-bottom: 50px;
        }
        .store-pagi {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}
