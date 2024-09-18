import Button from '@/components/book/button'
import Card from '@/components/book/card'
import { IoSearch } from 'react-icons/io5'
import { FaArrowCircleRight } from 'react-icons/fa'
import ProgressBar from '@/components/book/ProgressBar'
import Form from '@/components/form/Form'
import FormField from '@/components/form/FormField'
import SearchInput from '@/components/SearchInput'

export default function Test() {
  return (
    <>
      <h1>共用元件-按鈕/Card</h1>
      <div>
        <h3>大按鈕</h3>
        {/* book */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            label={
              <>
                <IoSearch />
                &nbsp;搜索
              </>
            }
            onClick={() => alert('Button clicked!')}
          />
          <Button label="搜索" onClick={() => alert('Button clicked!')} />
          <Button label="前往預約" onClick={() => alert('Button clicked!')} />
          <Button label="確認付款" onClick={() => alert('Button clicked!')} />
          <Button label="前往付款" onClick={() => alert('Button clicked!')} />
          <Button
            label="套用優惠券"
            onClick={() => alert('Button clicked!')}
            type="btn-coup"
          />
        </div>
        <br />
        {/* product */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="加入購物車" onClick={() => alert('Button clicked!')} />
          <Button label="前往結帳" onClick={() => alert('Button clicked!')} />
          <Button label="繼續選購" onClick={() => alert('Button clicked!')} />
        </div>
        <br />
        {/* event */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="+建立活動" onClick={() => alert('Button clicked!')} />
          <Button label="加入活動" onClick={() => alert('Button clicked!')} />
          <Button label="退出活動" onClick={() => alert('Button clicked!')} />
          <Button label="探索更多" onClick={() => alert('Button clicked!')} />
          <Button
            label={
              <>
                舉辦活動&nbsp;
                <FaArrowCircleRight />
              </>
            }
            onClick={() => alert('Button clicked!')}
          />
        </div>
        <br />
        {/* login */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="Log in" onClick={() => alert('Button clicked!')} />
          <Button label="Continue" onClick={() => alert('Button clicked!')} />
        </div>
        <hr />

        <h3>小按鈕</h3>
        {/* book */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            label="立即前往預訂"
            onClick={() => alert('Button clicked!')}
          />
          <Button label="使用" onClick={() => alert('Button clicked!')} />
        </div>
        <br />
        {/* product */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="查看購物車" onClick={() => alert('Button clicked!')} />
          <Button label="回上一頁" onClick={() => alert('Button clicked!')} />
          <Button label="前往付款" onClick={() => alert('Button clicked!')} />
        </div>
        <br />
        {/* event */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="探索更多" onClick={() => alert('Button clicked!')} />
          <Button label="上傳" onClick={() => alert('Button clicked!')} />
          <Button label="更新" onClick={() => alert('Button clicked!')} />
          <Button label="建立活動" onClick={() => alert('Button clicked!')} />
        </div>
        <br />
        {/* login */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button label="Log in" onClick={() => alert('Button clicked!')} />
          <Button label="Continue" onClick={() => alert('Button clicked!')} />
        </div>
        <hr />

        {/* 標籤:地區篩選 */}
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button
            label="全部地區"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="北部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="中部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="南部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
          <Button
            label="東部"
            onClick={() => alert('Button clicked!')}
            type="btn-reg"
          />
        </div>
        <hr />

        <h3>イ~ Book-card</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card
            PCol="cardPrice"
            price="NT$ 137/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon" // 確保這裡使用的名稱與 CSS 模組中的 class 名稱一致
            showIcon={true}
            title="標準營位"
            content="場地區域： A區"
            content2="房型： 小木屋"
            content3="適合人數： 2-6人"
            imageUrl="https://i.postimg.cc/Xq9nC33y/4.jpg"
            label="立即前往預訂"
            onClick={() => alert('Button Clicked!')}
          />
        </div>

        <br />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card
            PCol="cardPrice"
            price="NT$ 12344/晚"
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon"
            showIcon={true}
            title="山林樂活露營區"
            content="房型： 小木屋"
            content2="容納人數： 最多可容納8人"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即前往預訂"
            onClick={() => alert('Button Clicked!')}
          />
        </div>
        <hr />

        <h3>ヤ~ Event-card</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            ESCol="e-s-col2"
            Estate="已截止"
            title="夏日狂歡派對"
            content="活動人數：4人 "
            content3="報名期限：2024-08-26"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
        </div>
        <hr />

        <h3>ハ~ Product-card</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card
            cardLike="cardLike"
            cardLikeIcon="cardLikeIcon"
            showIcon={true}
            PCol="cardPrice"
            price="NT$ 300"
            title="睡袋"
            content="標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即選購"
            onClick={() => alert('Button Clicked!')}
          />
        </div>
      </div>

      {/* step-by-step */}
      <ProgressBar />
      <Form />
      <SearchInput placeholder="請輸入搜尋關鍵字"/>
      <SearchInput placeholder="請輸入優惠券" />
      <FormField
          label="姓名"
          id="name"
          type="text"
          placeholder="請輸入姓名"
          required={true}
        />
        <FormField
          label="Email"
          id="email"
          type="email"
          placeholder="請輸入email"
          required={true}
        />
        <FormField
          label="手機號碼"
          id="phone"
          type="tel"
          placeholder="請輸入手機號碼"
          required={true}
        />
    </>
  )
}
