import React, { useState, useEffect, useContext } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import Button from '@/components/book/button'
import { EventContext } from '@/context/event/EventContext'
import Compressor from 'compressorjs'

export default function EventCreateForm() {
  const { eventData, setEventData } = useContext(EventContext)
  const [userData, setUserData] = useState({ user_id: '' })
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState({})

  const {
    organizerNick,
    imageUrl,
    eventDescription,
    eventTitle,
    eStartDate,
    eEndDate,
    selectedBookType,
    orderQuantity,
    eventPeople,
    orderAmount,
    eOtherFees,
    costPerPerson,
    eventNotes,
  } = eventData

  const [selectedCampsite, setSelectedCampsite] = useState(null)
  const [campsites, setCampsites] = useState([])
  const [bookingTypes, setBookingTypes] = useState([])
  const prohibitedWords = [
    // 禁用詞彙
    '自殺',
    '屍體',
    '死亡',
    '性騷',
    '性別歧視',

    // 新增與暴力相關的詞彙
    '謀殺',
    '殺人',
    '暴力',
    '毆打',
    '傷害',
    '強暴',
    '虐待',
    '戰爭',
    '襲擊',
    '恐怖主義',

    // 非法行為相關
    '毒品',
    '吸毒',
    '販毒',
    '走私',
    '賭博',
    '非法交易',
    '盜竊',
    '搶劫',
    '欺詐',
    '詐騙',
    '勒索',

    // 不當言論與侮辱性詞彙
    '智障',
    '白癡',
    '蠢貨',
    '廢物',
    '垃圾',
    '混蛋',
    '狗屎',
    '種族歧視',
    '宗教歧視',
    '膚色歧視',
    '同性戀歧視',

    // 不當的性相關內容
    '強姦',
    '亂倫',
    '淫穢',
    '色情',
    '暴露',
    '裸露',
    '性交易',
    '性虐待',
    '未成年性交',
    '戀童癖',

    // 兒童保護相關
    '兒童色情',
    '誘拐',
    '虐童',
    '猥褻兒童',
    '未成年色情',
    '青少年性行為',
    '戀童',

    // 環境保護與非法行為
    '亂丟垃圾',
    '毀壞自然',
    '獵捕野生動物',
    '非法露營',
    '濫砍濫伐',
    '非法狩獵',
    '破壞營地',
    '焚燒垃圾',
    '污染水源',
    '環境破壞',

    // 與健康安全相關
    '傳染病',
    '瘟疫',
    '感染',
    '危險食品',
    '酒駕',
    '毒駕',
    '中毒',
    '醉酒',
    '失控',

    // 不適當的宗教與政治相關
    '原教旨主義',
    '異教徒',
    '恐怖主義',
    '極端主義',
    '政變',
    '武裝起義',
    '造反',

    // 其他不當內容
    '假新聞',
    '陰謀論',
    '假冒',
    '騙局',
    '邪教',
  ]

  // 從 LocalStorage 中讀取資料並填入
  useEffect(() => {
    const storedEventData = localStorage.getItem('eventPreviewData')
    const storedUserData = localStorage.getItem('user')

    if (storedEventData) {
      const parsedData = JSON.parse(storedEventData)
      setEventData(parsedData)

      if (parsedData.camp_id) {
        const selectedCamp = campsites.find(
          (camp) => camp.id === parsedData.camp_id
        )
        setSelectedCampsite(selectedCamp)
      }
    }

    // 確認是否有 user 資訊並填入
    if (storedUserData) {
      const user = JSON.parse(storedUserData)
      setUserData({
        user_id: user.user_id || '',
        user_name: user.user_name || '',
      })
      // 更新 eventData 中的 user_id
      setEventData((prev) => ({
        ...prev,
        user_id: user.user_id || '',
      }))
    }
  }, [setEventData, campsites])

  // 自動填入資料
  const handleAutoFill = () => {
    const demoData = {
      eventDescription:
        '適合喜歡親近自然、享受戶外活動的朋友參加。行程將安排導覽員帶領大家探索露營區周邊的生態與景點。無論您是露營新手還是經驗豐富的露營愛好者，這次活動都能讓您感受到大自然的魅力，並結交來自不同地方的新朋友！',
      organizerNick: 'SunnyHiker123',
      eventTitle: '秋季露營揪團',
      eventNotes: [
        '活動當日會於早上9點集合，詳細集合地點將會提前一周通知參加者。',
        '為方便聯絡，請加入活動專屬的LINE群組，相關的群組連結將會在報名成功後提供。',
        '如需攜帶寵物參加，請提前告知主辦方以便安排。',
        '如果您有任何特殊飲食需求或過敏，請提前告知，以便主辦方準備合適的餐點。',
        '活動過程中，將由主辦方SunnyHiker123負責主要聯絡，並提供緊急聯絡方式。',
      ].join('\n'),
    }

    setEventData((prev) => {
      const updatedEventData = { ...prev, ...demoData }
      localStorage.setItem('eventPreviewData', JSON.stringify(updatedEventData))
      return updatedEventData
    })
  }

  // 表單驗證
  const validateForm = () => {
    const newErrors = {}
  
    // 檢查必填欄位
    if (!imageUrl) newErrors.imageUrl = '請上傳圖片'
    if (!organizerNick) newErrors.organizerNick = '請填寫暱稱'
    if (!eventDescription) newErrors.eventDescription = '請填寫活動簡介'
    if (!eventTitle) newErrors.eventTitle = '請填寫活動名稱'
    if (!eStartDate) newErrors.eStartDate = '請選擇開始日期'
    if (!eEndDate) newErrors.eEndDate = '請選擇結束日期'
    if (!eventPeople) newErrors.eventPeople = '請填寫活動人數'
    if (!eventNotes) newErrors.eventNotes = '請填寫備註'
  
    // 禁用詞彙檢查
    const checkProhibitedWords = (text, fieldName) => {
      const containsProhibited = prohibitedWords.some((word) => text.includes(word))
      if (containsProhibited) {
        newErrors[fieldName] = `*包含敏感詞彙`
      }
    }
  
    checkProhibitedWords(organizerNick, 'organizerNick')
    checkProhibitedWords(eventDescription, 'eventDescription')
    checkProhibitedWords(eventTitle, 'eventTitle')
    checkProhibitedWords(eventNotes, 'eventNotes')
  
    if (!agree) newErrors.agree = '請同意揪團主辦人聲明'
  
    setErrors(newErrors)
  
    return Object.keys(newErrors).length === 0
  }

  // 上傳圖片處理邏輯
  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    if (file) {
      // 使用 Compressor 壓縮圖片
      new Compressor(file, {
        quality: 0.4,
        maxWidth: 600,
        maxHeight: 600,
        success: async (compressedResult) => {
          const formData = new FormData()
          formData.append('file', compressedResult) // 將壓縮後的圖片加入 FormData

          try {
            const response = await fetch(
              'http://localhost:3005/events/api/uploads',
              {
                method: 'POST',
                body: formData,
              }
            )

            if (response.ok) {
              const data = await response.json()
              // 成功後將返回的圖片 URL 更新到 eventData 中
              handleChange('imageUrl', `http://localhost:3005/${data.filePath}`)
            } else {
              console.error('圖片上傳失敗')
            }
          } catch (error) {
            console.error('圖片上傳錯誤:', error)
          }
        },
        error(err) {
          console.error('圖片壓縮失敗:', err)
        },
      })
    }
  }

  useEffect(() => {
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: function (selectedDates) {
        if (selectedDates.length > 0) {
          const selectedDate = formatToTaiwanDate(selectedDates[0])
          handleChange('eStartDate', selectedDate)

          // 設置結束日期的最小日期
          const endDateInput = document.getElementById('end-date')
          endDateInput._flatpickr.set('minDate', selectedDates[0])
        }
      },
    })

    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: function (selectedDates) {
        if (selectedDates.length > 0) {
          const selectedDate = formatToTaiwanDate(selectedDates[0])
          handleChange('eEndDate', selectedDate)
        }
      },
    })
  }, [])

  // 轉換為台灣時間
  const formatToTaiwanDate = (date) => {
    const offset = -480
    const localDate = new Date(date.getTime() - offset * 60000)
    return localDate.toISOString().split('T')[0]
  }

  const handleChange = (field, value) => {
    setEventData((prev) => {
      const updatedEventData = { ...prev, [field]: value }
      localStorage.setItem('eventPreviewData', JSON.stringify(updatedEventData))
      return updatedEventData
    })
  }

  useEffect(() => {
    const fetchCampsites = async () => {
      const res = await fetch('http://localhost:3005/events/api/campsites')
      const data = await res.json()
      setCampsites(data)
    }
    fetchCampsites()
  }, [])

  useEffect(() => {
    if (selectedCampsite) {
      const fetchBookingTypes = async () => {
        const res = await fetch(
          `http://localhost:3005/events/api/booking_types?campsite_id=${selectedCampsite.id}`
        )
        const data = await res.json()
        setBookingTypes(data)
      }
      fetchBookingTypes()
    } else {
      setBookingTypes([])
    }
  }, [selectedCampsite])

  const handleOrderQuantityChange = (e, book_type) => {
    let value = parseInt(e.target.value) || 1
    if (value > book_type.stock) value = book_type.stock
    handleChange('orderQuantity', value)
    handleChange('orderAmount', value * book_type.price)
  }

  const handleEventPeopleChange = (e) => {
    let value = parseInt(e.target.value) || 1
    const maxPeople = (selectedBookType?.max_per || 1) * orderQuantity
    if (value > maxPeople) value = maxPeople
    handleChange('eventPeople', value)

    if (value > 0) {
      handleChange(
        'costPerPerson',
        ((orderAmount + eOtherFees) / value).toFixed(1)
      )
    } else {
      handleChange('costPerPerson', 0)
    }
  }

  const handleOtherFeesChange = (e) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value)
    handleChange('eOtherFees', value)
  }

  const handleAccommodationChange = (book_type) => {
    handleChange('selectedBookType', book_type)
    handleChange('orderQuantity', 1)
    handleChange('orderAmount', book_type.price)
    handleChange(
      'costPerPerson',
      ((book_type.price + eOtherFees) / eventPeople).toFixed(1)
    )
  }

  const handleCampsiteChange = (e) => {
    const selectedId = parseInt(e.target.value)
    const campsite = campsites.find((camp) => camp.id === selectedId)
    setSelectedCampsite(campsite)
    handleChange('camp_id', campsite?.id)
    handleChange('campName', campsite?.name)
    handleChange('campAdd', campsite?.address)
  }

  const handlePreview = () => {
    // 首先進行表單驗證
    if (!validateForm()) {
      return // 如果表單驗證失敗，則停止後續處理
    }

    // 如果驗證成功，進行預覽跳轉
    const previewData = {
      ...eventData,
      user_id: userData.user_id,
      camp_id: selectedCampsite?.id,
      campName: selectedCampsite?.name,
      campAdd: selectedCampsite?.address,
    }

    localStorage.setItem('eventPreviewData', JSON.stringify(previewData))
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
              {imageUrl && (
                <img
                  id="ecuploaded-image"
                  src={imageUrl}
                  alt="uploaded-image"
                />
              )}
              <input
                type="file"
                id="ecupload-image"
                accept=".jpg, .png"
                onChange={handleUploadImage}
              />
              {errors.imageUrl && (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  {errors.imageUrl}
                </p>
              )}
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
                onChange={(e) =>
                  handleChange('eventDescription', e.target.value)
                }
                required
              />
              {errors.eventDescription && (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  {errors.eventDescription}
                </p>
              )}
              {/* 自動填入資料的按鈕 */}
              <div
                className="eautobtn"
                style={{ textAlign: 'center', margin: '10px' }}
              >
                <Button label="demo資料" onClick={handleAutoFill} />
              </div>
            </div>
            {/* 活動資訊 */}
            <div className="ectitle">
              <h3 className="ech3">活動資訊</h3>
            </div>

            <div className="ecaboutuser">
              {/* 主辦人（自動帶入會員名稱） */}
              <div className="ecform-group">
                <label htmlFor="organizer">會員ID</label>
                <input
                  type="text"
                  id="userid"
                  name="userid"
                  value={userData.user_id} // 綁定會員ID
                  style={{ color: '#99837B' }}
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
                  onChange={(e) =>
                    handleChange('organizerNick', e.target.value)
                  }
                  placeholder="大家都會看到お"
                  required
                />
                {errors.organizerNick && (
                  <p style={{ color: 'red', fontSize: '12px' }}>
                    {errors.organizerNick}
                  </p>
                )}
              </div>
            </div>
            {/* 活動名稱 */}
            <div className="ecform-group">
              <label htmlFor="ecevent-name">活動名稱</label>
              <input
                type="text"
                id="eventTitle"
                value={eventTitle}
                onChange={(e) => handleChange('eventTitle', e.target.value)}
                required
              />
              {errors.eventTitle && (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  {errors.eventTitle}
                </p>
              )}
            </div>

            {/* 日期選擇 */}
            <div className="ecdate-group">
              <div className="ecform-group">
                <label htmlFor="start-date">開始日期</label>
                <input
                  type="text"
                  id="start-date"
                  value={eStartDate}
                  onChange={(e) => handleChange('eStartDate', e.target.value)}
                  placeholder="選擇開始日期"
                  required
                />
                {errors.eStartDate && (
                  <p style={{ color: 'red', fontSize: '12px' }}>
                    {errors.eStartDate}
                  </p>
                )}
              </div>
              <div className="ecform-group">
                <label htmlFor="end-date">結束日期</label>
                <input
                  type="text"
                  id="end-date"
                  value={eEndDate}
                  onChange={(e) => handleChange('eEndDate', e.target.value)}
                  placeholder="選擇結束日期"
                  required
                />
                {errors.eEndDate && (
                  <p style={{ color: 'red', fontSize: '12px' }}>
                    {errors.eEndDate}
                  </p>
                )}
              </div>
            </div>

            <div className="eclocation-group">
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
                  {errors.eventPeople && (
                    <p style={{ color: 'red', fontSize: '12px' }}>
                      {errors.eventPeople}
                    </p>
                  )}
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
                <strong>其他支出：</strong> {parseInt(eOtherFees)} 元
              </p>
              <p>
                <strong>總費用：</strong> {orderAmount + eOtherFees} 元
              </p>
              <hr /> <hr />
              <p>
                <strong>每人費用：</strong> {parseInt(costPerPerson)} 元
              </p>
            </div>

            {/* 備註 */}
            <div className="ecform-group">
              <label htmlFor="eventNotes">備註</label>
              <textarea
                id="eventNotes"
                rows={4}
                value={eventNotes}
                onChange={(e) => handleChange('eventNotes', e.target.value)}
                required
              />
              {errors.eventNotes && (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  {errors.eventNotes}
                </p>
              )}
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
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              {errors.agree && (
                <p style={{ color: 'red', fontSize: '12px' }}>{errors.agree}</p>
              )}
              我已閱讀並同意上述聲明
            </div>
            <div className="eccheckbox">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              {errors.agree && (
                <p style={{ color: 'red', fontSize: '12px' }}>{errors.agree}</p>
              )}
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
