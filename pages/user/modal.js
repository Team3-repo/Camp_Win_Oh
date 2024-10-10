// modal 控制
import OverlayLoginRegister from '@/components/user/OverlayLoginRegister';
import React, { useState } from 'react';

export default function Untitled() {
  // 初始值設定為 true（直接顯示覆蓋層）
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  // 當覆蓋層關閉，跳轉至付款頁面
  const handleOverlayClose = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect') || '/book/cart';

    window.location.href = redirectUrl;
  };

  return (
    <div>
      {/* 初始狀態顯示覆蓋層 */}
      {isOverlayOpen && (
        <OverlayLoginRegister onClose={handleOverlayClose} />
      )}
    </div>
  );
}
