import React from 'react'

const FormField = ({ width = '50%', label, id, type, placeholder, required = false, value, onChange }) => (
  <>
    <h2 style={{ fontSize: '1.3rem' }}>
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </h2>
    <label htmlFor={id}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: width, // 使用傳入的 width prop 或預設值
          borderRadius: '3.79px',
          border: '1px solid #ccc', // 可選的邊框顏色
          padding: '8px', // 可選的內邊距
          boxSizing: 'border-box' // 使內邊距和邊框包括在元素的總寬度內
        }}
      />
    </label>
  </>
)

export default FormField
