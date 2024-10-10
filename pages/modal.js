// modal 控制
import OverlayLoginRegister from '@/components/user/OverlayLoginRegister'
import React, { useState } from 'react'

export default function Untitled() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // 狀態控制覆蓋層的顯示

  return (
    <div>
      {/* 按鈕用於切換覆蓋層顯示 */}
      <button onClick={() => setIsOverlayOpen(true)}>開啟覆蓋層</button>

      {/* 條件渲染覆蓋層 */}
      {isOverlayOpen && (
        <OverlayLoginRegister onClose={() => setIsOverlayOpen(false)} />
      )}
    </div>
  );
}