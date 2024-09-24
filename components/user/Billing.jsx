import React, { useState } from 'react';
import OverlayLoginRegister from './OverlayLoginRegister';
import Button from '../book/button';

function Billing() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // 狀態控制覆蓋層的顯示

    const handleOpenOverlay = () => {
        setIsOverlayOpen(true); // 開啟覆蓋層
    };

    return (
        <div>
            <h1>Billing</h1>
            <Button label="登入/註冊" onClick={handleOpenOverlay} />

            {/* 如果覆蓋層需要顯示，則渲染 OverlayLoginRegister */}
            {isOverlayOpen && (
                <OverlayLoginRegister onClose={() => setIsOverlayOpen(false)} />
            )}
        </div>
    );
}

export default Billing;
