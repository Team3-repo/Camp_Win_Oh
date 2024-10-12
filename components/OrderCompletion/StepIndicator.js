/**
 **
 */
import React from "react";

const StepIndicator = () => {
  return (
    <div className="step-container">
      <div className="step-by-step">
        <div className="step-numbers">
          <div className="step-line">
            <div className="step-number">
              <div className="step-numbermove">1</div>
            </div>
            <div className="step-label-start">選擇方案</div>
            <div className="step-line-active" />
            <div className="step-number">
            <div className="step-numbermove">2</div>
            </div>
            <div className="step-label-end">填寫資料</div>
            <div className="step-line-inactive" />
            <div className="step-number">
            <div className="step-numbermove">3</div>
            </div>
            <div className="step-label">完成付款</div>
          </div>
        </div>
      </div>
      <div className="step-labels"></div>
      <style jsx>{`
        .step-container {
          align-self: center;
          z-index: 10;
          display: flex;
          margin-top: 39px;
          width: 100%;
          max-width: 1200px;
          flex-direction: column;
          white-space: nowrap;
          margin-bottom: 20px;
        }
        @media (max-width: 991px) {
          .step-container {
            max-width: 100%;
            white-space: initial;
          }
        }
        .step-by-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--black, #000);
          justify-content: center;
          font: 400 16px PoetsenOne, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .step-by-step {
            max-width: 100%;
            white-space: initial;
          }
        }
        .step-numbers {
          display: flex;
          width: 1157px;
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
          border-radius: 50px;
          background: var(--pink, #ff7fcd);
          align-self: stretch;
          min-height: 23px;
          width: 23px;
          height: 23px;
          margin: auto 0;
          padding: 0 0px;
        }
        .step-numbermove {
          position: relative;
          top: 2.5px; 
          left: 6.5px; 
        }

        @media (max-width: 991px) {
          .step-number {
            white-space: initial;
          }
        }
        .step-line-active {
          background-color: #ff7fcd;
          align-self: stretch;
          display: flex;
          min-width: 240px;
          width: 506px;
          height: 1px;
          fill: var(--pink, #ff7fcd);
          flex: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .step-line-inactive {
          background-color: #b4a59f;
          align-self: stretch;
          display: flex;
          min-width: 240px;
          width: 506px;
          height: 1px;
          fill: var(--secondary-light2, #b4a59f);
          flex: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .step-label {
          {/* color: var(--secondary-light2, #b4a59f); */}
          align-self: end;
          z-index: 10;
          margin-top: -22px;
          font: 500 15px PoetsenOne, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .step-labels {
          align-self: center;
          display: flex;
          margin-top: -20px;
          width: 100%;
          max-width: 1141px;
          flex-direction: column;
          color: #000;
          white-space: nowrap;
          font: 400 15px PoetsenOne, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .step-labels {
            max-width: 100%;
            white-space: initial;
          }
        }
        .step-label-start {
          align-self: start;
        }
        @media (max-width: 991px) {
          .step-label-start {
            max-width: 100%;
          }
        }
        .step-label-end {
          align-self: end;
          z-index: 10;
          margin-top: -18px;
        }
        @media (max-width: 991px) {
          .step-label-end {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default StepIndicator;
