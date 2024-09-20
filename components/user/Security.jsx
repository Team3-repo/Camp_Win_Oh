import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import FormField from '@/components/form/FormField';
import Button from '@/components/book/button';

function Security() {
  const [currentPassword, setCurrentPassword] = useState('123456');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  // 表單驗證函數
  const validateForm = () => {
    return newPassword === confirmedPassword && newPassword.length > 0;
  };

  // 儲存變更按鈕的處理邏輯
  const handleSaveChanges = (e) => {
    e.preventDefault(); // 防止表單的默認提交行為
    if (validateForm()) {
      console.log('密碼已更改');
      toast.success('密碼已成功變更！'); // 成功提示
      // 在此處處理提交表單的邏輯，例如發送 API 請求等
    } else {
      console.log('新密碼和確認密碼不匹配');
      toast.error('新密碼和確認密碼不匹配！'); // 錯誤提示
    }
  };

  const handleCancel = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmedPassword('');
  };

  return (
    <div>
      <h2>更改密碼</h2>
      <form onSubmit={handleSaveChanges}>
        {/* 當前密碼 */}
        <FormField
          label="當前密碼"
          id="currentPassword"
          type={showCurrentPassword ? 'text' : 'password'}
          placeholder="請輸入當前密碼"
          required={true}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          width="80%"
          backgroundColor="#fff"
        />
        <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
          {showCurrentPassword ? '隱藏' : '顯示'}
        </button>

        {/* 新密碼 */}
        <FormField
          label="新密碼"
          id="newPassword"
          type={showNewPassword ? 'text' : 'password'}
          placeholder="請輸入新密碼"
          required={true}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          width="80%"
          backgroundColor="#fff"
        />
        <button type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
          {showNewPassword ? '隱藏' : '顯示'}
        </button>

        {/* 確認新密碼 */}
        <FormField
          label="確認新密碼"
          id="confirmedPassword"
          type={showConfirmedPassword ? 'text' : 'password'}
          placeholder="請確認新密碼"
          required={true}
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          width="80%"
          backgroundColor="#fff"
        />
        <button type="button" onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}>
          {showConfirmedPassword ? '隱藏' : '顯示'}
        </button>

        {/* 按鈕區域 */}
        <section
          style={{
            display: 'flex',
            gap: '5px',
            justifyContent: 'flex-end',
            margin: '20px 0',
          }}
        >
          <Button label="取消" onClick={handleCancel} />
          <Button label="提交" type="submit" onClick={handleSaveChanges} />
        </section>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Security;
