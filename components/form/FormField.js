import React from 'react';

const FormField = ({
  width = '50%',
  label,
  id,
  name, // 新增 name 屬性
  type,
  placeholder,
  required = false,
  value,
  onChange,
  backgroundColor = '#fff',
}) => (
  <>
    <h2 style={{ fontSize: '1.3rem' }}>
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </h2>
    <label htmlFor={id}>
      <input
        id={id}
        name={name} // 使用傳入的 name prop
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: width,
          borderRadius: '3.79px',
          border: '1px solid #ccc',
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: backgroundColor,
        }}
      />
    </label>
  </>
);

export default FormField;
