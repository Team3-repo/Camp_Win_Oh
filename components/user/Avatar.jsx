import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/user/profile.module.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Avatar = () => {
  const [avatar, setAvatar] = useState(null); // 儲存上傳的 avatar 檔案
  const [preview, setPreview] = useState(null); // 預覽圖片

  useEffect(() => {
    const storedUser = localStorage.getItem('user') || '{}';
    const user = JSON.parse(storedUser);

    // 使用預設圖片的邏輯
    const initialAvatar = user.avatar && user.avatar !== 'none' ? `http://localhost:3005${user.avatar}` : '/pics/avatar-1.png';
    setAvatar(initialAvatar);
  }, []);

  // 上傳圖片處理
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 驗證圖片格式
    const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      toast.error('檔案格式無效，請選擇 png, jpeg 或 gif 格式');
      return;
    }

    // 預覽圖片
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    // 建立表單資料
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      // 上傳圖片至伺服器
      const response = await fetch('http://localhost:3005/api/upload-avatar', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('圖片上傳失敗');
      }

      const data = await response.json();
      setAvatar(data.avatarUrl);

      // 更新 localStorage 中的 user 資料
      const storedUser = localStorage.getItem('user') || '{}';
      const user = JSON.parse(storedUser);
      user.avatar = data.avatarUrl;
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('大頭照已成功更新');
    } catch (error) {
      toast.error('上傳過程中發生錯誤，請稍後再試');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.outsideAvatar}>
        <form className={styles.avatarWrapper}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/gif" // 限制檔案類型
            onChange={handleImageChange} // 處理圖片變更
            style={{ display: 'none' }}
            id="fileInput"
          />
          <Image
            onClick={() => document.getElementById('fileInput').click()} // 點擊圖片觸發檔案選擇
            // 判斷是否有預覽圖片，否則使用上傳圖片或預設圖片
            src={preview || avatar || '/pics/avatar-1.png'} 
            alt="Avatar"
            width={500}
            height={500}
          />
        </form>
        <div>
          <h4>變更你的大頭照</h4>
          <p>支援png, jpeg, gif</p>
        </div>
      </section>
    </div>
  );
};

export default Avatar;
