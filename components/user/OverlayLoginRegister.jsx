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
            
            {/* 將兩個按鈕放入同一個容器 */}
            <div className="button-container">
              <button label={isLogin ? '登錄' : '註冊'} type="submit">
                {isLogin ? '登錄' : '註冊'}
              </button>
              <button
              type='button'
                label={`切換到${isLogin ? '註冊' : '登錄'}`}
                onClick={() => {
                  setIsLogin(!isLogin)
                  setError('') // 切換時清除錯誤
                }}
              >
                切換到{isLogin ? '註冊' : '登錄'}
              </button>
            </div>
          </form>

          <button className="closeBtn" label={`X`} onClick={onClose}>
            X
          </button>
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
          backdrop-filter: blur(5px);
        }
        .overlay-content {
          position: relative; /* 確保 closeBtn 相對於此元素定位 */
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .button-container {
          display: flex; /* 使用 Flexbox 排列 */
          gap: 10px; /* 按鈕之間的間距 */
          justify-content: center; /* 將按鈕置中 */
          margin-top: 10px; /* 與上方元素的間距 */
        }
        button {
          padding: 8px 16px; /* 按鈕內部間距 */
          background-color: #4caf50; /* 預設按鈕背景色 */
          color: white; /* 按鈕字體顏色 */
          border: none; /* 去除按鈕邊框 */
          cursor: pointer; /* 滑鼠樣式 */
          border-radius: 4px; /* 按鈕圓角 */
          transition: background-color 0.3s; /* 背景色轉換效果 */
        }
        button:hover {
          background-color: #000000; /* 按鈕 hover 背景色 */
        }
        .closeBtn {
          display: block;
          position: absolute;
          top: -20px; /* 調整至上方 */
          right: -10px; /* 調整至右側 */
          color: black; /* 測試用的字體顏色 */
          border: none; /* 去掉邊框 */
          cursor: pointer; /* 游標變為手指形狀 */
          padding: 10px;
          background-color: #fc9a84;
          border-radius: 30%;
          width: 30px;
          height: 30px;
          text-align: center;
          font-weight: bold;
          line-height: 13px;
          font-size: 16px;
        }
        .closeBtn:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </>
  )
}

export default OverlayLoginRegister
