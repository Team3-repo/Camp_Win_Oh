// components/user/Profile.jsx
import React, { useState, useEffect } from 'react'
import FormField from '@/components/form/FormField'
import Button from '@/components/book/button'
import Image from 'next/image'
import styles from '@/styles/user/profile.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Profile = () => {
  // 定義 state 來控制表單值
  const [avatar, setAvatar] = useState(null) // 儲存上傳的 avatar 檔案
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  // 填入localStorage內的資料
  useEffect(() => {
    const storedUser = localStorage.getItem('user') || '{}'
    const user = JSON.parse(storedUser)

    setAvatar(null) // demo專用
    // setAvatar(user.avatar || null) // 預設 avatar   
    setName(user.user_name || '') // 取得使用者名稱
    setEmail(user.email || '') // 取得電子郵件
    setAddress(user.user_address || '') // 取得地址
  }, [])

  // 新增錯誤訊息的 state
  const [errors, setErrors] = useState({
    avatar: '',
    name: '',
    email: '',
    address: '',
  })

  // 處理圖片上傳邏輯
  const handleImageChange = (event) => {
    const file = event.target.files[0] // 獲取選擇的檔案
    if (file) {
      // 檢查檔案大小
      if (file.size > 3 * 1024 * 1024) {
        // 3MB = 3 * 1024 * 1024 bytes
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: '檔案大小必須小於 3MB',
        }))
        setAvatar(null) // 清空已選擇的圖片
        return
      }

      // 檢查檔案類型
      const validTypes = ['image/png', 'image/jpeg', 'image/gif']
      if (!validTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: '僅支援 PNG、JPEG 和 GIF 格式',
        }))
        setAvatar(null) // 清空已選擇的圖片
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result) // 將選擇的圖片設定到狀態
        setErrors((prevErrors) => ({ ...prevErrors, avatar: '' })) // 清除錯誤信息
      }
      reader.readAsDataURL(file) // 讀取檔案作為 Data URL
    }
  }

  // 表單驗證的處理邏輯
  const validateForm = () => {
    let formIsValid = true
    const newErrors = { avatar: '', name: '', email: '', address: '' }

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
  const handleSaveChanges = async (event) => {
    event.preventDefault() // 防止默認提交行為
    if (validateForm()) {
      toast.success('表單驗證成功，可以提交！')

      // 準備要傳送的資料
      const formData = new FormData()
      formData.append('avatar', avatar) // 將上傳的圖片加入 FormData
      formData.append('user_name', name)
      formData.append('email', email)
      formData.append('user_address', address)

      // 發送 POST 請求到後端
      try {
        const response = await fetch('http://localhost:3005/api/userProfile', {
          method: 'PUT', // 假設是更新用戶資料
          body: formData,
        })

        if (response.ok) {
          const data = await response.json()
          toast.success('資料更新成功！')
          localStorage.setItem('user', JSON.stringify(data)) // 更新 localStorage 的資料
        } else {
          throw new Error('資料更新失敗！')
        }
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      toast.error('表單有錯誤，請檢查！')
    }
  }

  // 取消按鈕的處理邏輯
  const handleCancel = () => {
    const storedUser = localStorage.getItem('user') || '{}'
    const user = JSON.parse(storedUser)

    setAvatar(user.avatar || null) // 預設 avatar
    setName(user.user_name || '') // 重置姓名輸入框
    setEmail(user.email || '') // 重置 Email 輸入框
    setAddress(user.user_address || '') // 重置地址輸入框
    setErrors({ avatar: '', name: '', email: '', address: '' }) // 清空錯誤訊息
  }

  return (
    <div className={styles.container}>
      <form className="profile">
        <section className={styles.outsideAvatar}>
          <div className={styles.avatarWrapper}>
            <input
              type="file"
              accept="image/png, image/jpeg, image/gif" // 限制檔案類型
              onChange={handleImageChange}
              style={{ display: 'none' }} // 隱藏 input
              id="fileInput" // 為 input 提供一個 id
            />
            <Image
              onClick={() => document.getElementById('fileInput').click()} // 點擊圖片觸發檔案選擇
              // src={avatar || '/pics/avatar-1.png'} // 使用預設圖片或上傳的圖片
              src={avatar ? avatar : '/pics/avatar-1.png'} // 先使用預設圖片，後來上傳再改
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

        <hr width={470} />

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
            // justifyContent: 'flex-end',
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
