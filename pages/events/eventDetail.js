import React from 'react'
import Footer2 from '@/components/event/footer2'
import Navbar from '@/components/event/navbar'
import Button from '@/components/book/button'

export default function eventDetail() {
  return (
    <>
      <Navbar />
      <section className="event-info">
        <div className="event-header">
          <h2>🔥 夏日狂歡派對</h2>
          <button className="join-button">+加入活動</button>
        </div>
        <div className="event-details">
          <div className="event-image">
            <img
              src="https://i.postimg.cc/rw0pvRMH/fire-434157-1280.jpg"
              alt="活動圖片"
            />
          </div>
          <div className="event-description">
            <p>
              <strong>主辦人：</strong>小八
            </p>
            <p>
              <strong>活動名稱：</strong>夏日狂歡派對
            </p>
            <p>
              <strong>成員數量：</strong>4人/6人
            </p>
            <p>
              <strong>每人費用：</strong>1200
            </p>
            <p>
              <strong>活動時間：</strong>2024年09月23日 - 2024年09月24日
            </p>
            <p>
              <strong>活動地點：</strong>山林營地第20號
            </p>
            <p>
              <strong>注意事項：</strong>
              儲存所有垃圾並帶走，參加者請自備帳篷等裝備，避免攜帶過量行李。
            </p>
          </div>
          <div className="services-container">
            <ul className="services-list">
              <li>
                <img src="../assets/images/check.png" alt="Available" />
                親子設施
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                接送服務
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                攜帶寵物
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                供應熱水
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                公共衛浴
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                投幣式洗衣機
              </li>
              <li>
                <img src="images/check.png" alt="Available" />
                無障礙設施
              </li>
              <li>
                <img src="images/cross.png" alt="Not Available" />
                野餐桌
              </li>
              <li>
                <img src="images/cross.png" alt="Not Available" />
                餐廳
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="camp-rules">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">營地相關規定</div>
            <div className="accordion-content">
              <h3>營地注意事項</h3>
              <p>
                入營與退營時間：
                <br />
                入營時間：下午3:00後。
                <br />
                退營時間：上午11:00前。超時退營將收取額外費用。
              </p>
              <h4>環境保護：</h4>
              <p>
                請勿在營地內隨意丟棄垃圾，所有垃圾請分類並帶走。不得在營地內隨意挖土或砍伐樹木，請愛護自然環境。
              </p>
              <h4>火源使用：</h4>
              <p>
                嚴禁在非指定區域生火，露營地內僅可在指定的燒烤區或炊事區使用火源。使用炭火燒烤後，請確保火源完全熄滅，以防火災。
              </p>
              <h4>夜間安靜時間：</h4>
              <p>
                夜間10:00後為安靜時間，請降低聲音，避免影響他人休息。禁止使用高音量的音響設備，以保持安靜的露營環境。
              </p>
              <h4>電力供應：</h4>
              <p>
                各營位配有基礎電力供應，但請避免使用大功率電器，以免造成斷電。若需使用大型電器，請提前通知營地管理人員。
              </p>
              <h4>寵物管理：</h4>
              <p>
                營地內禁止攜帶寵物進入，確保其他露營者的舒適和安全。若攜帶寵物需預先申報並遵守相關規定。
              </p>
              <h4>緊急聯絡：</h4>
              <p>
                營地內設有緊急聯絡電話與急救站，遇有突發狀況請立即聯絡管理人員。建議攜帶基本急救用品以備不時之需。
              </p>
              <h4>天氣變化：</h4>
              <p>
                請隨時關注天氣預報，遇到極端天氣可能會取消或延後露營行程，營地將提前通知並提供相關安排。在雷雨或大風天氣時，請避免在露天區域活動。
              </p>
              <h4>設施使用：</h4>
              <p>
                營地內設有公共廁所、淋浴間和飲水設施，請保持清潔並節約使用。不得破壞或損壞營地設施，違者將負責賠償。
              </p>
              <h4>活動安全：</h4>
              <p>
                在進行露營活動如登山、划船等時，請遵守安全規範並聽從導遊指引。請勿單獨前往偏遠區域，以免發生意外。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </>
  )
}
