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
  const [eOtherFees, setEOtherFees] = useState(0)
  // 費用（每人）
  const [costPerPerson, setCostPerPerson] = useState(0)
  // 選擇的住宿資訊
  const [selectedBookType, setSelectedBookType] = useState(null)
  const [selectedCampsite, setSelectedCampsite] = useState(null)
  const [campsites, setCampsites] = useState([])
  const [bookingTypes, setBookingTypes] = useState([])
  // 表單狀態
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eStartDate, setEStartDate] = useState('')
  const [eEndDate, setEEndDate] = useState('')
  const [organizerNick, setOrganizerNick] = useState('')
  const [eventNotes, setENotes] = useState('')
  const [uploadedImage, setUploadedImage] = useState('')

  // 在頁面初始化時，從 localStorage 中讀取已保存的表單資料
  useEffect(() => {
    const storedData = localStorage.getItem('eventPreviewData')
    if (storedData) {
      const eventData = JSON.parse(storedData)
      setEventTitle(eventData.eventTitle || '')
      setEventDescription(eventData.eventDescription || '')
      setEStartDate(eventData.eStartDate || '')
      setEEndDate(eventData.eEndDate || '')
      setOrganizerNick(eventData.organizerNick || '')
      setSelectedCampsite(
        campsites.find((campsite) => campsite.id === eventData.camp_id) || null
      )
      setSelectedBookType(eventData.selectedBookType || null)
      setOrderQuantity(eventData.orderQuantity || 1)
      setOrderAmount(eventData.orderAmount || 0)
      setEventPeople(eventData.eventPeople || 1)
      setEOtherFees(eventData.eOtherFees || 0)
      setCostPerPerson(eventData.costPerPerson || 0)
      setENotes(eventData.eventNotes || '')
      setUploadedImage(eventData.imageUrl || '')
    }
  }, [campsites]) // 等待 campsites 加載完成後再執行

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
    // end-date限制只能選擇開始日期之後的日期
    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(), // 默認為今天或之後的日期
    })
  }, [])

  // 從後端取得營地資料
  useEffect(() => {
    const fetchCampsites = async () => {
      const res = await fetch('http://localhost:3001/api/campsites')
      const data = await res.json()
      setCampsites(data)
    }

    fetchCampsites()
  }, [])

  useEffect(() => {
    // 當選擇營地時，根據campsite_id取得房型資料
    if (selectedCampsite) {
      const fetchBookingTypes = async () => {
        const res = await fetch(
          `http://localhost:3001/api/booking_types?campsite_id=${selectedCampsite.id}`
        )
        const data = await res.json()
        setBookingTypes(data)
      }

      fetchBookingTypes()
    } else {
      setBookingTypes([]) // 清空先前的住宿選項
    }
  }, [selectedCampsite])

  // 更新訂購數量，根據選擇的住宿類型的最大庫存量進行控制
  const handleOrderQuantityChange = (e, book_type) => {
    let value = parseInt(e.target.value) || 1
    if (value > book_type.stock) {
      value = book_type.stock
    }
    setOrderQuantity(value)
    setOrderAmount(value * book_type.price)

    if (eventPeople > 0) {
      setCostPerPerson(
        ((value * book_type.price + eOtherFees) / eventPeople).toFixed(1)
      )
    }
  }

  // 更新活動人數
  const handleEventPeopleChange = (e) => {
    let value = parseInt(e.target.value) || 1

    const maxPeople = (selectedBookType?.max_per || 1) * orderQuantity

    if (value > maxPeople) {
      value = maxPeople // 若超過最大值，則設定為最大值
    }
    setEventPeople(value)

    // 更新費用（每人）
    if (value > 0) {
      setCostPerPerson(((orderAmount + eOtherFees) / value).toFixed(1))
    } else {
      setCostPerPerson(0)
    }
  }

  // 更新其他費用
  const handleOtherFeesChange = (e) => {
    let value = parseInt(e.target.value) || 0
    setEOtherFees(value)
  }

  // 每次狀態變更後更新費用（每人）
  useEffect(() => {
    if (eventPeople > 0) {
      setCostPerPerson(((orderAmount + eOtherFees) / eventPeople).toFixed(1))
    } else {
      setCostPerPerson(0)
    }
  }, [orderAmount, eventPeople, eOtherFees])

  // 選擇住宿
  const handleAccommodationChange = (book_type) => {
    setSelectedBookType(book_type)
    setOrderQuantity(1) // 重置訂購數量
    setOrderAmount(book_type.price)
    if (eventPeople > 0) {
      setCostPerPerson(
        ((book_type.price + eOtherFees) / eventPeople).toFixed(1)
      )
    }
  }

  // 當使用者選擇營地時，正確更新 selectedCampsite 狀態，並檢查選取的物件
  const handleCampsiteChange = (e) => {
    const selectedId = parseInt(e.target.value)
    const campsite = campsites.find((camp) => camp.id === selectedId)
    setSelectedCampsite(campsite)
    setSelectedBookType(null)
    setOrderQuantity(1)
    setOrderAmount(0)
  }

  // 圖片
  const handleUploadImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // 預覽活動頁面
  const handlePreview = () => {
    const eventData = {
      eventTitle,
      eventDescription,
      eStartDate,
      eEndDate,
      organizerNick,
      camp_id: selectedCampsite?.id || '', // 營地ID
      campName: selectedCampsite?.name || '', // 營地名稱
      campAdd: selectedCampsite?.address || '', // 營地地址
      selectedBookType,
      orderQuantity,
      orderAmount,
      costPerPerson,
      eOtherFees,
      eventNotes,
      eventPeople,
      imageUrl: uploadedImage,
    }

    localStorage.setItem('eventPreviewData', JSON.stringify(eventData))

    window.location.href = '/events/eventPreview'
  }
  return (
    <>
      <section className="ecsectionall">
        <div className="ecsection-form">
          {/* 上傳圖片 */}
          <div className="ecsection">
            <div className="ecsection-title">
              <h2>創建活動</h2>
            </div>
            <div className="ectitle">
              <h3 className="ech3">上傳圖片</h3>
            </div>
            <div className="ecupload-wrapper">
              {uploadedImage && (
                <img
                  id="ecuploaded-image"
                  src={uploadedImage}
                  alt="uploaded-image"
                />
              )}
              <input
                type="file"
                id="ecupload-image"
                accept=".jpg, .png"
                onChange={handleUploadImage}
              />
            </div>

            {/* 活動簡介 */}
            <div className="ectitle">
              <h3 className="ech3">活動簡介</h3>
            </div>
            <div className="ecform-group">
              <label htmlFor="notes">請簡述活動的背景、行程安排</label>
              <textarea
                id="eventDescription"
                rows={4}
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
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
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
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
              {/* <div className="ecform-group">
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
              </div> */}
              <div className="ecform-group">
                <label htmlFor="eccamp">營地</label>
                <select
                  id="eccamp"
                  value={selectedCampsite?.id || ''}
                  onChange={handleCampsiteChange}
                  required
                >
                  <option value="" disabled>
                    請選擇營地
                  </option>
                  {campsites.map((campsite) => (
                    <option key={campsite.id} value={campsite.id}>
                      {campsite.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 住宿選項 */}
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
                  {bookingTypes
                    .filter((bt) => bt.campsites_id === selectedCampsite?.id)
                    .map((book_type, index) => (
                      <tr key={index}>
                        <td>{book_type.name}</td>
                        <td>{book_type.max_per}</td>
                        <td>{book_type.price}</td>
                        <td>{book_type.stock}</td>
                        <td>
                          <input
                            type="number"
                            min={1}
                            max={book_type.stock}
                            value={
                              selectedBookType?.name === book_type.name
                                ? orderQuantity
                                : 1
                            }
                            onChange={(e) =>
                              handleOrderQuantityChange(e, book_type)
                            }
                            disabled={selectedBookType?.name !== book_type.name}
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleAccommodationChange(book_type)}
                          >
                            {selectedBookType?.name === book_type.name
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
              {/* 活動人數與其他費用 */}
              <div className="exaboutno">
                <div className="ecform-group">
                  <label htmlFor="ecpeople-limit">活動人數</label>
                  <input
                    type="number"
                    id="event-people"
                    min={1}
                    max={(selectedBookType?.max_per || 1) * orderQuantity}
                    value={eventPeople}
                    onChange={handleEventPeopleChange}
                    required
                  />
                </div>
                <div className="ecform-group">
                  <label htmlFor="ecfee">其他支出</label>
                  <input
                    type="number"
                    id="other-fees"
                    min={0}
                    value={eOtherFees}
                    onChange={handleOtherFeesChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* 營地資訊與費用總計 */}
            <div className="eventSummary">
              <div className="ectitle2">
                <legend>
                  <h4 className="ech4">營地資訊一覽 與 活動費用總計</h4>
                </legend>
              </div>
              <p>
                <strong>營地地址：</strong>
                {selectedCampsite?.address || '尚未選擇'}
              </p>
              <p>
                <strong>住宿選擇：</strong>{' '}
                {selectedBookType?.name || '尚未選擇住宿'}
              </p>
              <p>
                <strong>可容納：</strong>
                {(selectedBookType?.max_per || 1) * orderQuantity} 人
              </p>
              <p>
                <strong>單價：</strong> {selectedBookType?.price || ' '} 元
              </p>
              <p>
                <strong>訂購數量：</strong> {orderQuantity} 間
              </p>
              <p>
                <strong>訂購金額：</strong> {orderAmount} 元
              </p>
              <hr />
              <p>
                <strong>每人費用：</strong> {parseInt(costPerPerson)} 元
              </p>
              <p>
                <strong>總費用：</strong> {orderAmount + eOtherFees} 元
              </p>
            </div>

            {/* 備註 */}
            <div className="ecform-group">
              <label htmlFor="eventNotes">備註</label>
              <textarea
                id="eventNotes"
                rows={4}
                value={eventNotes}
                onChange={(e) => setENotes(e.target.value)}
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
