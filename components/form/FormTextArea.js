import React from 'react';

const FormTextArea = ({ label, id, placeholder }) => (
  <>
    <h2 style={{ fontSize: '1.3rem' }}>
      {label}
    </h2>
    <label htmlFor={id}>
      <textarea
        id={id}
        name={id}
        rows="4"
        placeholder={placeholder}
        style={{
          width: '50%',
          borderRadius: '3.79px',
          border: '1px solid #ccc', // 可選的邊框顏色
          padding: '8px', // 可選的內邊距
          boxSizing: 'border-box' // 使內邊距和邊框包括在元素的總寬度內
        }}
      ></textarea>
    </label>
  </>
);

export default FormTextArea;
