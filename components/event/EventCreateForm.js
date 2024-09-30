import React, { useState, useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

import Button from '@/components/book/button'

export default function EventCreateForm() {
  // 訂購數量
  const [orderQuantity, setOrderQuantity] = useState(1)
  // 訂購金額
  const [orderAmount, setOrderAmount] = useState(0)
  // 活動人數
  const [eventPeople, setEventPeople] = useState(1)
  // 其他費用
  const [otherFees, setOtherFees] = useState(0)
  // 費用（每人）
  const [costPerPerson, setCostPerPerson] = useState(
    0
  )

  // 假資料
  const campsiteData = {
    address: '319-2106 台灣花蓮縣秀林鄉太魯閣村200號',
    accommodation: '帳篷區',
    suitablePeople: 4, // 適合人數
    unitPrice: 1200, // 單價
    remainingQuantity: 2, // 剩餘數量
  }

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

  // 更新訂購數量
  const handleOrderQuantityChange = (e) => {
    let value = parseInt(e.target.value) || 1
    if (value > campsiteData.remainingQuantity) {
      value = campsiteData.remainingQuantity
    }
    setOrderQuantity(value)
    setOrderAmount(value * campsiteData.unitPrice)

    if (eventPeople > 0) {
      setCostPerPerson(
        (value * campsiteData.unitPrice + otherFees) / eventPeople
      )
    }
  }

  // 更新活動人數
  const handleEventPeopleChange = (e) => {
    let value = parseInt(e.target.value) || 1
    if (value > campsiteData.suitablePeople) {
      value = campsiteData.suitablePeople
    }
    setEventPeople(value)

    // 更新費用（每人）
    if (value > 0) {
      setCostPerPerson(((orderAmount + otherFees) / value).toFixed(1))
    } else {
      setCostPerPerson(0)
    }
  }
  // 更新其他費用
  const handleOtherFeesChange = (e) => {
    let value = parseInt(e.target.value) || 0
    setOtherFees(value)
  }

  // 每次狀態變更後更新費用（每人）
  useEffect(() => {
    if (eventPeople > 0) {
      setCostPerPerson(((orderAmount + otherFees) / eventPeople).toFixed(1));
    } else {
      setCostPerPerson(0);
    }
  }, [orderAmount, eventPeople, otherFees]); // 監聽這些變量的變化

  return (
    <>
      <div className="ecsection-title">
        <h2>創建活動</h2>
      </div>
      <section className="ecsectionall">
        <div className="ecsection-form">
          {/* 上傳圖片 */}
          <div className="ecsection">
            <div className="ectitle">
              <h3 className="ech3">上傳圖片</h3>
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
            {/* 活動簡介 */}
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <label htmlFor="notes">請簡述活動的背景、行程安排</label>
              <textarea id="notes" rows={4} defaultValue={''} />
            </div>
            {/* 報名截止日 */}
            <div className="ecdate-group">
              <div className="ecform-group">
                <label htmlFor="start-date">報名截止日期</label>
                <input type="text" id="start-date" placeholder="選擇開始日期" />
              </div>
            </div>
            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>

            <div className="ecaboutuser">
              {/* 主辦人（自動帶入會員名稱） */}
              <div className="ecform-group">
                <label htmlFor="organizer">主辦人</label>
                <input
                  type="text"
                  id="organizer"
                  defaultValue="自動帶入會員名稱"
                  readOnly
                />
              </div>
              {/* 主辦人暱稱（顯示於活動卡片） */}
              <div className="ecform-group">
                <label htmlFor="organizerNickname">暱稱</label>
                <input
                  type="text"
                  id="organizer"
                  defaultValue="將會顯示於活動資訊"
                  required
                />
              </div>
            </div>
            {/* 活動名稱 */}
            <div className="ecform-group">
              <label htmlFor="ecevent-name">活動名稱</label>
              <input type="text" id="ecevent-name" required />
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
            <div className="exaboutno">
              {/* 房間訂購限制 */}
              <div className="ecform-group">
                <label htmlFor="ecpeople-limit">訂購數量</label>
                <input
                  type="number"
                  id="ecpeople-limit"
                  value={orderQuantity}
                  min={1}
                  max={campsiteData.remainingQuantity}
                  onChange={handleOrderQuantityChange}
                  required
                />
              </div>
              {/* 人數限制 */}
              <div className="ecform-group">
                <label htmlFor="ecpeople-limit">活動人數</label>
                <input
                  type="number"
                  id="event-people"
                  value={eventPeople}
                  min={1}
                  max={campsiteData.suitablePeople}
                  onChange={handleEventPeopleChange}
                  required
                />
              </div>
              {/* 其他活動費用 */}
              <div className="ecform-group">
                <label htmlFor="ecfee">其他活動費用</label>
                <input
                  type="number"
                  value={otherFees}
                  min="0"
                  onChange={handleOtherFeesChange}
                />
              </div>
            </div>
            <div className="eventSummary">
              <div className="ectitle2">
                <legend>
                  <h4 className="ech4">營地資訊一覽 與 活動費用總計</h4>
                </legend>
              </div>
              <p>
                <strong>營地地址：</strong>
                {campsiteData.address}
              </p>
              <p>
                <strong>營位住宿：</strong>
                {campsiteData.accommodation}
              </p>
              <p>
                <strong>適合人數：</strong>
                {campsiteData.suitablePeople} 人
              </p>
              <p>
                <strong>單價：</strong>
                {campsiteData.unitPrice} 元
              </p>
              <p>
                <strong>天數：</strong>
               帶入幾晚
              </p>
              <p>
                <strong>剩餘數量：</strong>
                {campsiteData.remainingQuantity}
              </p>
              <hr />
              <p>
                <strong>露營區訂購金額：</strong>
                {orderAmount} 元
              </p>
              <hr />
              <hr />
              <br />
              {/* 費用（每人） */}
              <p>
                <strong>總活動費用（每人）：</strong>
                {parseInt(costPerPerson)} 元
              </p>
              <div className="joinbtn">
                {/* 提交按鈕 */}
                <Button
                  label="快速訂購露營區"
                  onClick={() => alert('Button clicked!')}
                />
              </div>
            </div>
            {/* 備註 */}
            <div className="ecform-group">
              <label htmlFor="notes">備註</label>
              <textarea id="notes" rows={4} defaultValue={''} />
            </div>
          </div>
          {/* 主辦人聲明 */}
          <div className="ecsection">
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
          </div>
          <div className="joinbtn">
            {/* 提交按鈕 */}
            <Button label="建立活動" onClick={() => alert('Button clicked!')} />
          </div>
        </div>
      </section>
    </>
  )
}

