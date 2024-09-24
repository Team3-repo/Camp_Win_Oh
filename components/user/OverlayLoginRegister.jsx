import React, { useState } from 'react'
import FormField from '@/components/form/FormField'

const OverlayLoginRegister = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true) // 默認為登錄模式
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setError('') // 清除錯誤訊息
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLogin) {
      // 登錄驗證
      if (!formData.username || !formData.password) {
        setError('用戶名和密碼不可為空')
        return
      }
      console.log('登錄:', formData)
    } else {
      // 註冊驗證
      if (
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError('所有欄位都必須填寫')
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError('密碼不匹配')
        return
      }
      console.log('註冊:', formData)
    }

    // 提交成功後關閉覆蓋層
    onClose()
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-content">
          <h2>{isLogin ? '登錄' : '註冊'}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">用戶名</label>
              <br />
              <FormField
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="請輸入用戶名"
                width="100%"
              />
            </div>
            <div>
              <label htmlFor="password">密碼</label>
              <br />
              <FormField
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="請輸入密碼"
                width="100%"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword">確認密碼</label>
                <FormField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="請輸入確認密碼"
                  width="100%"
                />
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">{isLogin ? '登錄' : '註冊'}</button>
          </form>
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setError('') // 切換時清除錯誤
            }}
          >
            切換到{isLogin ? '註冊' : '登錄'}
          </button>
          <br />
          <button onClick={onClose}>關閉</button>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; /* 確保在最上面 */
        }
        .overlay-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        button {
          margin-top: 10px;
        }
      `}</style>
    </>
  )
}

export default OverlayLoginRegister
