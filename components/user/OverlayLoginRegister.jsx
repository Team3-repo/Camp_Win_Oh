import React, { useState, useEffect } from 'react';
import FormField from '@/components/form/FormField';

const OverlayLoginRegister = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // 默認為登錄模式
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [colorChange, setColorChange] = useState(false); // 新增狀態

    // 監聽顏色變化效果
    useEffect(() => {
        // 模擬背景顏色變換的效果
        setColorChange(true);
    }, [isLogin]); // 切換登入/註冊時觸發效果

    // 處理表單提交
    const handleSubmit = (e) => {
        e.preventDefault(); // 防止表單提交
        if (!username || !password) {
            setError('請填寫所有必填欄位');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError('密碼和確認密碼不一致');
            return;
        }

        // 在此處執行登入或註冊邏輯
        if (isLogin) {
            console.log('執行登入', { username, password });
            // 在此處添加您的登入邏輯
        } else {
            console.log('執行註冊', { username, password });
            // 在此處添加您的註冊邏輯
        }

        // 清空輸入欄位和錯誤
        setUserName('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <>
            <div className={`overlay ${colorChange ? 'color-changed' : ''}`}>
                <div className="overlay-content">
                    <h2>{isLogin ? '登錄' : '註冊'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">用戶名</label>
                            <br />
                            <FormField
                                id="username"
                                type="text"
                                placeholder="請輸入用戶名"
                                name="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                width="100%"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">密碼</label>
                            <br />
                            <FormField
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="請輸入密碼"
                                width="100%"
                            />
                        </div>
                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword">確認密碼</label>
                                <FormField
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="請輸入確認密碼"
                                    width="100%"
                                />
                            </div>
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {/* 將兩個按鈕放入同一個容器 */}
                        <div className="button-container">
                            <button type="submit">
                                {isLogin ? '登錄' : '註冊'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setError(''); // 切換時清除錯誤
                                }}
                            >
                                切換到{isLogin ? '註冊' : '登錄'}
                            </button>
                        </div>
                    </form>

                    <div className="closeBtn" onClick={onClose}>
                        X
                    </div>
                </div>
            </div>

            <style jsx>{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000; /* 確保在最上面 */
                    backdrop-filter: blur(0px); /* 初始狀態為無模糊 */
                    opacity: 0; /* 初始狀態為透明 */
                }
                .overlay.color-changed {
                    backdrop-filter: blur(100px); /* 改變的模糊程度 */
                    opacity: 1; /* 改變的不透明度 */
                    transition: backdrop-filter 100ms linear, opacity 200ms linear; /* 設定過渡效果 */
                }
                .overlay-content {
                    position: relative; /* 確保 closeBtn 相對於此元素定位 */
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                .button-container {
                    display: flex; /* 使用 Flexbox 排列 */
                    gap: 10px; /* 按鈕之間的間距 */
                    justify-content: center; /* 將按鈕置中 */
                    margin-top: 10px; /* 與上方元素的間距 */
                }
                button {
                    padding: 8px 16px; /* 按鈕內部間距 */
                    background-color: #4caf50; /* 預設按鈕背景色 */
                    color: white; /* 按鈕字體顏色 */
                    border: none; /* 去除按鈕邊框 */
                    cursor: pointer; /* 滑鼠樣式 */
                    border-radius: 4px; /* 按鈕圓角 */
                    transition: background-color 0.3s; /* 背景色轉換效果 */
                }
                button:hover {
                    background-color: #000000; /* 按鈕 hover 背景色 */
                }
                .closeBtn {
                    display: block;
                    position: absolute;
                    top: -20px; /* 調整至上方 */
                    right: -10px; /* 調整至右側 */
                    color: black; /* 測試用的字體顏色 */
                    border: none; /* 去掉邊框 */
                    cursor: pointer; /* 游標變為手指形狀 */
                    padding: 10px;
                    background-color: #fc9a84;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    font-weight: bold;
                    line-height: 11px;
                    font-size: 18px;
                }
                .closeBtn:hover {
                    background-color: black;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default OverlayLoginRegister;
