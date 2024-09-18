import React from 'react'

const Pagination = () => {
  return (
    <nav className="pagination" aria-label="Page navigation">
      <button className="page-button">1</button>
      <button className="page-button">2</button>
      <button className="page-button page-button-active">3</button>
      <span className="page-ellipsis">...</span>
      <button className="page-button">10</button>
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          gap: 19px;
          margin-top: 39px;
        }

        .page-button {
          width: 79px;
          height: 62px;
          border-radius: 25px;
          background-color: #ada752;
          color: var(--white);
          border: none;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
        }

        .page-button-active {
          background-color: #ff82d2;
        }

        .page-ellipsis {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: var(--white);
        }
      `}</style>
    </nav>
  )
}

export default Pagination
