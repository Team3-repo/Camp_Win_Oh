import React from 'react'
import Button from './button'
// import { IoMdHeartEmpty } from 'react-icons/io'

export default function Card({
  title,
  content,
  content2,
  content3,
  imageUrl,
  Estate,
  alt,
  ESCol,
  label,
  price,
  showIcon = false, // 新增的屬性來控制是否顯示圖標
  // icon = <IoMdHeartEmpty />,
  CardLike,
  CardLikeIcon,
  PCol,
}) {
  return (
    <>
      <div className="card">
        {showIcon && ( 
          <div className={CardLike}>
            <div className={CardLikeIcon}>{icon}</div>
          </div>
        )}
        <div className={ESCol}>
          <h5 className="ct_state">{Estate}</h5>
        </div>
        <div className={PCol}>
          <h4 className="ct_price">{price}</h4>
        </div>
        <img src={imageUrl} className="card-image" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-content">{content}</p>
          <p className="card-content">{content2}</p>
          <p className="card-content">{content3}</p>

          <Button
            label={label}
            onClick={() => alert('Button clicked!')}
            className="btn btn-go"
          />
        </div>
      </div>
    </>
  )
}
