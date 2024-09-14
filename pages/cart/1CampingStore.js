import React from 'react'
import Header from '../../components/Header'
import SearchBar from '@/components/CampingStore/SearchBar'
import ProductFilter2 from '@/components/CampingStore/ProductFilter2'
import ProductCategories from '@/components/CampingStore/ProductCategories'
import ProductGrid from '@/components/CampingStore/ProductGrid'
import Pagination from '@/components/CampingStore/Pagination'
import Footer from '@/components/Footer'

export default function CampingStore() {
  const products = [
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ff305e78a06e550821860f33b50d3a267200aaf75769a641d30636451c75b500?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b149fd8633d354b058a43fbec074348fba2066a9e6137acff82859927ba5bcd9?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '1300',
      title: '露營帳篷',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9715cd3ca26d1c15be065ae6fcb9a2279cb1b57df6ef25095e80bbc44d78864d?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2fa2e399f0106b800250ac723eea9f35a618df2c09fc25d966ad8db27ff4d5ef?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '300',
      title: '睡袋',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/301b02cff15cefcc3d2a46d1f9417bf8d45ee3a842e1ff1464fa1682044446bc?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/660debd437da74423fd57c1e049f2816302fdfd331732c8bf5ee821f150e4e80?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '500',
      title: '露營床墊',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8fda22b8c6f1f419a46a6dce4cd7b73ad82611144b983a34e9753e13a0e1b239?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/09556f0152e08fb66a0a109a1414046e38cd798066a6451201fbcd86af4fa7e0?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '120',
      title: '露營燈',
      description:
        '景觀帳篷營位位於營地的觀景點，適合追求美景的露營者。這裡可以俯瞰山谷景色，早晨還能欣賞日出，適合喜愛拍照和放鬆的旅客。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4f618cf97f2da5f4d99be8aa44f8a5e2bb31c5ecfe96cf9b81e548edf86cb2b6?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/cfeb0d1806035607430591d8f6cd742d46104bd7f9de27e2309af8b7c18b960c?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '6800',
      title: '戶外炊具',
      description:
        '豪華帳篷營位為希望在大自然中保持舒適生活的露營者設計。這些營位配有更大的空間和私人設施，適合家庭或小團體享受更高端的露營體驗。',
    },
    // Repeat the product data for the second row
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/bad2eb89c68b20834df70119227b95754ff30a1235383f39c200cc94372bd88c?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b5986b986043e0113462bba339c846cb89167f9c7fdca667e00231119b749bbb?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '1300',
      title: '露營帳篷',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9e0d368e1a8f6172a7a703c1f8dd9b9571d6ac28d6f55cb76e1bff7d505dcec7?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/671f4cd08d2dc99d38b9007ca6107a69fcb98f0f43e0c6a21aad840f3569b471?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '300',
      title: '睡袋',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7194fa5f870e296336ae7d6fc9c2dbb076201da96976485fb111bce910bae21f?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ca876027a8efa79ea9f97c5007e7adba7824b395bcb64e0ae64d479a377a7351?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '500',
      title: '露營床墊',
      description:
        '標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2572fe62a5ebe3ee71ce09799a2b1951bf255b3c9c56de5032e64f0ed73829b0?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/1bcb7ed0ae3f42315e298db487212ac7ec7ec8fcd23fbc576c43699119527d75?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '120',
      title: '露營燈',
      description:
        '景觀帳篷營位位於營地的觀景點，適合追求美景的露營者。這裡可以俯瞰山谷景色，早晨還能欣賞日出，適合喜愛拍照和放鬆的旅客。',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/89cb62e6ff70e4ee32cd0a69dca1ca2b42118abcc70bc432e92812f5b456243e?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      badge:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ad5a1d2d186e86ecb4bd867673eacb06e59d3dcf833a0bfd34ffa49cc2c2ff20?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1',
      price: '6800',
      title: '戶外炊具',
      description:
        '豪華帳篷營位為希望在大自然中保持舒適生活的露營者設計。這些營位配有更大的空間和私人設施，適合家庭或小團體享受更高端的露營體驗。',
    },
  ]

  // const CampingStore = () => {
  return (
    <div className="camping-store">
      <Header />
      <main>
        <ProductCategories />
        <SearchBar />
        <ProductFilter2 />
        <ProductGrid products={products} />
        <Pagination />
      </main>
      <Footer />
      <style jsx>{`
        .camping-store {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
