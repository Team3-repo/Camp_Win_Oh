import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from '@/context/CartContext';  
import { useOrder } from '@/context/OrderContext'; // 引入 OrderContext
import Modal from '../OrderCompletion/Modal'; // 將路徑更改為您的 Modal 組件路徑

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [showMessage, setShowMessage] = useState(false); // 控制自定義訊息的狀態
  const { cartItems, totalAmount } = useCart(); // 獲取購物車內容
  const { order } = useOrder(); // 使用 useOrder 獲取 order 變數
  const [showModal, setShowModal] = useState(false); // 控制模態框顯示

  const goECPay = () => {
    setShowModal(true); // 顯示模態框
  };

  const handleConfirm = () => {
    window.location.href = `http://localhost:3005/api/ecpay-test-only?amount=${totalAmount}`;
  };

  const handleCancel = () => {
    setShowModal(false); // 關閉模態框
  };
  
  const router = useRouter();

// 確保 autoFillForm 函數被正確定義在組件內部
  const autoFillForm = () => {
    setName('陳小華');
    setPhone('0912345678');
    setEmail('example@email.com');
    setAddress('高雄市前金區中正四路211號');
    setNotes('請於週末送達');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cartItems); // 檢查 cartItems 的值

  
    try {
      const res = await fetch('/api/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, 
          phone, 
          email, 
          address, 
          notes, 
          cartItems, // 新增購物車內容
          totalAmount // 新增總金額
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setShowMessage(true); // 顯示自定義訊息
        // 新增：儲存訂單 ID 到 localStorage
        localStorage.setItem('lastOrderId', data.orderId);
        setTimeout(() => {
          setShowMessage(false);
          router.push('/payment/callback'); // 成功後跳轉頁面
        }, 2000); // 2秒後隱藏訊息並跳轉
      } else {
        alert('錯誤：' + data.error);
      }
    } catch (error) {
      alert('請求失敗：' + error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">填寫資料</h2>
          <div className="form-content">
           
            <h3 className="form-section-title">訂購人資訊</h3>
            <div className="form-fields">
              <div className="form-field">
                <label htmlFor="name">姓名 <span className="required">＊</span></label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">手機號碼 <span className="required">＊</span></label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">電子郵件 <span className="required">＊</span></label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="address">寄送地址 <span className="required">＊</span></label>
                <input
                  type="text"
                  id="address"
                  className="form-input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-field-large">
                <label htmlFor="notes">訂單備註</label>
                <textarea
                  id="notes"
                  className="form-input-large"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
              <div className="discount-section">
                <h4 className="discount-title">優惠折扣</h4>
                <div className="discount-content">
                  <p className="discount-description">
                    若您確認以下有可使用的優惠券，將於結帳時自動帶入，無須輸入優惠碼領取。
                  </p>
                  <div className="discount-actions">
                    <button type="button" className="btn-apply">
                      套用優惠券
                    </button>
                    <span className="discount-applied">已套用七折折扣</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="privacy-notice">
              我了解本人提供之個人資料，僅用於預訂實名制之旅遊及休閒娛樂活動商品，亦了解
              會營ㄛ
              將透過加密等方式保護該資料，且僅於實際交易時授權提供相關第三方使用
            </p>
            <div className="terms-agreement">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="terms"
                  className="checkbox"
                  required
                />
                <label htmlFor="terms">
                  我了解並同意 會營ㄛ 服務條款與隱私權政策
                </label>
              </div>
            </div>
            {/* 新增自動填充按鈕 */}
            <div className="btn-autofill-position">
           <button type="button" onClick={autoFillForm} className="btn-autofill">
              一鍵填寫範例資料
            </button>
            </div>
            <div className="form-actions">
              <Link href="/cart/3ShoppingCartPage">
                <button type="button" className="btn-back">回上一頁</button>
              </Link>
              
              <div className="put-flex">
              <button type="submit" className="btn-next">貨到付款</button>
              <button onClick={goECPay} type="button" className="btn-next">信用卡付款</button>
              </div>
            </div>
          </div>
        </form>
        {/* 自定義訊息彈出框 */}
        {showMessage && (
          <div className="custom-alert">
            資料成功送出！
          </div>
        )}
        {showModal && (
        <Modal
          message="確認要導向至 ECPay 進行付款?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      </div>
      <style jsx>{`
        .custom-alert {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #198ea6;
          color: #fff;
          padding: 16px 32px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          font-size: 18px;
          font-weight: bold;
          z-index: 1000;
        }
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .form-wrapper {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 24px;
          width: 100%;
          max-width: 800px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        .form-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-section-title {
          font-size: 20px;
          font-weight: 500;
          color: #333;
          margin-bottom: 16px;
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-field label {
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
        .form-input {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }
        .form-field-large {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-input-large {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          min-height: 100px;
          resize: vertical;
        }
        .required {
          color: #ff0000;
        }
        .discount-section {
          margin-top: 24px;
        }
        .discount-title {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin-bottom: 12px;
        }
        .discount-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .discount-description {
          font-size: 14px;
          color: #666;
        }
        .discount-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-apply {
          padding: 8px 16px;
          background-color: #198ea6;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        .discount-applied {
          font-size: 14px;
          color: #198ea6;
          font-weight: 500;
        }
        .privacy-notice {
          font-size: 12px;
          color: #666;
          margin-top: 24px;
        }
        .terms-agreement {
          margin-top: 24px;
        }
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .checkbox {
          width: 18px;
          height: 18px;
        }
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 0px;
        }
        .btn-back,
        .btn-next {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        .btn-back {
          background-color: #ccc;
          color: #333;
        }
        .btn-next {
          background-color: #fc9a84;
          color: #ffffff;
        }
        .put-flex{
          display:flex;
          gap:20px;
        }
        .btn-autofill-position{
          display: flex;
          justify-content: flex-end;
          width: 100%; /* 讓容器佔滿可用空間 */
        }
        .btn-autofill {
          margin-bottom: 20px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 18px;
        }
        .btn-autofill:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default CheckoutForm;
