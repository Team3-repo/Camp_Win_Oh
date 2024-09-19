import React from 'react';

const HotTopics = () => {
  const topics = [
    { title: "夏日狂歡派對", location: "走馬賴農場", date: "2024-08-31", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" },
    { title: "高山健行", location: "雲海仙境", date: "2024-08-31", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" },
    { title: "輕鬆一夏", location: "山chill", date: "2024-08-31", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" }
  ];

  return (
    <>
      <section className="hot-topics">
        <h2 className="section-title">熱門主題</h2>
        <div className="filter-buttons">
          <button className="filter-btn active">全部地區</button>
          <button className="filter-btn">北部</button>
          <button className="filter-btn">中部</button>
          <button className="filter-btn">南部</button>
          <button className="filter-btn">東部</button>
        </div>
        <div className="topics-container">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <img loading="lazy" src={topic.image} className="topic-image" alt={topic.title} />
              <div className="topic-info">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-location">{topic.location}</p>
                <p className="topic-date">{topic.date}</p>
              </div>
            </div>
          ))}
          <button className="nav-arrow left" aria-label="Previous topics">&lt;</button>
          <button className="nav-arrow right" aria-label="Next topics">&gt;</button>
        </div>
      </section>
      <style jsx>{`
        .hot-topics {
          background-color: var(--primary);
          padding: 46px 100px;
        }
        .section-title {
          text-align: center;
          font-size: 35px;
          font-weight: 500;
          color: var(--secondary-dark);
        }
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
          padding: 15px 0;
          border-bottom: 1px solid var(--primary-dark);
        }
        .filter-btn {
          background-color: var(--primary-dark);
          color: var(--yellow);
          border: none;
          border-radius: 11px;
          padding: 10px;
          font-size: 20px;
          cursor: pointer;
        }
        .filter-btn.active {
          background-color: var(--yellow);
          color: var(--secondary-dark);
          border: 1px solid var(--yellow);
        }
        .topics-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          position: relative;
        }
        .topic-card {
          background-color: var(--white);
          border-radius: 20px;
          overflow: hidden;
          width: 30%;
        }
        .topic-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .topic-info {
          padding: 16px;
        }
        .topic-title {
          font-size: 32px;
          color: var(--secondary-dark);
          margin: 0;
        }
        .topic-location {
          font-size: 28px;
          color: var(--yellow);
          margin: 6px 0;
        }
        .topic-date {
          font-size: 24px;
          color: var(--secondary-dark);
          margin: 6px 0;
        }
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 40px;
          color: var(--pink);
          cursor: pointer;
        }
        .nav-arrow.left {
          left: -40px;
        }
        .nav-arrow.right {
          right: -40px;
        }
        @media (max-width: 991px) {
          .hot-topics {
            padding: 30px 20px;
          }
          .topics-container {
            flex-direction: column;
            gap: 20px;
          }
          .topic-card {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default HotTopics;





// import React from 'react'

// const HotTopics = () => {
//   return (

// <div
//   id="carouselExampleIndicators"
//   className="carousel slide"
//   data-bs-ride="carousel"
// >
//   <div className="carousel-indicators">
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={0}
//       className="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     />
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={1}
//       aria-label="Slide 2"
//     />
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={2}
//       aria-label="Slide 3"
//     />
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button
//     className="carousel-control-prev"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="prev"
//   >
//     <span className="carousel-control-prev-icon" aria-hidden="true" />
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button
//     className="carousel-control-next"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="next"
//   >
//     <span className="carousel-control-next-icon" aria-hidden="true" />
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>

// )
// }

// export default HotTopics
