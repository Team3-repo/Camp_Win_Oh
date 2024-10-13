// components/Modal.js
import React from 'react';

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button type='submit' onClick={onConfirm}>確定</button>
          <button onClick={onCancel}>取消</button>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; // 確保模態框在最上層
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        button {
          margin: 5px;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #198ea6; // 使用您的顏色
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #167a88; // 鼠標懸停變色
        }
      `}</style>
    </div>
  );
};

export default Modal;
