import React from 'react'

const ReviewCard = ({ rating, reviewer, date, comment, images }) => {
  return (
    <>
      <article className="review-card">
        <div className="review-header">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                loading="lazy"
                src={
                  star <= rating
                    ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/4708b0a9ad3acaf15ec173a3a01268aed197e98e3ec128438005ffde3c60e0d0?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85'
                    : 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2c094f506fc515adf9c47e0e61df87db595c019bcdb16a1c500396270b286a?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85'
                }
                className="star-icon"
                alt={star <= rating ? 'Filled star' : 'Empty star'}
              />
            ))}
          </div>
          <div className="reviewer"><p>{reviewer}</p></div>
          <div className="review-date"><p>{date}</p></div>
        </div>
        <p className="review-comment">{comment}</p>
        <div className="review-images">
          {images.map((image, index) => (
            <img
              key={index}
              loading="lazy"
              src={image}
              className="review-image"
              alt={`Review image ${index + 1}`}
            />
          ))}
        </div>
      </article>
      <style jsx>
        {`
          .review-card {
            background-color: #fff;
            border-radius: 1.25rem;
            padding: 1.875rem;
            width: calc(33.333% - 1.6667rem);
          }

          .review-card:nth-child(3n-1) {
            background-color: #d8cec7;
          }

          .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.0625rem;
          }

          .rating {
            display: flex;
            gap: 0.0625rem;
          }

          .reviewer {
            color: #4c3a30;
          }

          .review-date {
            color: #4c3a30;
          }

          .review-comment {
            margin-bottom: 1.0625rem;
          }

          .review-images {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 10px;
          }

          .review-image {
            width: 80px;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }
          .star-icon {
          width:25px;
          height: auto;
        }
        `}
      </style>
    </>
  )
}

const Reviews = () => {
  const reviews = [
    {
      rating: 4,
      reviewer: 'Sir 張',
      date: 'Jun. 23',
      comment:
        '徒步路線非常值得推薦，我們一家人都很享受這次露營之旅。強烈推薦 給其他家庭!',
      images: [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/6121657f65a233ac5637079c7d91aae1a1181a52525a930bbc95e2b5b76b4b91?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7a7b28be7bd416569990484c43e97234b3ebadc7510291e844dff1265bb606aa?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5402b160f15d8cd1468ccfedd73eda603188253ee7d6162e249acf2a6f690c46?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
      ],
    },
    {
      rating: 4,
      reviewer: 'Miss 陳',
      date: 'May. 25',
      comment: '露營地設備齊全，職員友善。我們下次一定會再來！',
      images: [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a84b9f3522fc423f9207105eeda1ddfa15858d3aa0a181f132fb180b25909a14?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/370df299451ffffb863621768b0bd10bccfbd20b7eda1358f504a9a89334820d?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d431b731a153068e0bd30e75cb1c131688d30a6f53da2eead7d08cde0bb0cbb6?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
      ],
    },
    {
      rating: 5,
      reviewer: 'Miss 吳',
      date: 'May. 5',
      comment:
        '這裡的環境非常優美，真是遠離城市喧囂的好地方。小木屋非常舒適，篝火晚會讓人印象深刻!',
      images: [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b5f7134b803f3fca860ab3db14860dd4d8efd31d5837a2e4886d24c3e0ee4d2a?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f1d02a174ab01bf4d496f93e4a0fe66ed6e52d86fdc5b0e5933cdf654d39b9aa?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/6768735d10df887177bba59e8f4d9abd93771edb81b6ac9d445029e4e2d07b71?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85',
      ],
    },
  ]

  return (
    <>
      <section className="reviews-section">
        <div className="reviews-summary">
          <div className="overall-rating">
            <span className="rating-number"><h3>4.5/5</h3></span>
          </div>
          <div className="rating-stars">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df09474a800403da4b9f536787d0c496a38dc18a82c60401fdcd585d3e5262f?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
              className="star-icon"
              alt="Filled star"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df09474a800403da4b9f536787d0c496a38dc18a82c60401fdcd585d3e5262f?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
              className="star-icon"
              alt="Filled star"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df09474a800403da4b9f536787d0c496a38dc18a82c60401fdcd585d3e5262f?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
              className="star-icon"
              alt="Filled star"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df09474a800403da4b9f536787d0c496a38dc18a82c60401fdcd585d3e5262f?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
              className="star-icon"
              alt="Filled star"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b675bcf4a3092ad4c13f430ab9de28bc10dd97171622e69c4beb96e40c21c7cb?placeholderIfAbsent=true&apiKey=1aee4428530f453b80830a45c5f99b85"
              className="star-icon"
              alt="Half-filled star"
            />
          </div>
          <div className="review-count"><h4>109 則評價</h4></div>
          <button className="view-all-reviews"><p>查看全部評價</p></button>
        </div>
        
        <div className="review-list">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .reviews-section {
          background-color: var(--primary-light);
          padding: 1.125rem 6.25rem;
        }

        .reviews-summary {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
          position:relative;
          border-left: 0.625rem solid rgba(245, 174, 174, 1);
          padding-left: 1.25rem;
        }

        .overall-rating {
          color: #4c3a30;
        }

        .rating-number {
          line-height: 1.75rem;
        }

        .rating-total {
          line-height: 1.625rem;
          color:#000
        }

        .rating-stars {
          display: flex;
          gap: 0.0625rem;
        }

        .star-icon {
          width: 20px;
          height: auto;
        }

        .review-count {
          color: #000;
          
          font-weight:normal;
        }

        .view-all-reviews {
          background-color: transparent;
          border: none;
          color: #4c3a30;
          cursor: pointer;
          position:absolute;
          right:10px;
        }

        .review-list {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}

export default Reviews
