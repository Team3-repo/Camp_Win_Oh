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
  const [costPerPerson, setCostPerPerson] = useState(0)
  // 選擇的住宿資訊
  const [selectedAccommodation, setSelectedAccommodation] = useState(null)
  // 表單狀態
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [organizerNick, setOrganizerNick] = useState('')
  const [area, setArea] = useState('北部')
  const [camp, setCamp] = useState('山Chill')
  const [notes, setNotes] = useState('')

  // 假資料
  const campsiteData = {
    // campName:'山chill',
    campAdd: '319-2106 台灣花蓮縣秀林鄉太魯閣村200號',
    accommodations: [
      {
        name: '小木屋',
        suitablePeople: 4,
        unitPrice: 2000,
        remainingQuantity: 5,
      },
      {
        name: '帳篷',
        suitablePeople: 2,
        unitPrice: 1000,
        remainingQuantity: 10,
      },
      {
        name: '露營車',
        suitablePeople: 6,
        unitPrice: 3000,
        remainingQuantity: 2,
      },
    ],
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

  // 更新訂購數量，根據選擇的住宿類型的最大庫存量進行控制
  const handleOrderQuantityChange = (e, accommodation) => {
    let value = parseInt(e.target.value) || 1
    if (value > accommodation.remainingQuantity) {
      value = accommodation.remainingQuantity
    }
    setOrderQuantity(value)
    setOrderAmount(value * accommodation.unitPrice)

    if (eventPeople > 0) {
      setCostPerPerson(
        ((value * accommodation.unitPrice + otherFees) / eventPeople).toFixed(1)
      )
    }
  }

  // 更新活動人數
  const handleEventPeopleChange = (e) => {
    let value = parseInt(e.target.value) || 1

    // 計算「適合人數」乘以「訂購數量」的最大值
    const maxPeople =
      (selectedAccommodation?.suitablePeople || 1) * orderQuantity

    if (value > maxPeople) {
      value = maxPeople // 若超過最大值，則設定為最大值
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
      setCostPerPerson(((orderAmount + otherFees) / eventPeople).toFixed(1))
    } else {
      setCostPerPerson(0)
    }
  }, [orderAmount, eventPeople, otherFees]) // 監聽這些變量的變化

  // 選擇住宿
  const handleAccommodationChange = (accommodation) => {
    setSelectedAccommodation(accommodation)
    setOrderQuantity(1) // 重置訂購數量
    setOrderAmount(accommodation.unitPrice)
    if (eventPeople > 0) {
      setCostPerPerson(
        ((accommodation.unitPrice + otherFees) / eventPeople).toFixed(1)
      )
    }
  }

  // 預覽活動頁面
  const handlePreview = () => {
    const eventData = {
      title,
      description,
      startDate,
      endDate,
      organizerNick,
      area,
      camp,
      campAdd: campsiteData.campAdd,
      selectedAccommodation,
      orderQuantity,
      orderAmount,
      costPerPerson,
      otherFees,
      notes,
      eventPeople,
    }

    localStorage.setItem('eventPreviewData', JSON.stringify(eventData))

    // 切換至預覽頁面
    window.location.href = '/events/eventPreview'
  }

  return (
    <>
      <div className="ecsection-title">
        <h2>創建活動？</h2>
      </div>
      <section className="ecsectionall">
        <div className="ecsection-form">
          {/* 上傳圖片 */}
          <div className="ecsection">
          <h2>創建活動？</h2>
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
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
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
                  id="organizerId"
                  defaultValue="自動帶入會員ID"
                  readOnly
                />
              </div>
              {/* 主辦人暱稱（顯示於活動卡片） */}
              <div className="ecform-group">
                <label htmlFor="organizerNickname">暱稱</label>
                <input
                  type="text"
                  id="organizerNick"
                  value={organizerNick}
                  onChange={(e) => setOrganizerNick(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* 活動名稱 */}
            <div className="ecform-group">
              <label htmlFor="ecevent-name">活動名稱</label>
              <input
                type="text"
                id="ecevent-name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* 日期選擇 */}
            <div className="ecdate-group">
              <div className="ecform-group">
                <label htmlFor="start-date">開始日期</label>
                <input
                  type="text"
                  id="start-date"
                  placeholder="選擇開始日期"
                  required
                />
              </div>
              <div className="ecform-group">
                <label htmlFor="end-date">結束日期</label>
                <input
                  type="text"
                  id="end-date"
                  placeholder="選擇結束日期"
                  required
                />
              </div>
            </div>

            {/* 區域和營地 */}
            <div className="eclocation-group">
              <div className="ecform-group">
                <label htmlFor="ecarea">區域</label>
                <select
                  id="ecarea"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                >
                  <option value="北部">北部</option>
                  <option value="中部">中部</option>
                  <option value="南部">南部</option>
                  <option value="東部">東部</option>
                </select>
              </div>
              <div className="ecform-group">
                <label htmlFor="eccamp">營地</label>
                <select id="eccamp">
                  <option
                    id="eccamp"
                    value={camp}
                    onChange={(e) => setCamp(e.target.value)}
                    required
                  >
                    山Chill
                  </option>
                  {/* 這裡！根據選定的區域篩選營地選項 */}
                </select>
              </div>
            </div>
            <div className="ecamping-options">
              <table>
                <thead>
                  <tr>
                    <th>住宿選擇</th>
                    <th>適合人數</th>
                    <th>單價</th>
                    <th>庫存量</th>
                    <th>訂購數量</th>
                    <th>狀態</th>
                  </tr>
                </thead>
                <tbody>
                  {campsiteData.accommodations.map((accommodation, index) => (
                    <tr key={index}>
                      <td>{accommodation.name}</td>
                      <td>{accommodation.suitablePeople}</td>
                      <td>{accommodation.unitPrice}</td>
                      <td>{accommodation.remainingQuantity}</td>
                      <td>
                        {/* 訂購數量 input */}
                        <input
                          type="number"
                          min={1}
                          max={accommodation.remainingQuantity}
                          value={
                            selectedAccommodation?.name === accommodation.name
                              ? orderQuantity
                              : 1
                          }
                          onChange={(e) =>
                            handleOrderQuantityChange(e, accommodation)
                          }
                          disabled={
                            selectedAccommodation?.name !== accommodation.name
                          }
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() =>
                            handleAccommodationChange(accommodation)
                          }
                        >
                          {selectedAccommodation?.name === accommodation.name
                            ? '已選擇'
                            : '選擇'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="exaboutno">
              {/* 修正: 使用 campsiteData 或 selectedAccommodation 中的屬性來設定最大人數 */}
              <div className="ecform-group">
                <label htmlFor="ecpeople-limit">活動人數</label>
                <input
                  type="number"
                  id="event-people"
                  min={1}
                  max={
                    (selectedAccommodation?.suitablePeople || 1) * orderQuantity
                  }
                  value={eventPeople}
                  onChange={handleEventPeopleChange}
                  required
                />
              </div>
              {/* 其他活動費用 */}
              <div className="ecform-group">
                <label htmlFor="ecfee">其他支出</label>
                <input
                  type="number"
                  id="other-fees"
                  min={0}
                  value={otherFees}
                  onChange={handleOtherFeesChange}
                  required
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
                {campsiteData.campAdd}
              </p>
              <p>
                <strong>住宿選擇：</strong>{' '}
                {selectedAccommodation?.name || '尚未選擇住宿'}
              </p>
              <p>
                <strong>可容納：</strong>{' '}
                {(selectedAccommodation?.suitablePeople || 1) * orderQuantity}{' '}
                人
              </p>
              <p>
                <strong>單價：</strong>{' '}
                {selectedAccommodation?.unitPrice || ' '} 元
              </p>
              <p>
                <strong>訂購數量：</strong> {orderQuantity} 間
              </p>

              <p>
                <strong>訂購金額：</strong> {orderAmount} 元
              </p>
              <hr />
              <hr />
              <br />
              <p>
                <strong>每人費用：</strong> {parseInt(costPerPerson)}元
              </p>
              <p>
                <strong>總費用：</strong> {orderAmount + otherFees} 元
              </p>
            </div>
            {/* 備註 */}
            <div className="ecform-group">
              <label htmlFor="notes">備註</label>
              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                required
              />
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
              <input type="checkbox" id="ecagree" required />{' '}
              我已閱讀並同意上述聲明
            </div>
            <div className="eccheckbox">
              <input type="checkbox" id="ecagree" required />{' '}
              我同意『報名截止日期為活動創立後的 14 日內』
            </div>
          </div>
          <div className="joinbtn">
            {/* 提交按鈕 */}
            <Button label="預覽活動" onClick={handlePreview} />
          </div>
        </div>
      </section>
    </>
  )
}
