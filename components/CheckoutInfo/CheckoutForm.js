/**
 **
 */
import React from "react";
import Link from "next/link";

const CheckoutForm = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="form">
          <h2 className="form-title">填寫資料</h2>
          <div className="form-content">
            <h3 className="form-section-title">訂購人資訊</h3>
            <div className="form-fields">
              <div className="form-field">
                <label htmlFor="name">
                  姓名 <span className="required">＊</span>
                </label>
                <input type="text" id="name" className="form-input" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">
                  手機號碼 <span className="required">＊</span>
                </label>
                <input type="tel" id="phone" className="form-input" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  電子郵件(接收訂單最新資訊){" "}
                  <span className="required">＊</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="address">
                  寄送地址 <span className="required">＊</span>
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-field-large">
                <label htmlFor="notes">訂單備註</label>
                <textarea id="notes" className="form-input-large"></textarea>
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
            <div className="form-actions">
              <Link href="/cart/3ShoppingCartPage">
              <button type="button" className="btn-back">
                回上一頁
              </button>
              </Link>
              <Link href="/cart/5OrderCompletion">
              <button type="submit" className="btn-next">
                前往付款
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <style jsx>{`
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
          margin-top: 24px;
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
      `}</style>
    </div>
  );
};

export default CheckoutForm;
