import React from 'react'

export default function etopicCards({
  title = '高山健行',
  campname = '雲海仙境',
  campdate = '2024-10-10',
  imgUrl = 'https://i.postimg.cc/Rh0b3ckd/camping-6882479-1280.jpg',
}) {
  return (
    <>
      <div
        className="ecard"
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      >
        <div className="etCard-content">
          <h3>{title}</h3>
          <p>{campname}</p>
          <span>{campdate}</span>
        </div>
      </div>
    </>
  )
}
