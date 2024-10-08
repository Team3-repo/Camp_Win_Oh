import { useState } from 'react';

const MyComponent = () => {
    // 假設 isLoggedIn 是用來判斷用戶是否登入的狀態
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 模擬登入/登出功能
    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev);
    };

    return (
        <div>
            <button onClick={toggleLogin}>
                {isLoggedIn ? '登出' : '登入'}
            </button>
            {/* 根據登入狀態顯示不同的按鈕 */}
            {isLoggedIn ? (
                <button>會員專屬按鈕</button>
            ) : (
                <button>訪客專屬按鈕</button>
            )}
        </div>
    );
};

export default MyComponent;
