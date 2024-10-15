import React, { useState } from 'react'
import FormField from '@/components/form/FormField'
import Button from '../book/button'

const Profile = () => {
  const initialData = JSON.parse(localStorage.getItem('user'))

  const [formData, setFormData] = useState({
    user_name: initialData?.user_name || '',
    email: initialData?.email || '',
    user_address: initialData?.user_address || '',
    phone: initialData?.phone || '',
    birthday: initialData?.birthday || '',
    gender: initialData?.gender || 'male', // 預設為 male
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value, // 使用 name 屬性來更新相應的狀態
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 更新 localStorage
    const updatedData = { ...initialData, ...formData }
    localStorage.setItem('user', JSON.stringify(updatedData))

    // 上傳資料到後端
    fetch('http://localhost:3005/api/user/update/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('資料已成功更新！')
        } else {
          alert('更新失敗：' + data.message)
        }
      })
      .catch((error) => {
        console.error('錯誤：', error)
        alert('更新失敗，請稍後再試。')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="名字"
        id="user_name"
        name="user_name" // 傳入 name 屬性
        type="text"
        placeholder="請輸入名字"
        value={formData.user_name}
        onChange={handleChange}
        required={true}
      />
      <FormField
        label="電子郵件"
        id="email"
        name="email" // 傳入 name 屬性
        type="email"
        placeholder="請輸入電子郵件"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      <FormField
        label="地址"
        id="user_address"
        name="user_address" // 傳入 name 屬性
        type="text"
        placeholder="請輸入地址"
        value={formData.user_address}
        onChange={handleChange}
      />
      <FormField
        label="電話"
        id="phone"
        name="phone" // 傳入 name 屬性
        type="text"
        placeholder="請輸入電話"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormField
        label="生日"
        id="birthday"
        name="birthday" // 傳入 name 屬性
        type="date"
        placeholder="請選擇生日"
        value={formData.birthday}
        onChange={handleChange}
      />
      <div>
        <h2 style={{ fontSize: '1.3rem' }}>性別</h2>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={{ padding: '8px', width: '50%', borderRadius: '3.79px' }}
        >
          <option value="male">男性</option>
          <option value="female">女性</option>
        </select>
      </div>
      <br />
      <Button type="submit" label="更新資料"></Button>
    </form>
  )
}

export default Profile
