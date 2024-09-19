import React from 'react'

const ExampleCarouselImage = () => {
  return (
    <div className="banners">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
        alt="Example Carousel"
      />
      <img src="https://www.anime-chiikawa.jp/images/episodes/084.jpg" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a841df1004403854633321fae117f4c1a2b3084cf78fdf62334202bb8d204?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
        alt="Example Carousel"
      />
      <style jsx>{`
        .banners {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default ExampleCarouselImage
