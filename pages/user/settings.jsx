import React, { useState } from 'react'
import FormField from '@/components/form/FormField'
import Button from '@/components/book/button'
import Navbar from '@/components/event/navbar'
import Footer1 from '@/components/event/footer1'
import styles from '@/styles/user/profile.module.css'
import customBody from '@/styles/user/customBody.module.css'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { render } from 'react-dom'

export default function Profile() {
  // 定義 state 來控制表單值
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  // 新增錯誤訊息的 state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
  })

  // 表單驗證的處理邏輯
  const validateForm = () => {
    let formIsValid = true
    const newErrors = { name: '', email: '', address: '' }

    // 驗證姓名
    if (!name.trim()) {
      newErrors.name = '姓名不能為空'
      formIsValid = false
    }

    // 驗證 Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email 格式正則表達式
    if (!email.trim()) {
      newErrors.email = 'Email 不能為空'
      formIsValid = false
    } else if (!emailRegex.test(email)) {
      newErrors.email = '無效的 Email 格式'
      formIsValid = false
    }

    // 驗證地址
    if (!address.trim()) {
      newErrors.address = '地址不能為空'
      formIsValid = false
    }

    setErrors(newErrors)
    return formIsValid
  }

  // 儲存變更按鈕的處理邏輯
  const handleSaveChanges = () => {
    if (validateForm()) {
      toast.success('表單驗證成功，可以提交！')
      // 在此處理提交表單的邏輯，例如發送 API 請求等
    } else {
      toast.error('表單有錯誤，請檢查！')
    }
  }

  // 取消按鈕的處理邏輯
  const handleCancel = () => {
    setName('') // 重置姓名輸入框
    setEmail('') // 重置 Email 輸入框
    setAddress('') // 重置地址輸入框
    setErrors({ name: '', email: '', address: '' }) // 清空錯誤訊息
  }

  return (
    <div className={customBody.noGlobal}>
      <Navbar />
      <div className={styles.container}>
        <h1 className="nav">設定</h1>

        <div className={styles.buttonGroup}>
          <Button
            label="個人資料"
            onClick={() => toast.info('Button clicked!')}
          />
          <Button
            label="付款方式"
            onClick={() => toast.info('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="安全性"
            onClick={() => toast.info('Button clicked!')}
            type="btn-reg"
          />
        </div>
        <div className="wrapper" style={{border:'green,2px,solid'}}>
          <section className={styles.outsideAvatar}>
            <div className={styles.avatarWrapper}>
              <Image
                src="/pics/avatar-1.png"
                alt="Avatar"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h4>個人資料圖片</h4>
              <p>支援 3MB 以下的 png, jpeg, gif</p>
            </div>
          </section>

          <hr />

          <section className="basic-details">
            <h2>基本詳情</h2>
            <FormField
              label="姓名"
              id="name"
              type="text"
              placeholder="請輸入姓名"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              width="100%"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}{' '}
            {/* 顯示姓名錯誤訊息 */}
            <FormField
              label="Email"
              id="email"
              type="email"
              placeholder="請輸入email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              width="100%"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}{' '}
            {/* 顯示 Email 錯誤訊息 */}
            <FormField
              label="地址"
              id="address"
              type="text"
              placeholder="請輸入地址"
              required={true}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              width="100%"
            />
            {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}{' '}
            {/* 顯示地址錯誤訊息 */}
          </section>

          <section
            style={{
              display: 'flex',
              gap: '5px',
              justifyContent: 'flex-end',
              margin: '20px 0',
            }}
          >
            <Button label="取消" onClick={handleCancel} />
            <Button
              label="儲存變更"
              onClick={handleSaveChanges} // 呼叫儲存變更的處理邏輯
              type="btn-reg"
            />
          </section>
        </div>
      </div>
      <Footer1 />
      <ToastContainer /> {/* 設定 ToastContainer */}
    </div>
  )
}
