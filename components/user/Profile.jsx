// components/user/Profile.jsx
import React, { useState, useEffect } from 'react'
import FormField from '@/components/form/FormField'
import Button from '@/components/book/button'
import Image from 'next/image'
import styles from '@/styles/user/profile.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Profile = () => {
  // 定義 state 來控制表單值和錯誤訊息
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [errors, setErrors] = useState({})

  // 填入localStorage內的資料
  useEffect(() => {
    const storedUser = localStorage.getItem('user') || '{}'
    const user = JSON.parse(storedUser)

    setName(user.user_name || '') // 取得使用者名稱
    setEmail(user.email || '') // 取得電子郵件
    setAddress(user.user_address || '') // 取得地址
  }, [])

  // 處理儲存變更的邏輯
  const handleSaveChanges = (e) => {
    e.preventDefault() // 防止表單默認行為

    const newErrors = {}
    if (!name) newErrors.name = '姓名是必填的'
    if (!email) newErrors.email = 'Email是必填的'
    if (!address) newErrors.address = '地址是必填的'

    setErrors(newErrors)

    // 如果有錯誤，則不進行儲存
    if (Object.keys(newErrors).length > 0) {
      return
    }

    // 儲存變更的邏輯
    const updatedUser = {
      user_name: name,
      email,
      user_address: address,
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    toast.success('資料已成功儲存！')
  }

  // 處理取消操作
  const handleCancel = () => {
    // 在這裡可以選擇重新載入資料或進行其他操作
    setName('')
    setEmail('')
    setAddress('')
    toast.info('已取消更改。')
  }

  return (
    <div className={styles.container}>
      <form className="profile">

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
            width="80%"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <FormField
            label="Email"
            id="email"
            type="email"
            placeholder="請輸入email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="80%"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <FormField
            label="地址"
            id="address"
            type="text"
            placeholder="請輸入地址"
            required={true}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            width="80%"
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </section>

        <section
          style={{
            display: 'flex',
            gap: '5px',
            margin: '20px 0',
          }}
        >
          <Button label="取消" onClick={handleCancel} />
          <Button
            label="提交"
            onClick={handleSaveChanges} // 呼叫儲存變更的處理邏輯
            type="btn-reg"
          />
        </section>
      </form>
    </div>
  )
}

export default Profile
