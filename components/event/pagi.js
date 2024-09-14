import React from 'react'

export default function Pagi() {
  return (
    <>
      <ul className="pagination modal-4">
        <li>
          <h5 href="#" className="prev">
            <i className="fa fa-chevron-left" />
            上一頁
          </h5>
          <h5>1</h5>
        </li>
        <li>
          <h5>2</h5>
        </li>
        <li>
          <h5>3</h5>
        </li>
        <li>
          <h5>4</h5>
        </li>
        <li>
          <h5>5</h5>
        </li>
        <li>
          <h5>6</h5>
        </li>
        <li>
          <h5>7</h5>
        </li>
        <li>
          <h5 className="next">
            下一頁
            <i className="fa fa-chevron-right" />
          </h5>
        </li>
      </ul>
    </>
  )
}
