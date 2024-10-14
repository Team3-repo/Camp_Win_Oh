import React, { useState } from 'react';
import FormField from '@/components/form/FormField';
import { toast } from 'react-toastify';

const Security = () => {
  const initialData = JSON.parse(localStorage.getItem('user'));

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 確認新密碼是否一致
    if (newPassword !== confirmPassword) {
      toast.error('新密碼與確認新密碼不一致！'); // 使用 toast 來顯示錯誤訊息
      return;
    }

    // 驗證當前密碼
    if (currentPassword !== initialData.password) {
      toast.error('當前密碼不正確！'); // 當前密碼錯誤提示
      return;
    }

    // 更新 localStorage 中的密碼
    const updatedUser = {
      ...initialData,
      password: newPassword, // 更新密碼
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));

    // 發送更新請求到後端
    try {
      const response = await fetch('http://localhost:3005/api/userPass/update/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('更新用戶資料失敗');
      }

      toast.success('密碼已更新，並成功上傳用戶資料！'); // 使用 toast 來顯示成功訊息
    } catch (error) {
      toast.error(`發生錯誤：${error.message}`); // 錯誤提示
    }

    // 清空輸入框
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="當前密碼"
        id="current_password"
        name="current_password"
        type={showCurrentPassword ? 'text' : 'password'}
        placeholder="請輸入當前密碼"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
      >
        {showCurrentPassword ? '隱藏' : '顯示'}
      </button>

      <FormField
        label="新密碼"
        id="new_password"
        name="new_password"
        type={showNewPassword ? 'text' : 'password'}
        placeholder="請輸入新密碼"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setShowNewPassword(!showNewPassword)}
      >
        {showNewPassword ? '隱藏' : '顯示'}
      </button>

      <FormField
        label="確認新密碼"
        id="confirm_password"
        name="confirm_password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="請確認新密碼"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      >
        {showConfirmPassword ? '隱藏' : '顯示'}
      </button>

      <br />
      <button type="submit" style={{ marginTop: '20px' }}>
        更新密碼
      </button>

      <style jsx>{`
        button {
          cursor: pointer;
          background-color: #fc9a84; /* 按鈕背景顏色 */
          color: white; /* 按鈕文字顏色 */
          border: none; /* 去掉邊框 */
          border-radius: 6px; /* 圓角邊框 */
          padding: 5px; /* 按鈕內邊距 */
          font-family: 'Poetsen One', 'Zen Maru Gothic', sans-serif;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #4282b7;
          color: #fff579;
        }
      `}</style>
    </form>
  );
}

export default Security;
