/**
 **
 */
import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress-container">
      <div className="step-by-step">
        <div className="step-numbers">
          <div className="step-line">
            <div className="step-number">1</div>
            <div className="step-connector" />
            <div className="step-number">2</div>
            <div className="step-connector" />
            <div className="step-number">3</div>
          </div>
        </div>
      </div>
      <div className="step-label">選擇方案</div>
      <div className="step-label-middle">填寫資料</div>
      <div className="step-label-end">完成付款</div>
      <style jsx>{`
        .progress-container {
          align-self: center;
          display: flex;
          margin-top: 42px;
          width: 100%;
          max-width: 1198px;
          flex-direction: column;
          color: #000;
          white-space: nowrap;
          font: 400 15px PoetsenOne, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .progress-container {
            max-width: 100%;
            margin-top: 40px;
            white-space: initial;
          }
        }
        .step-by-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
          color: var(--black, #000);
          justify-content: center;
        }
        @media (max-width: 991px) {
          .step-by-step {
            max-width: 100%;
            white-space: initial;
          }
        }
        .step-numbers {
          display: flex;
          width: 1154px;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .step-numbers {
            white-space: initial;
          }
        }
        .step-line {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 19px;
          justify-content: start;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .step-line {
            max-width: 100%;
            white-space: initial;
          }
        }
        .step-number {
          border-radius: 11.589px;
          background: var(--pink, #ff7fcd);
          align-self: stretch;
          min-height: 23px;
          width: 23px;
          height: 23px;
          margin: auto 0;
          padding: 0 5px;
        }
        @media (max-width: 991px) {
          .step-number {
            white-space: initial;
          }
        }
        .step-connector {
          background-color: #ff7fcd;
          align-self: stretch;
          display: flex;
          min-width: 240px;
          width: 505px;
          height: 1px;
          fill: var(--pink, #ff7fcd);
          flex: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .step-label {
          align-self: start;
          z-index: 10;
          margin-top: -18px;
        }
        @media (max-width: 991px) {
          .step-label {
            max-width: 100%;
          }
        }
        .step-label-middle {
          align-self: end;
          z-index: 10;
          margin: -18px 60px 0 0;
        }
        @media (max-width: 991px) {
          .step-label-middle {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .step-label-end {
          align-self: end;
          z-index: 10;
          margin-top: -18px;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
