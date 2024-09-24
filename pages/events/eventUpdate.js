import React, { useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import Button from '@/components/book/button'

export default function EventCreate() {
  useEffect(() => {
    // 僅允許選擇今天或之後的日期
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: function (selectedDates, dateStr, instance) {
        // 當開始日期改變時，更新結束日期的 minDate
        const endDateInput = document.getElementById('end-date')
        if (selectedDates.length > 0) {
          endDateInput._flatpickr.set('minDate', selectedDates[0])
        } else {
          endDateInput._flatpickr.set('minDate', new Date())
        }
      },
    })

    // 初始化 end-date，限制只能選擇開始日期之後的日期
    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(), // 默認為今天或之後的日期
    })
  }, [])

  // 驗證輸入的數字是否為負數
  const validateECNumber = (e) => {
    const value = e.target.value
    if (value < 0) {
      e.target.value = 0 // 輸入負數，自動設置0
      alert('填入數值不得為負數')
    }
  }

  return (
    <>
      <Navbar />
      <section className="ecsection-title">
        <h2>創建活動</h2>
      </section>
      <section className="ecsectionall">
        <div className="ecsection-form">
          {/* 上傳圖片 */}
          <section className="ecsection">
            <div className="ectitle">
              <h3 className="ech2">上傳圖片</h3>
            </div>
            <div className="ecupload-wrapper">
              <img id="ecuploaded-image" src="" alt="uploaded-image" />
              <input type="file" id="ecupload-image" accept=".jpg, .png" />
              <button type="button" className="ecupload-btn">
                上傳
              </button>
              <div className="ecimage-controls">
                <button type="button" className="ecedit-btn">
                  編輯
                </button>
                <button type="button" className="ecdelete-btn">
                  刪除
                </button>
              </div>
            </div>

            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech2">活動資訊</h3>
            </div>
            {/* 主辦人（自動帶入會員名稱） */}
            <div className="ecform-group">
              <label htmlFor="organizer">主辦人</label>
              <input
                type="text"
                id="organizer"
                defaultValue="會員名稱"
                readOnly
              />
            </div>
            {/* 活動名稱 */}
            <div className="ecform-group">
              <label htmlFor="ecevent-name">活動名稱</label>
              <input type="text" id="ecevent-name" required />
            </div>
            {/* 人數限制 */}
            <div className="ecform-group">
              <label htmlFor="ecpeople-limit">人數限制</label>
              <input
                type="number"
                id="ecpeople-limit"
                onChange={validateECNumber}
                required
              />
            </div>
            {/* 費用 */}
            <div className="ecform-group">
              <label htmlFor="ecfee">費用（每人）</label>
              <input
                type="number"
                id="ecfee"
                onChange={validateECNumber} // 添加 onChange 事件處理程序
                required
              />
            </div>
            {/* 日期選擇 */}
            <div className="ecdate-group">
              <div className="ecform-group">
                <label htmlFor="start-date">開始日期</label>
                <input type="text" id="start-date" placeholder="選擇開始日期" />
              </div>
              <div className="ecform-group">
                <label htmlFor="end-date">結束日期</label>
                <input type="text" id="end-date" placeholder="選擇結束日期" />
              </div>
            </div>
            {/* 區域和營地 */}
            <div className="eclocation-group">
              <div className="ecform-group">
                <label htmlFor="ecarea">區域</label>
                <select id="ecarea">
                  <option value="北部">北部</option>
                  <option value="中部">中部</option>
                  <option value="南部">南部</option>
                  <option value="東部">東部</option>
                </select>
              </div>
              <div className="ecform-group">
                <label htmlFor="eccamp">營地</label>
                <select id="eccamp">
                  <option value="山Chill">山Chill</option>
                  {/* 根據選定的區域連動營地選項... */}
                </select>
              </div>
            </div>
            {/* 備註 */}
            <div className="ecform-group">
              <label htmlFor="notes">備註</label>
              <textarea id="notes" rows={4} defaultValue={''} />
            </div>
          </section>
          {/* 主辦人聲明 */}
          <section className="ecsection">
            <div className="ectitle">
              <h3 className="ech3">揪團主辦人聲明</h3>
            </div>
            <div className="ecdeclaragree">
              <p>
                我了解並同意，作為揪團活動的主辦人，我有責任確保活動的合法性，並遵守法律與規範。任何違法行為（如未經許可的營地使用、非法活動或危害公共安全的行為）將由主辦人自行承擔一切法律責任，本網站不承擔任何連帶責任。
              </p>
            </div>
            <div className="eccheckbox">
              <input type="checkbox" id="ecagree" /> 我已閱讀並同意上述聲明
            </div>
          </section>
        </div>
        {/* 提交按鈕 */}
        <Button label="建立活動" onClick={() => alert('Button clicked!')} />
      </section>

      <Footer2 />
    </>
  )
}
