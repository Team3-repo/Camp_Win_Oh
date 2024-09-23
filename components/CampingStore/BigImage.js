import React from "react";

const ImageComponent = () => {
  return (
    <section className="image-section">
      <img
        loading="lazy"
        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30e4c829957726eab14cdd6600b6ccc669ae8fd1895dd1718837270e328c643?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2ce100ad76dc3b9efb5dfb87509b3965d53b037844509dc338dc0835a115c8?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
        alt="Decorative full-width image"
        className="full-width-image"
      />
      <style jsx>{`
        .image-section {
          width: 100%;
        }
        .full-width-image {
          aspect-ratio: 2.45;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          min-height: 784px;
          padding: 50px 100px;
        }
        @media (max-width: 700px) {
          .full-width-image {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageComponent;