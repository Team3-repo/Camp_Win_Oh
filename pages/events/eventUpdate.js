import React, { useEffect } from 'react'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import Navbar from '@/components/event/navbar'
import Footer2 from '@/components/event/footer2'
import Button from '@/components/book/button'

export default function EventCreate() {
  useEffect(() => {
    flatpickr('#start-date', {
      dateFormat: 'Y-m-d',
    })
    flatpickr('#end-date', {
      dateFormat: 'Y-m-d',
    })
  }, [])

  return (
    <>
      <Navbar />
      <section className="eusectionall">
        <h2 className="eusection-title">修改活動</h2>
        <div className="eusection-form">
          {/* 上傳圖片 */}
          <section className="eusection">
            <div className="eutitle">
              <h3 className="euh2">上傳圖片</h3>
            </div>
            <div className="euupload-wrapper">
              <img id="euuploaded-image" src="" alt="uploaded-image" />
              <input type="file" id="euupload-image" accept=".jpg, .png" />
              <button type="button" className="euupload-btn">
                上傳
              </button>
              <div className="euimage-controls">
                <button type="button" className="euedit-btn">
                  編輯
                </button>
                <button type="button" className="eudelete-btn">
                  刪除
                </button>
              </div>
            </div>

            {/* 活動資訊 */}
            <div className="eutitle">
              <h3 className="euh2">活動資訊</h3>
            </div>
            {/* 主辦人（自動帶入會員名稱） */}
            <div className="euform-group">
              <label htmlFor="organizer">主辦人</label>
              <input
                type="text"
                id="organizer"
                defaultValue="會員名稱"
                readOnly
              />
            </div>
            {/* 活動名稱 */}
            <div className="euform-group">
              <label htmlFor="euevent-name">活動名稱 *</label>
              <input type="text" id="euevent-name" required />
            </div>
            {/* 人數限制 */}
            <div className="euform-group">
              <label htmlFor="eupeople-limit">人數限制 *</label>
              <input type="number" id="eupeople-limit" required />
            </div>
            {/* 費用 */}
            <div className="ecform-group">
              <label htmlFor="ecfee">費用（單位：每人） *</label>
              <input type="number" id="ecfee" required />
            </div>
            {/* 日期選擇 */}
            <div className="eudate-group">
              <div className="euform-group">
                <label htmlFor="start-date">開始日期</label>
                <input type="text" id="start-date" placeholder="選擇開始日期" />
              </div>
              <div className="euform-group">
                <label htmlFor="end-date">結束日期</label>
                <input type="text" id="end-date" placeholder="選擇結束日期" />
              </div>
            </div>
            {/* 區域和營地 */}
            <div className="eulocation-group">
              <div className="euform-group">
                <label htmlFor="euarea">區域</label>
                <select id="euarea">
                  <option value="北部">北部</option>
                  <option value="中部">中部</option>
                  <option value="南部">南部</option>
                  <option value="東部">東部</option>
                </select>
              </div>
              <div className="euform-group">
                <label htmlFor="eucamp">營地</label>
                <select id="eucamp">
                  <option value="山Chill">山Chill</option>
                  {/* 根據選定的區域連動營地選項... */}
                </select>
              </div>
            </div>
            {/* 備註 */}
            <div className="euform-group">
              <label htmlFor="notes">備註</label>
              <textarea id="notes" rows={4} defaultValue={''} />
            </div>
          </section>
          {/* 主辦人聲明 */}
          <section className="eusection">
            <div className="eutitle">
              <h3 className="euh3">揪團主辦人聲明</h3>
            </div>
            <div className="eudeclaragree">
              <p>
                我了解並同意，作為揪團活動的主辦人，我有責任確保活動的合法性，並遵守法律與規範。任何違法行為（如未經許可的營地使用、非法活動或危害公共安全的行為）將由主辦人自行承擔一切法律責任，本網站不承擔任何連帶責任。
              </p>
            </div>
            <div className="eucheckbox">
              <input type="checkbox" id="euagree" /> 我已閱讀並同意上述聲明
            </div>
          </section>
        </div>
        {/* 提交按鈕 */}
        <Button label="更新" onClick={() => alert('Button clicked!')} />
      </section>

      <Footer2 />
    </>
  )
}
