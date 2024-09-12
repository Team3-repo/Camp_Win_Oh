import Button from '../../components/book/button'
import Card from '@/components/book/card'
import { IoSearch } from 'react-icons/io5'

export default function Test() {
  return (
    <>
      <div>
        <h1>共用元件-按鈕/Card</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            label={
              <>
                <IoSearch />
                搜索
              </>
            }
            onClick={() => alert('Button clicked!')}
            className="btn btn-search"
          />
          <Button
            label="搜索"
            onClick={() => alert('Button clicked!')}
            className="btn btn-search2"
          />
        </div>
        <br />
        <Button
          label="立即前往預訂"
          onClick={() => alert('Button clicked!')}
          className="btn btn-go"
        />
        <hr />
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button
            label="全部地區"
            onClick={() => alert('Button clicked!')}
            className="btn btn-reg1"
          />
          <Button
            label="北部"
            onClick={() => alert('Button clicked!')}
            className="btn btn-reg2"
          />
        </div>
        <hr />
        <h3>イ~ Book-card</h3>
        <Card
          PCol="card-price"
          price="NT$ 1344/晚"
          CardLike="card-like"
          CardLikeIcon="card-like-icon"
          showIcon={true}
          title="標準營位"
          content="場地區域： A區"
          content2="房型： 小木屋"
          content3="適合人數： 2-6人"
          imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
          label="立即前往預訂"
          onClick={() => alert('Button Clicked!')}
        />
        <br />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Card
            PCol="card-price"
            price="NT$ 12344/晚"
            CardLike="card-like"
            CardLikeIcon="card-like-icon"
            showIcon={true}
            title="山林樂活露營區"
            content="房型： 小木屋"
            content2="容納人數： 最多可容納8人"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即前往預訂"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            PCol="card-price"
            price="NT$ 300"
            title="山林樂活露營區"
            content="房型： 小木屋 "
            content2="容納人數： 最多可容納8人"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            CardLike="card-like"
            CardLikeIcon="card-like-icon"
            showIcon={true}
            PCol="card-price"
            price="NT$ 12344"
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
            ESCol="card-e-state e-s-col1"
            Estate="報名中"
            title="原始森林探險"
            content="活動人數：6人"
            content2="報名期限：2024-09-20"
            imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
            label="立即參加"
            onClick={() => alert('Button Clicked!')}
          />
          <Card
            ESCol="card-e-state e-s-col2"
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
        <Card
          CardLike="card-like"
          CardLikeIcon="card-like-icon"
          showIcon={true}
          PCol="card-price"
          price="NT$ 300"
          title="睡袋"
          content="標準帳篷營位位於開闊的草地上，適合喜愛戶外露營的個人或小型團體。這裡提供基本的露營設施，讓您在大自然中享受最純粹的露營體驗。"
          imageUrl="https://www.anime-chiikawa.jp/images/episodes/084.jpg"
          label="加入購物車"
          onClick={() => alert('Button Clicked!')}
        />
      </div>
    </>
  )
}
