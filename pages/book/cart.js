import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import styles from '../../styles/BookCart.module.css'
import ProgressBar from '@/components/book/ProgressBar'
import { useState } from 'react'
import CartData from '@/components/book/cartdata'
import CartPay from '@/components/book/cartpay'
import Cartsuccess from '@/components/book/cartsuccess'

export default function BookCart() {

  return (
    <>
      <Navbar />

      {/* step-by-step */}
      <ProgressBar />

      {/* <CartData /> */}
      <CartPay/>
      {/* <Cartsuccess/> */}

      <Footer2 />
    </>
  )
}
