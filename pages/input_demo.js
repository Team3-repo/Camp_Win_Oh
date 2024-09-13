import React from 'react'
import Navbar from '@/components/layout/default-layout/navbar'
import Form from '@/components/form/Form'
import SearchInput from '@/components/SearchInput'

export default function h1() {
  return (
    <>
      {/* <h1>aaaa</h1> */}
      <Navbar />
      <Form />

      <SearchInput placeholder="請輸入搜尋關鍵字"/>
      <SearchInput placeholder="請輸入優惠券"/>
    </>
  )
}
