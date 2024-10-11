import React, { useEffect, useState } from 'react';
import EventCreateForm from '@/components/event/EventCreateForm';
import Navbar from '@/components/event/navbar';
import Footer2 from '@/components/event/footer2';
import { EventProvider } from '@/context/event/EventContext';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function eventCreate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // 初始化登入狀態並判斷是否已登入
  useEffect(() => {
    const loginState = localStorage.getItem('loginState') === 'true';
    setIsLoggedIn(loginState);

    // 如果未登入，跳轉到登入頁面並附帶 redirect 參數
    if (!loginState) {
      toast.error('請先登入再創建活動！', {
        duration: 3000,
        position: 'top-center',
      });
      setTimeout(() => {
        router.push('/user/modal?redirect=/events/eventCreate');
      }, 3000);
    }
  }, [router]);

  // 登入狀態檢查完成後再顯示頁面內容
  if (!isLoggedIn) return null;

  return (
    <>
      <Navbar />
      <EventProvider>
        <EventCreateForm />
      </EventProvider>
      <Footer2 />
      <Toaster />
    </>
  );
}
