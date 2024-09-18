import styles from '../../styles/HomePage.module.css'
import Button from './button'

export default function SearchFilter() {
  return (
    <>
      <div className={styles.AdvancedSearchContainer}>
        <div className={styles.filterContainer}>
          <h2>查找空位</h2>
          <div className={styles.dateFilter}>
            {/* 日期 */}
            <div className={styles.dateSection}>
              <label htmlFor="datePicker">入住及退房日期</label>
              <input
                type="text"
                id="datePicker"
                placeholder="08/24 (Sat) - 08/25 (Sun), 1晚"
              />
              <i className="calendarIcon" />
            </div>
            {/* 人數 */}
            <div className={styles.guestSection}>
              <label htmlFor="guestSelect">房客</label>
              <select id="guestSelect">
                <option>大人: 2人；小孩: 2人</option>
                <option>大人: 1人；小孩: 1人</option>
                <option>大人: 3人；小孩: 0人</option>
              </select>
            </div>
            <Button label="搜索" onClick={() => alert('Button clicked!')} />
          </div>
          {/* bedType */}
          <div className={styles.typeSection}>
            <label>房型選擇</label>
            <div className="radioGroup">
              <input type="radio" id="all" name="type" defaultChecked="" />
              <label htmlFor="all">全部</label>
              <input className="bedType" type="radio" id="tent" name="type" />
              <label htmlFor="tent">帳篷區</label>
              <input className="bedType" type="radio" id="cabin" name="type" />
              <label htmlFor="cabin">小木屋</label>
              <input className="bedType" type="radio" id="rv" name="type" />
              <label htmlFor="rv">露營車</label>
            </div>
          </div>
          {/* area */}
          <div className={styles.areaSection}>
            <label>區域選擇</label>
            <div className="radio-group">
              <input
                className="regInput"
                type="radio"
                id="all-areas"
                name="area"
                defaultChecked=""
              />
              <label htmlFor="all-areas">全部</label>
              <input type="radio" id="area-a" name="area" />
              <label htmlFor="area-a">A區</label>
              <input type="radio" id="area-b" name="area" />
              <label htmlFor="area-b">B區</label>
              <input type="radio" id="area-c" name="area" />
              <label htmlFor="area-c">C區</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
