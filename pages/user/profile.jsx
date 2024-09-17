import FormField from '@/components/form/FormField'
import React from 'react'
import Button from '@/components/book/button'
import Navbar from '@/components/event/navbar'
import Footer1 from '@/components/event/footer1'
import styles from '@/styles/user/profile.module.css'
import customBody from '@/styles/user/customBody.module.css'

export default function profile() {
  return (
    <div className={customBody.noGlobal}>
      <Navbar />
      <div className={styles.container}>
        <h1 className="nav">設定</h1>

        {/* 按鈕切換 */}
        {/* className={styles.buttonGroup} */}
        <div className={styles.buttonGroup} >
          <Button label="個人資料" onClick={() => alert('Button clicked!')} />
          <Button
            label="付款方式"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="安全性"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
        </div>

        {/* 個人圖片 */}
        <section className={styles.outsideAvatar}>
          <div className={styles.avatarWrapper}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="avatar"
              width={70}
            />
          </div>
          <div>
            <h4>個人資料圖片</h4>
            <p>支援 3MB 以下的 png, jpeg, gif</p>
          </div>
        </section>

        <hr />

        <section className="basic-details">
          <h2>基本詳情</h2>
          <FormField
            label="姓名"
            id="name"
            type="text"
            placeholder="請輸入姓名"
            required={true}
            width="100%"
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            placeholder="請輸入email"
            required={true}
            width="100%"
          />
          <FormField
            label="地址"
            id="address"
            type="text" // 地址可以使用文本輸入
            placeholder="請輸入地址"
            required={true}
            width="100%"
          />
        </section>

        <section style={{ display: 'flex', gap: '5px' }}>
          <Button label="取消" onClick={() => alert('Button clicked!')} />
          <Button
            label="儲存變更"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
        </section>
      </div>

      <Footer1 />
    </div>
  )
}
