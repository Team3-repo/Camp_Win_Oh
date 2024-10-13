import React, { useState } from 'react';
import FormField from '@/components/form/FormField';
import Button from '@/components/book/button';
import Navbar from '@/components/event/navbar';
import Footer1 from '@/components/event/footer1';
import styles from '@/styles/user/settings.module.css';
import customBody from '@/styles/user/customBody.module.css';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@/components/user/Avatar';
import Profile from '@/components/user/Profile';
import Security from '@/components/user/Security'; 
import Billing from '@/components/user/Billing';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('Avatar');

  const renderSection = () => {
    switch (activeSection) {
      case 'Avatar':
        return <Avatar />;
      case 'Profile':
        return <Profile />;
      case 'Security':
        return <Security />;
      case 'Billing':
        return <Billing />;
      default:
        return null;
    }
  };

  return (
    <div className={customBody.noGlobal} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className={styles.container} style={{ flex: 1 }}>
        <h1 className="nav">設定</h1>

        <div className={styles.buttonGroup}>
          <Button
            label="大頭照" // Avatar
            onClick={() => {
              toast.info('大頭照');
              setActiveSection('Avatar');
            }}
            type={activeSection === 'Avatar'  ? undefined : 'btn-reg'}
          />
          <Button
            label="個人資料" // Profile
            onClick={() => {
              toast.info('顯示個人資料');
              setActiveSection('Profile');
            }}
            type={activeSection === 'Profile'  ? undefined : 'btn-reg'}
          />
          <Button
            label="變更密碼" // Security
            onClick={() => {
              toast.info('顯示安全性設定');
              setActiveSection('Security');
            }}
            type={activeSection === 'Security' ? undefined : 'btn-reg'}
          />
          <Button
            label="歷史訂單" // Billing
            onClick={() => {
              toast.info('歷史訂單');
              setActiveSection('Billing');
            }}
            type={activeSection === 'Billing' ? undefined : 'btn-reg'}
          />
        </div>

        {/* 根據選擇顯示對應的內容 */}
        {renderSection()}
      </div>
      <Footer1 style={{ width: '100%' }} />
      <ToastContainer /> {/* 設定 ToastContainer */}
    </div>
  );
}
