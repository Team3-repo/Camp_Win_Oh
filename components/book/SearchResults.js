import React from 'react'
import Button from './button'

const SearchResult = ({
  number,
  image,
  title,
  description,
  capacity,
  price,
  facilities,
}) => {
  return (
    <>
      <article className="search-result">
        <div className="result-number">
          <h2>{number}</h2>
        </div>
        <img src={image} alt={title} className="result-image" />
        <div className="result-details">
          <h3 className="result-title">{title}</h3>
          <h5 className="result-description">{description}</h5>
          <h5 className="result-capacity">適合人數: {capacity}</h5>
          <h5 className="result-price">
            價格: <span className="price-highlight">{price}</span>
          </h5>
          <h5 className="result-facilities">附加設施: {facilities}</h5>
        </div>
        <div className="result-actions">
          <Button label="前往預約" onClick={() => alert('Button clicked!')} />
          <Button
            label="查看詳細資訊"
            onClick={() => alert('Button clicked!')}
          />
        </div>
      </article>
      <style jsx>
        {`
          .search-result {
            display: flex;
            gap: 40px;
            border-bottom: 1px solid rgba(141, 141, 141, 1);
            padding-bottom: 1.25rem;
            margin-bottom: 1.875rem;
          }

          .result-number {
            font-weight: 400;
            color: #4c3a30;
            display: flex;
            align-items: center;
          }

          .result-image {
            width: 18.75rem;
            height: 15.625rem;
            object-fit: cover;
            border-radius: 0.3125rem;
          }

          .result-details {
            flex: 1;
          }

          .result-title {
            margin-bottom: 0.625rem;
          }

          .result-description,
          .result-capacity,.result-price,
          .result-facilities {
            margin-bottom: 0.3125rem;
            font-weight:normal;
          }

          .price-highlight {
            color: rgba(255, 88, 51, 1);
            font-weight: 900;
          }

          .result-actions {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

const SearchResults = () => {
  const results = [
    {
      number: 1,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a63b699567aa5583a4406745e08909e09b63c3e4d4b5ae599fceb0cf5c88faf3?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
      title: '【標準營位 | 帳篷區露營 | A區】',
      description:
        '帳篷區位於高山環繞的草地上，提供寧靜而開闊的露營體驗。每個營位均設有電源插座和飲水點，方便露營者使用',
      capacity: '每個帳篷營位最多容納4人',
      price: 'NTD 1200/晚',
      facilities: '營位提供基本桌椅設備，每個營位可停放一輛車',
    },
    {
      number: 2,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ebb17869eafa6d41040a3f59fb9771d8f69f8b551aba4f6ab02ef8e465ea5d5c?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
      title: '【露天木屋 | 小木屋住宿 | A區】',
      description:
        '小木屋位於山林深處，周圍環境寧靜，提供舒適的住宿選項。木屋內設有床鋪、簡易廚房、獨立浴室，適合家庭或小團體入住',
      capacity: '每間小木屋最多容納4人（2名成人和2名兒童）',
      price: 'NTD 3,800/晚',
      facilities: '配有空調、加熱器、小型冰箱、微波爐和免費Wi-Fi',
    },
  ]

  return (
    <>
      <section className="search-results">
        <h5 className="results-count">符合條件的房型 (共2筆)</h5>
        {results.map((result, index) => (
          <SearchResult key={index} {...result} />
        ))}
      </section>
      <style jsx>
        {`
          .search-results {
            padding: 0 6.25rem;
          }

          .results-count {
            background-color: rgba(245, 174, 174, 1);
            color: #fff;
            font-weight: normal;
            padding: 5px 10px;
            margin-bottom: 1.875rem;
          }
        `}
      </style>
    </>
  )
}
export default SearchResults
