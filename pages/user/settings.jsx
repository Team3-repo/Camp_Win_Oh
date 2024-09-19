import React, { useState } from 'react'
import FormField from '@/components/form/FormField'
import Button from '@/components/book/button'
import Navbar from '@/components/event/navbar'
import Footer1 from '@/components/event/footer1'
import styles from '@/styles/user/settings.module.css'
import customBody from '@/styles/user/customBody.module.css'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from '@/components/user/Profile'
import Security from '@/components/user/Security' // 假設已創建
import Billing from '@/components/user/Billing' // 假設已創建

export default function Settings() {
  const [activeSection, setActiveSection] = useState('Profile')

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile':
        return <Profile />
      case 'Security':
        return <Security />
      case 'Billing':
        return <Billing />
      default:
        return null
    }
  }

  return (
    <div className={customBody.noGlobal}>
      <Navbar />
      <div className={styles.container}>
        <h1 className="nav">設定</h1>

        <div className={styles.buttonGroup}>
          <Button
            label="個人資料" // Profile
            onClick={() => {
              toast.info('顯示個人資料')
              setActiveSection('Profile')
            }}
          />
          <Button
            label="安全性" // Security
            onClick={() => {
              toast.info('顯示安全性設定')
              setActiveSection('Security')
            }}
            type="btn-reg"
          />
          <Button
            label="付款方式" // Billing
            onClick={() => {
              toast.info('顯示付款方式')
              setActiveSection('Billing')
            }}
            type="btn-reg"
          />
        </div>

        {/* 根據選擇顯示對應的內容 */}
        {renderSection()}
      </div>
      <Footer1 />
      <ToastContainer /> {/* 設定 ToastContainer */}
    </div>
  )
}
