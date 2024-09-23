import { IoIosArrowDropleft } from 'react-icons/io'
import { IoIosArrowDropright } from 'react-icons/io'
import styles from '../../styles/component_style/SuggestCard.module.css'

export default function PaginationDots({ onPrev, onNext }) {
  return (
    <div className={styles.pagination}>
      <h5 className={styles.prev} onClick={onPrev}>
        <IoIosArrowDropleft />
      </h5>
      <h5 className={styles.next} onClick={onNext}>
        <IoIosArrowDropright />
      </h5>
    </div>
  )
}
