// api.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // 確保設置適當的基礎 URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 如果有需要，可以使用攔截器添加 token 或處理錯誤
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
