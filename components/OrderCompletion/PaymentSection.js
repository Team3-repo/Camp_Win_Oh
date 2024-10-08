import React, { useContext, useState } from 'react'; // 引入 useContext 和 useState
import { useCart } from '@/context/CartContext';  
import { useOrder } from '@/context/OrderContext'; // 引入 OrderContext
import Modal from '../OrderCompletion/Modal'; // 將路徑更改為您的 Modal 組件路徑

const PaymentSection = () => {
  const { cartItems, totalAmount } = useCart();
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

  return (
    <section className="payment-section">
      <div className="alert-box">
        <div className="alert-content">
          <div className="alert-title">填寫資料</div>
          <div className="alert-details">
            <div className="details-text">查看詳情</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c05724249145ddb1d284c24717a2261e37153d5b136cdc29ecabd992aae7e6?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
              className="details-icon"
              alt="Details Icon"
            />
          </div>
        </div>
      </div>
      <div className="payment-form">
        <div className="form-title">完成付款</div>
        <div className="payment-method">
          <div className="method-title">付款方式</div>
          <div className="method-options">
            <div className="payment-option">
            
                <div className="radio-outer">
                  <div className="radio-inner" />
                </div>
              
              <div className="option-label">信用卡</div>
            </div>
          </div>
          <div className="line-pay-option">
            <div className="payment-option">
              <div className="line-pay-radio" />
              <div>貨到付款</div>
            </div>
          </div>
          <div className="payment-confirmation">
            <div className="confirmation-text">
              點擊「確認付款」，即表示您以確認訂單無誤且同意右方顯示的總金額，亦同意
              服務條款 和取消政策
            </div>
            <div className="confirmation-actions">
              <div className="total-amount">NT$ {totalAmount}</div>
              {/* <Link href="/cart/ecpay"> */}
              <button onClick={goECPay} className="confirm-button">確認付款</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          message="確認要導向至 ECPay 進行付款?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <style jsx>{`
        .payment-section {
          align-self: start;
          display: flex;
          min-width: 240px;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          width: 786px;
        }
        @media (max-width: 991px) {
          .payment-section {
            max-width: 100%;
          }
        }
        .alert-box {
          align-items: start;
          border-radius: 10px;
          background: var(--blue-light, #8deafb);
          display: flex;
          width: 719px;
          max-width: 100%;
          gap: 30px;
          font-family: Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          color: var(--blue-dark, #198ea6);
          justify-content: start;
          padding: 20px;
        }
        .alert-content {
          display: flex;
          min-width: 240px;
          width: 100%;
          align-items: center;
          gap: 40px 100px;
          justify-content: space-between;
          flex-wrap: wrap;
          flex: 1;
          flex-basis: 0%;
        }
        @media (max-width: 991px) {
          .alert-content {
            max-width: 100%;
          }
        }
        .alert-title {
          font-size: 24px;
          font-weight: 500;
          align-self: stretch;
          margin: auto 0;
        }
        .alert-details {
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 16px;
          font-weight: 400;
          justify-content: start;
          margin: auto 0;
        }
        .details-text {
          align-self: stretch;
          margin: auto 0;
        }
        .details-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 15px;
          align-self: stretch;
          margin: auto 0;
        }
        .payment-form {
          border-radius: 5px;
          background-color: #fff;
          display: flex;
          margin-top: 10px;
          width: 719px;
          max-width: 100%;
          flex-direction: column;
          justify-content: start;
          padding: 20px;
        }
        .form-title {
          align-self: stretch;
          width: 100%;
          gap: 10px;
          color: #ff5833;
          white-space: nowrap;
          font: 500 24px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .form-title {
            max-width: 100%;
            white-space: initial;
          }
        }
        .payment-method {
          padding-top: 20px;
          border-top: 1px solid var(--secondary-light2, #b4a59f);
          display: flex;
          margin-top: 25px;
          width: 100%;
          flex-direction: column;
          justify-content: start;
        }
        @media (max-width: 991px) {
          .payment-method {
            max-width: 100%;
          }
        }
        .method-title {
          align-self: stretch;
          padding-left: 15px;
          border-color: rgba(252, 154, 132, 1);
          border-left-width: 10px;
          width: 100%;
          gap: 10px;
          color: var(--black, #000);
          white-space: nowrap;
          border-left: 10px solid var(--BTN-CLOR, #fc9a84);
          font: 400 24px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .method-title {
            white-space: initial;
          }
        }
        .method-options {
          align-items: start;
          border-bottom: 1px solid var(--secondary-light2, #b4a59f);
          display: flex;
          margin-top: 15px;
          width: 100%;
          gap: 30px;
          justify-content: start;
          padding: 10px;
        }
        @media (max-width: 991px) {
          .method-options {
            max-width: 100%;
          }
        }
        .payment-option {
          display: flex;
          align-items: end;
          gap: 8px;
          justify-content: start;
        }
        .radio-button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 24px;
          padding: 1px 0;
        }
        .radio-outer {
          border-radius: 14px;
          border: 2px solid var(--pink, #ff81d2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px;
        }
        .radio-inner {
          border-radius: 14px;
          background: var(--pink, #ff81d2);
          background-color: var(--pink, #ff81d2);
          display: flex;
          width: 12px;
          height: 12px;
        }
        .option-label {
          color: var(--secondary-dark, #4c3a30);
          font: 400 16px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .line-pay-option {
          align-items: start;
          border-bottom: 1px solid var(--secondary-light2, #b4a59f);
          display: flex;
          margin-top: 25px;
          width: 100%;
          gap: 30px;
          color: var(--secondary-dark, #4c3a30);
          justify-content: start;
          padding: 10px;
          font: 400 16px Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .line-pay-option {
            max-width: 100%;
          }
        }
        .line-pay-radio {
          border-radius: 14px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          width: 24px;
          height: 24px;
          fill: var(--white, #fff);
          stroke: var(--pink, #ff81d2);
          border: 1px solid rgba(255, 129, 210, 1);
        }
        .payment-confirmation {
          display: flex;
          margin-top: 25px;
          width: 100%;
          align-items: center;
          gap: 40px 200px;
          font-family: Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: start;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .payment-confirmation {
            max-width: 100%;
          }
        }
        .confirmation-text {
          color: var(--black, #000);
          font-size: 16px;
          font-weight: 400;
          align-self: stretch;
          flex: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .confirmation-actions {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          margin: auto 0;
        }
        .total-amount {
          color: rgba(255, 88, 51, 1);
          font-size: 24px;
          font-weight: 900;
        }
        .confirm-button {
          align-self: stretch;
          border-radius: 11px;
          background: var(--BTN-CLOR, #fc9a84);
          background-color: var(--BTN-CLOR, #fc9a84);
          min-height: 42px;
          gap: 10px;
          font-size: 20px;
          color: var(--white, var(--white, #fff));
          font-weight: 400;
          white-space: nowrap;
          padding: 0 30px;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .confirm-button {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default PaymentSection;
