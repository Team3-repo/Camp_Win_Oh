import React, { useState, useEffect, useContext } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Button from '@/components/book/button';
import { EventContext } from '@/context/event/EventContext';

export default function EventCreateForm() {
  const { eventData, setEventData } = useContext(EventContext);

  const {
    eventTitle,
    eventDescription,
    eStartDate,
    eEndDate,
    organizerNick,
    selectedBookType,
    orderQuantity,
    orderAmount,
    costPerPerson,
    eOtherFees,
    eventNotes,
    eventPeople,
    imageUrl,
  } = eventData;

  const [selectedCampsite, setSelectedCampsite] = useState(null);
  const [campsites, setCampsites] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);

  // 從 LocalStorage 中讀取資料並同步至狀態
  useEffect(() => {
    const storedEventData = localStorage.getItem('eventPreviewData');
    if (storedEventData) {
      const parsedData = JSON.parse(storedEventData);
      setEventData(parsedData);

      // 同步更新 selectedCampsite 狀態
      if (parsedData.camp_id) {
        const selectedCamp = campsites.find(camp => camp.id === parsedData.camp_id);
        setSelectedCampsite(selectedCamp);
      }
    }
  }, [setEventData, campsites]); // 注意將 campsites 作為依賴，確保在資料載入後再執行

  useEffect(() => {
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
      onChange: function (selectedDates) {
        const endDateInput = document.getElementById('end-date');
        if (selectedDates.length > 0) {
          endDateInput._flatpickr.set('minDate', selectedDates[0]);
        } else {
          endDateInput._flatpickr.set('minDate', new Date());
        }
      },
    });
    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
      minDate: new Date(),
    });
  }, []);

  const handleChange = (field, value) => {
    setEventData((prev) => {
      const updatedEventData = { ...prev, [field]: value };
      localStorage.setItem('eventPreviewData', JSON.stringify(updatedEventData));
      return updatedEventData;
    });
  };

  useEffect(() => {
    const fetchCampsites = async () => {
      const res = await fetch('http://localhost:3005/events/api/campsites');
      const data = await res.json();
      setCampsites(data);
    };
    fetchCampsites();
  }, []);

  useEffect(() => {
    if (selectedCampsite) {
      const fetchBookingTypes = async () => {
        const res = await fetch(`http://localhost:3005/events/api/booking_types?campsite_id=${selectedCampsite.id}`);
        const data = await res.json();
        setBookingTypes(data);
      };
      fetchBookingTypes();
    } else {
      setBookingTypes([]);
    }
  }, [selectedCampsite]);

  const handleOrderQuantityChange = (e, book_type) => {
    let value = parseInt(e.target.value) || 1;
    if (value > book_type.stock) value = book_type.stock;
    handleChange('orderQuantity', value);
    handleChange('orderAmount', value * book_type.price);
  };

  const handleEventPeopleChange = (e) => {
    let value = parseInt(e.target.value) || 1;
    const maxPeople = (selectedBookType?.max_per || 1) * orderQuantity;
    if (value > maxPeople) value = maxPeople;
    handleChange('eventPeople', value);

    if (value > 0) {
      handleChange('costPerPerson', ((orderAmount + eOtherFees) / value).toFixed(1));
    } else {
      handleChange('costPerPerson', 0);
    }
  };

  const handleOtherFeesChange = (e) => {
    let value = parseInt(e.target.value) || 0;
    handleChange('eOtherFees', value);
  };

  const handleAccommodationChange = (book_type) => {
    handleChange('selectedBookType', book_type);
    handleChange('orderQuantity', 1);
    handleChange('orderAmount', book_type.price);
    handleChange('costPerPerson', ((book_type.price + eOtherFees) / eventPeople).toFixed(1));
  };

  const handleCampsiteChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const campsite = campsites.find((camp) => camp.id === selectedId);
    setSelectedCampsite(campsite);
    handleChange('camp_id', campsite?.id);
    handleChange('campName', campsite?.name);
    handleChange('campAdd', campsite?.address);
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('imageUrl', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreview = () => {
    const previewData = {
      ...eventData,
      camp_id: selectedCampsite?.id,
      campName: selectedCampsite?.name,
      campAdd: selectedCampsite?.address,
    };
    localStorage.setItem('eventPreviewData', JSON.stringify(previewData));
    window.location.href = '/events/eventPreview';
  };

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
                  onChange={(e) =>
                    handleChange('organizerNick', e.target.value)
                  }
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
                onChange={(e) => handleChange('eventTitle', e.target.value)}
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
                  value={eStartDate}
                  onChange={(e) => handleChange('eStartDate', e.target.value)}
                  placeholder="選擇開始日期"
                  required
                />
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
                onChange={(e) => handleChange('eventNotes', e.target.value)}
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
